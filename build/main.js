$(document).ready(function (e) {
    var pp = new PNGPlayer("#img", {
        frames: 3
    });
    pp.onFrame = function (f) {
        $("#frame").text(f.toString());
    };
    $("#play").on("click", function () {
        pp.play();
    });
    $("#stop").on("click", function () {
        pp.stop();
    });
    $("#pause").on("click", function () {
        pp.pause();
    });
    $("#row").on("click", function () {
        if (pp.row === 0) {
            pp.row = 1;
        }
        else {
            pp.row = 0;
        }
    });
    var pp2 = new PNGPlayer("#img2", {
        frames: 3,
        size: "88px 61px"
    });
});
//# sourceMappingURL=main.js.map