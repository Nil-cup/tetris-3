let canvas;
let ctx;
let FPS = 50;

let ampleCanvas = 400 
let altCanvas = 640

let ampleF = 40;
let altF = 40;

let ampleTaulell = 12; 
let altTaulell = 20 ;
let vermell = "#e30e00";
let blau = "#00b6e3";
let groc = "#dce300";
let gris = "#444242";
let taronja = "#f97f0c";
let rosa = "#f498f9";
let verd = "#60f57d";
let negro ="#000000";
    
let peça;
let objPeça = function(){
    this.x = 5;
    this.y = 5;

    this.tipo = 1;
    this.angle = 1;

console.log("Peça creada")

this.dibuixa = function (){

    for(let py=0; py<4; py++){
        for(let px=0; px<4; px++){
            let pos = grafics[this.tipo][this.angle][py][px]
            if(pos !=0){
                if(pos == 1){
                    ctx.fillStyle = vermell
                } 
                if(pos == 2){
                    ctx.fillStyle = blau
                }
                if(pos == 3){
                    ctx.fillStyle = groc
                }
                if(pos == 4){
                    ctx.fillStyle = gris
                }
                if(pos == 5){
                    ctx.fillStyle = taronja
                }
                if(pos == 6){
                    ctx.fillStyle = rosa
                }
                if(pos == 7){
                    ctx.fillStyle = negro
                }
                ctx.fillRect((this.x+px-1)*ampleF,(this.y+px-4)*altF,ampleF,altF)

            }
        }
    }
}

this.rotar = function(){
    console.log("ROTAR");
}
this.abajo = function(){
    console.log("ABAJO")
}
this.derecha = function(){
    console.log("DERECHA")
}
this.izquierda = function(){
    console.log("IZQUIERDA")
}

}



let grafics =
[
  [

    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]

    ],

  ],
  [

    [
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0]
    ],
    [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]

    ],
    [
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0]

    ],
    [
        [0,0,0,0],
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0]

    ],

  ],
  [

    [
        [0,0,0,0],
        [0,3,3,0],
        [3,3,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,3,0,0],
        [0,3,3,0],
        [0,0,3,0]

    ],
    [
        [0,0,0,0],
        [0,3,3,0],
        [3,3,0,0],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [0,3,0,0],
        [0,3,3,0],
        [0,0,3,0]

    ],

  ],
  [

    [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,0,4,0],
        [0,4,4,0],
        [0,4,0,0]

    ],
    [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [0,0,4,0],
        [0,4,4,0],
        [0,4,0,0]

    ],

  ],
  [

    [
        [0,5,0,0],
        [0,5,0,0],
        [0,5,5,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]

    ],
    [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [0,0,5,0],
        [5,5,5,0],
        [0,0,0,0]

    ],

  ],
  [

    [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [6,0,0,0],
        [6,6,6,0],
        [0,0,0,0]

    ],
    [
        [0,6,6,0],
        [0,6,0,0],
        [0,6,0,0],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [6,6,6,0],
        [0,0,6,0],
        [0,0,0,0]

    ],

  ],
  [

    [
        [0,0,0,0],
        [7,7,7,0],
        [0,7,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0]

    ],
    [
        [0,0,0,0],
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [0,7,0,0],
        [0,7,7,0],
        [0,7,0,0]

    ]

  ]

]

let taulell = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
]

function dibuixaTaulell(){
    for(let py=0; py<altTaulell; py++){
        for(let px=0; px<ampleTaulell; px++){
            ctx.fillStyle = "#FFFFFF"
            if(taulell [py][px] !=0){
                ctx.fillStyle = negro
            }
            ctx.fillRect((px-1)*ampleF,(py-4)*altF,ampleF,altF)
        }
    }
}

function inicializar(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = ampleCanvas;
    canvas.height = altCanvas;

peça = new objPeça()
inicializarTeclat()
    setInterval(function(){
        principal();
        
        
    } ,1000/FPS)
}

function principal(){
    console.log("bucle")
    borrarPantalla();
    dibuixaTaulell();
    peça.dibuixa();
}

 function borrarPantalla(){
    canvas.width = ampleCanvas;
    canvas.height = altCanvas;
 }

 function inicializarTeclat (){
    document.addEventListener("keydown",function(tecla){
        if(tecla.key == "ArrowUp"){
           peça.rotar();
        }
        if(tecla.key == "ArrowDown"){
            peça.abajo();
        }
        if(tecla.key == "ArrowRight"){
          peça.derecha();
        }
        if(tecla.key == "ArrowLeft"){
           peça.izquierda();
        }
    })
 }