console.log("Hello final");

const r3d = {
    ///////////////////////////
    spd: 0.05,
    max: 340,
    ///////////////////////////
    O: [],
    num: 0,
    down: false,
    xm: 0,
    ym: 0,
    xb: 0,
    yb: 0,
    scr: 0,
    R: 0,
    N: 0,
    Im: 0,
    img: 0,
    nx: 0,
    ny: 0,
    nw: 0,

    init: function () {
        this.scr = document.getElementById("container");
        this.img = document
            .getElementById("particles")
            .getElementsByTagName("img");
        this.scr.onselectstart = function () {
            return false;
        };
        this.scr.ondrag = function () {
            return false;
        };
        this.scr.onmousemove = function (e) {
            if (r3d.down) {
                if (window.event) e = window.event;
                var xm = e.clientX - r3d.nx;
                var ym = e.clientY - r3d.ny;
                if (
                    Math.abs(xm - r3d.xb) + Math.abs(ym - r3d.yb) >
                    r3d.img[r3d.Im % r3d.img.length].width
                ) {
                    var o;
                    if (r3d.N < r3d.max) {
                        o = document.createElement("img");
                        r3d.scr.appendChild(o);
                        r3d.O[r3d.N % r3d.max] = o;
                    } else o = r3d.O[r3d.N % r3d.max];
                    var i = r3d.img[r3d.Im % r3d.img.length];
                    if (xm < r3d.nw) {
                        o.X = r3d.nw - xm;
                        o.c = -r3d.R - Math.PI / 2;
                    } else {
                        o.X = xm - r3d.nw;
                        o.c = -r3d.R + Math.PI / 2;
                    }
                    o.src = i.src;
                    o.w = Math.round(i.width / 2);
                    o.style.top = Math.round(ym - o.height / 2) + "px";
                    o.style.left = "-9999px";
                    r3d.N++;
                    r3d.xb = xm;
                    r3d.yb = ym;
                }
            }
            return false;
        };
        this.scr.onmousedown = function (e) {
            r3d.down = true;
            r3d.xb = r3d.yb = -999;
            return false;
        };
        this.scr.onmouseup = function (e) {
            r3d.down = false;
            r3d.Im++;
            return false;
        };
        r3d.resize();
        r3d.run();
    },

    resize: function () {
        var o = r3d.scr;
        r3d.nw = o.offsetWidth / 2;
        for (r3d.nx = 0, r3d.ny = 0; o != null; o = o.offsetParent) {
            r3d.nx += o.offsetLeft;
            r3d.ny += o.offsetTop;
        }
    },

    run: function () {
        r3d.R += r3d.spd;
        for (var i = 0, o; (o = r3d.O[i]); i++) {
            o.style.left =
                Math.round(r3d.nw + o.X * Math.sin(r3d.R + o.c) - o.w * 0.1) +
                "px";
            o.style.zIndex =
                500 +
                Math.round(2 * o.w + Math.abs(o.X) * Math.cos(r3d.R + o.c));
        }
        setTimeout(r3d.run, 32);
    },
};

//이미지 선택

window.onload = function () {
    onresize = r3d.resize;
    r3d.init();
};

function change(uri) {
    const dom = document.getElementById("particles");
    const img = document.createElement("img");
    img.src = uri;
    dom.innerHTML = "";
    dom.appendChild(img);
}

//배경

let cur = 0;
function next() {
    if (cur >= 2) return;
    cur += 1;
    changeBg(cur);
}

function prev() {
    if (cur <= 0) return;
    cur -= 1;
    changeBg(cur);
}

function changeBg(number) {
    document.documentElement.style.backgroundImage = `url("./img/bg${number}.${checkFormat(
        number
    )}")`;
}

function checkFormat(number) {
    switch (number) {
        case 1:
            return "jpg";
        case 0:
        case 2:
            return "jpg";
    }
}

// 제거
let remove = document.querySelector("#remove");
remove.addEventListener("click", function () {
    var particles = document
        .getElementById("container")
        .querySelectorAll("img"); //제거하고자 하는 엘리먼트
    particles.forEach(function (particle, index) {
        particle.remove();
    });
});
