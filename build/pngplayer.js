var PNGPlayer = (function () {
    function PNGPlayer(d, opts) {
        this._posLeft = 0;
        this._posTop = 0;
        this._posFrame = 0;
        this._posTimer = 0;
        this._playing = false;
        this._speed = [100];
        this._row = 0;
        var dom = $(d);
        this._width = dom.width();
        this._height = dom.height();
        dom.css({ "background-image": "url(" + dom.attr("src") + ")" }).removeAttr("src");
        this._frames = opts.frames;
        if (opts.size !== undefined) {
            dom.css("background-size", opts.size);
        }
        this.dom = dom;
        this.play();
    }
    Object.defineProperty(PNGPlayer.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (val) {
            if (val !== this._row) {
                this._row = val;
                this._posTop = val * this._height;
            }
        },
        enumerable: true,
        configurable: true
    });
    PNGPlayer.prototype.play = function (frame) {
        if (frame === void 0) { frame = this._posFrame; }
        if (this._playing === false) {
            this._playing = true;
            var speed = this._speed[frame] ? this._speed[frame] : this._speed[0];
            this._posLeft = frame * this._width;
            this.dom.css({ "background-position": this._posLeft + "px " + this._posTop + "px" });
            this._posFrame = frame + 1;
            this._posTimer = setTimeout((function () {
                this._play();
            }).bind(this), speed);
        }
    };
    PNGPlayer.prototype._play = function () {
        if (this._posFrame > this._frames)
            this._posFrame = 0;
        var speed = this._speed[this._posFrame] ? this._speed[this._posFrame] : this._speed[0];
        this._posLeft = this._posFrame * this._width;
        this.dom.css({ "background-position": this._posLeft + "px " + this._posTop + "px" });
        ++this._posFrame;
        this._posTimer = setTimeout((function () {
            this._play();
        }).bind(this), 100);
    };
    PNGPlayer.prototype.stop = function () {
        if (this._playing === true) {
            clearTimeout(this._posTimer);
            this.dom.css({ "background-position-x": "0" });
            this._posFrame = 0;
            this._playing = false;
        }
    };
    PNGPlayer.prototype.pause = function () {
        if (this._playing === true) {
            clearTimeout(this._posTimer);
            this._playing = false;
        }
    };
    PNGPlayer.version = "0.1";
    return PNGPlayer;
}());
//# sourceMappingURL=pngplayer.js.map