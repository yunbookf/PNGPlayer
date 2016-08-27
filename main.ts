$(document).ready(function(e) {
    let pp: PNGPlayer = new PNGPlayer("#img", {
        frames: 4
    });
    $("#play").on("click", function(): void {
        pp.play();
    });
    $("#stop").on("click", function(): void {
        pp.stop();
    });
    $("#pause").on("click", function(): void {
        pp.pause();
    });
    $("#row").on("click", function(): void {
        if (pp.row === 0) {
            pp.row = 1;
        } else {
            pp.row = 0;
        }
    });
    let pp2: PNGPlayer = new PNGPlayer("#img2", {
        frames: 4,
        size: "88px 61px"
    });
});

