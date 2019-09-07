//PROYECTO DE JQUERY FINAL LUIS MAYOR

//Inicio Del Juego
//Funcion de reparto aleatorio


function getRandomInt(min,max){
    min = Math.ceil(min,max);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min)) +min;
}

//Titulo Color Intermitente 

function colorBlink(selector) { 
    $(selector).animate({
        opacity:'1',
    },
    {
        step: function(){
            $(this).css('color','#DDFF1E');
        },
        queue: true
    }

    )
    .animate({
        opacity:'1'
    },
    {
        step: function(){
            $(this).css('color','red');
        },
        queue:true
    },600

    )
.delay(1000)
.animate({
    opacity:'1'
},
{
    step: function(){
        $(this).css('color', '#DCFF0E')
        
    },
    queue:true
}

)
.animate({
    opacity:'1'
},
{
    step:function(){
        $(this).css('color', 'purple')
        colorBlink('h1.main-titulo');
    },
    queue: true
}
);
}

//caramelos a las columnas
function CandyCrushArrays(arrayType, index) {

    var candyCol1 = $('.col-1').tasty();
    var candyCol2 = $('.col-2').tasty();
    var candyCol3 = $('.col-3').tasty();
    var candyCol4 = $('.col-4').tasty();
    var candyCol5 = $('.col-5').tasty();
    var candyCol6 = $('.col-6').tasty();
    var candyCol7 = $('.col-7').tasty();
    
    var candyColumnas = $([candyCol1, candyCol2, candyCol3, candyCol4, candyCol5, candyCol6, candyCol7]);
    
    if (typeof Index === "number"){
        var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index), candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index),
             candyCol7.eq(index) ]);
    
    
    }
    else{
        index= '';
    }
    
    if(arrayType ==='columnas'){
        return candyColumnas;
    }else if (arrayType === 'rows' && index !== ''){
        return candyRow;
    }
    
    }
    


// Fin del Juego
function endGame() {
    $('div.panel-tablero, div.time').effect('fold');
    $('h1.main-titulo').addClass('title-over')
    .text('Gracias por jugar!');
    $('div.score, div.moves, div.panel-score').width('100%');
  }


  //Inicio del Juego al hacer click
function initGame() {

    colorBlink('h1.main-titulo');
  
    $('.btn-reinicio').click(function() {
      // volver a cargar al hacer click
      if ($(this).text() == 'Retry') {
        location.reload(true);
      }
      checktablero();
      $(this).text('Reinicio');
      // Inicio del Contador
      $('#timer').startTimer({
        onComplete: endGame
      })
    });
  }

  $(function() {
    initGame();
  });

/*


/*

//caramelos a las columnas
function CandyCrushArrays(arrayType, index) {

var candyCol1 = $('.col-1').tasty();
var candyCol2 = $('.col-2').tasty();
var candyCol3 = $('.col-3').tasty();
var candyCol4 = $('.col-4').tasty();
var candyCol5 = $('.col-5').tasty();
var candyCol6 = $('.col-6').tasty();
var candyCol7 = $('.col-7').tasty();

var candyColumnas = $([candyCol1, candyCol2, candyCol3, candyCol4, candyCol5, candyCol6, candyCol7]);

if (typeof Index === "number"){
    var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index), candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index),
         candyCol7.eq(index) ]);


}
else{
    index= '';
}

if(arrayType ==='columnas'){
    return candyColumnas;
}else if (arrayType === 'rows' && index !== ''){
    return candyRow;
}

}


//Creando los arrays


*/


