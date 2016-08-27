interface PNGPlayerOptions {
    frames: number;
    size?: string;
    speed?: number[];
}

interface PNGPlayerInstance {
    dom: JQuery;
    row: number;

    play(): void;
    stop(): void;
    pause(): void;
}

interface PNGPlayerConstructor {
    new(d: any, opts?: PNGPlayerOptions): PNGPlayerInstance;

    version: string;
}

// declare let PNGPlayer: PNGPlayerConstructor;