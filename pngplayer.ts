class PNGPlayer {

    public dom: JQuery;

    public static version: string = "0.1";

    // --- 当前播放位置 ---
    private _posLeft: number = 0;
    private _posTop: number = 0;
    private _posFrame: number = 0;
    private _posTimer: number = 0;

    // --- 宽和高 ---
    private _width: number;
    private _height: number;
    private _frames: number;

    // --- 状态 ---
    private _playing: boolean = false;

    // --- 播放速度 ---
    private _speed: number[] = [100];

    // --- 设置位移 ---
    private _row: number = 0;
    get row(): number {
        return this._row;
    }
    set row(val: number) {
        if (val !== this._row) {
            this._row = val;
            this._posTop = val * this._height;
        }
    }

    constructor(d: any, opts: PNGPlayerOptions) {
        let dom: JQuery = $(d);
        this._width = dom.width();
        this._height = dom.height();
        dom.css({"background-image": "url(" + dom.attr("src") + ")"}).removeAttr("src");
        this._frames = opts.frames;
        // --- 背景缩放 ---
        if (opts.size !== undefined) {
            dom.css("background-size", opts.size);
        }
        if (opts.speed !== undefined) {
            this._speed = opts.speed;
        }
        this.dom = dom;
        // --- 播放 ---
        this.play();
    }

    // --- 方法 ---
    public play(frame: number = this._posFrame): void {
        if (this._playing === false) {
            this._playing = true;
            this.onFrame(this._posFrame);
            let speed = this._speed[frame] ? this._speed[frame] : this._speed[0];
            this._posLeft = frame * this._width;
            this.dom.css({"background-position": this._posLeft + "px " + this._posTop + "px"});
            this._posFrame = frame + 1;
            this._posTimer = setTimeout((function(): void {
                this._play();
            }).bind(this), speed);
        }
    }
    private _play(): void {
        if (this._posFrame > this._frames)
            this._posFrame = 0;
        this.onFrame(this._posFrame);
        let speed = this._speed[this._posFrame] ? this._speed[this._posFrame] : this._speed[0];
        this._posLeft = this._posFrame * this._width;
        this.dom.css({"background-position": this._posLeft + "px " + this._posTop + "px"});
        ++this._posFrame;
        this._posTimer = setTimeout((function(): void {
            this._play();
        }).bind(this), speed);
    }

    public stop(): void {
        if (this._playing === true) {
            clearTimeout(this._posTimer);
            this.dom.css({"background-position-x": "0"});
            this._posFrame = 0;
            this._playing = false;
        }
    }

    public pause(): void {
        if (this._playing === true) {
            clearTimeout(this._posTimer);
            this._playing = false;
        }
    }

    // --- 事件 ---
    public onFrame(frame: number): void {};

}

