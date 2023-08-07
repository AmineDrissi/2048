//this fills the board with empty boxes
for(var i=1;i<=4;i++){
    for(var j=1;j<=4;j++){
        $(".board").append("<div class='tile x' id='"+ i+"-"+j+"'></div>")
    }
}
$("#startButton").on("click",startGame)

function startGame(){
    //this restarts the board to empty boxes
    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
            $("#"+i+"-"+j).removeClass()
            $("#"+i+"-"+j).text("")
            $("#"+i+"-"+j).addClass("tile x")
        }
    }
    //this generates 2 random boxes with values 2
    var randomPosition1=Math.floor((Math.random()*4)+1)+"-"+Math.floor((Math.random()*4)+1)
    var randomPosition2=Math.floor((Math.random()*4)+1)+"-"+Math.floor((Math.random()*4)+1)
    while(randomPosition1===randomPosition2){
        randomPosition2=Math.floor((Math.random()*4)+1)+"-"+Math.floor((Math.random()*4)+1)
    }
    $("#"+randomPosition1).addClass("tile x2")
    $("#"+randomPosition1).text("2")
    $("#"+randomPosition2).addClass("tile x2")
    $("#"+randomPosition2).text("2")
    //moving boxes to the right


}




$( "body" ).on( "keypress", function( event ) {
    console.log(event.key);
})