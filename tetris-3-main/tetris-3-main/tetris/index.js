let canvas;
let ctx;
let FPS = 50;

let ampleCanvas = 400
let altCanvas = 640

let ampleF = 40;
let altF = 40;

let ampleTaulell = 10;
let altTaulell = 20;
let score = 0;


let vermell = "#e30e00";
let blau = "#00b6e3";
let groc = "#dce300";
let gris = "#444242";
let taronja = "#f97f0c";
let rosa = "#f498f9";
let verd = "#60f57d";
let negro = "#000000";

let peça;
let objPeça = function () {
    this.x = 5;
    this.y = 5;

    this.tipo = 3;
    this.angle = 1;

    console.log("Peça creada")

    this.choque = function (angleNou, yNova, xNova) {
        let resultat = false;
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (grafics[this.tipo][angleNou][py][px] != 0) {
                    if (taulell[yNova + py][xNova + px] != 0) {
                        resultat = true;
                    }
                }
            }

        }


        return resultat;
    }

    this.nova = function () {
        this.tipo = Math.floor(Math.random() * 7)
        this.x = 4;
        this.y = 0;
    }



    this.dibuixa = function () {
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                let pos = grafics[this.tipo][this.angle][py][px]
                if (pos != 0) {
                    if (pos == 1) {
                        ctx.fillStyle = vermell
                    }
                    if (pos == 2) {
                        ctx.fillStyle = blau
                    }
                    if (pos == 3) {
                        ctx.fillStyle = groc
                    }
                    if (pos == 4) {
                        ctx.fillStyle = gris
                    }
                    if (pos == 5) {
                        ctx.fillStyle = taronja
                    }
                    if (pos == 6) {
                        ctx.fillStyle = rosa
                    }
                    if (pos == 7) {
                        ctx.fillStyle = negro
                    }
                    ctx.fillRect((this.x + px - 1) * ampleF, (this.y + py - 4) * altF, ampleF, altF)

                }
            }
        }

    }

    this.gameOver = function () {
        let gameOver = false
        for (px = 1; px <= ampleTaulell; px++) {
            if (taulell[2][px] > 0) {
                gameOver = true;
            }

        }
        console.log(gameOver)
        return gameOver;
    }

    this.fila = function () {
        let filaFeta;

        for (py = 4; py < altTaulell; py++) {

            filaFeta = true
            for (px = 1; px <= altTaulell; px++) {

                if (taulell[py][px] == 0) {
                    filaFeta = false;
                }
            }
            if (filaFeta == true) {
                score++
                for (px = 1; px < altTaulell; px++) {
                    taulell[py][px] = 0;
                }
            }
        }
    }

    this.retras = 50;
    this.fotograma = 0;
    this.caure = function () {
        if (this.fotograma < this.retras) {
            this.fotograma++
        } else {
            if (this.choque(this.angle, this.y + 1, this.x) == false) {
                this.y++
                this.fotograma = 0;
            } else {
                this.fixarPeça();
                if (this.gameOver()) {
                    recarrega();
                }
                this.nova();

                

            }

        }

    }

    this.fixarPeça = function () {
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (grafics[this.tipo][this.angle][py][px] > 0) {
                    taulell[this.y + py][this.x + px] = grafics[this.tipo][this.angle][py][px]
                }
            }
        }
    }
    this.rotar = function () {
        let angleNou = this.angle;

        if (angleNou < 3) {
            angleNou++
        } else {
            angleNou = 0
        }
        if (this.choque(angleNou, this.y, this.x) == false) {
            this.angle = angleNou;
        }
        console.log("ROTAR");
    }
    this.abajo = function () {
        if (this.choque(this.angle, this.y + 1, this.x) == false) {
            this.y++
        }
        console.log("ABAJO")

    }
    this.derecha = function () {
        if (this.choque(this.angle, this.y, this.x + 1) == false) {
            this.x++
        }
        console.log("DERECHA")
    }
    this.izquierda = function () {
        if (this.choque(this.angle, this.y, this.x - 1) == false) {
            this.x--
        }
        console.log("IZQUIERDA")
    }
    this.nova()
}
function recarrega() {
    document.location.reload()
}



let grafics =
    [
        [

            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]

            ],

        ],
        [

            [
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [2, 2, 2, 2],
                [0, 0, 0, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [2, 2, 2, 2],
                [0, 0, 0, 0]

            ],

        ],
        [

            [
                [0, 0, 0, 0],
                [0, 3, 3, 0],
                [3, 3, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 3, 0, 0],
                [0, 3, 3, 0],
                [0, 0, 3, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 3, 3, 0],
                [3, 3, 0, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 3, 0, 0],
                [0, 3, 3, 0],
                [0, 0, 3, 0]

            ],

        ],
        [

            [
                [0, 0, 0, 0],
                [0, 4, 4, 0],
                [0, 0, 4, 4],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 4, 0],
                [0, 4, 4, 0],
                [0, 4, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 4, 4, 0],
                [0, 0, 4, 4],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 4, 0],
                [0, 4, 4, 0],
                [0, 4, 0, 0]

            ],

        ],
        [

            [
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 5, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 5, 5, 5],
                [0, 5, 0, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 5, 5, 0],
                [0, 0, 5, 0],
                [0, 0, 5, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 5, 0],
                [5, 5, 5, 0],
                [0, 0, 0, 0]

            ],

        ],
        [

            [
                [0, 0, 6, 0],
                [0, 0, 6, 0],
                [0, 6, 6, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [6, 0, 0, 0],
                [6, 6, 6, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 6, 6, 0],
                [0, 6, 0, 0],
                [0, 6, 0, 0],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [6, 6, 6, 0],
                [0, 0, 6, 0],
                [0, 0, 0, 0]

            ],

        ],
        [

            [
                [0, 0, 0, 0],
                [7, 7, 7, 0],
                [0, 7, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 7, 0],
                [0, 7, 7, 0],
                [0, 0, 7, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 0, 7, 0],
                [0, 7, 7, 7],
                [0, 0, 0, 0]

            ],
            [
                [0, 0, 0, 0],
                [0, 7, 0, 0],
                [0, 7, 7, 0],
                [0, 7, 0, 0]

            ]

        ]

    ]

let taulell = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

function dibuixaTaulell() {
    for (let py = 0; py <= altTaulell; py++) {

        for (let px = 0; px <= ampleTaulell; px++) {

            ctx.fillStyle = '#FFFFFF';

            if (taulell[py][px] != 0) {

                ctx.fillStyle = negro;
            }
            ctx.fillRect((px - 1) * ampleF, (py - 4) * altF, ampleF, altF)
        }
    }
}

function inicialitzar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = ampleCanvas;
    canvas.height = altCanvas;


    peça = new objPeça()

    inicialitzarTeclat();

    setInterval(function () {
        principal();
    }, 1000 / FPS)
}


function principal() {
    console.log("BUCLE")
    borrarPantalla();
    dibuixaTaulell();
    peça.dibuixa();
    peça.caure();
    ctx.fillText("Score", 10, 10);

}

function borrarPantalla() {
    canvas.width = ampleCanvas;
    canvas.height = altCanvas;
}

function inicialitzarTeclat() {
    document.addEventListener("keydown", function (tecla) {
        if (tecla.key == "ArrowUp") {
            peça.rotar();
        }
        if (tecla.key == "ArrowDown") {
            peça.abajo();
        }
        if (tecla.key == "ArrowRight") {
            peça.derecha();
        }
        if (tecla.key == "ArrowLeft") {
            peça.izquierda();
        }

    })
}