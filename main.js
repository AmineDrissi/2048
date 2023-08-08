//this fills the board with empty boxes
for(var i=1;i<=4;i++){
    for(var j=1;j<=4;j++){
        $(".board").append("<div class='tile x' id='"+ i+"-"+j+"'></div>")
    }
}
//what happens when you click the start button
$("#startButton").on("click",startGame)
//what happens when you click the reset button
$("#resetButton").on("click",reset)
//we declre the score variable and assign the score header with the score variable
var score=0
$("h2").text("Score:"+score)
//this is the function that executes when we click the button start
function startGame(){
    //once we click on start button, it becomes unclickable
    $('#startButton').prop('disabled', true)
    //this generates 2 random boxes with values 2
    var randomPosition1=Math.floor((Math.random()*4)+1)+"-"+Math.floor((Math.random()*4)+1)
    var randomPosition2=Math.floor((Math.random()*4)+1)+"-"+Math.floor((Math.random()*4)+1)
    while(randomPosition1===randomPosition2){
        randomPosition2=Math.floor((Math.random()*4)+1)+"-"+Math.floor((Math.random()*4)+1)
    }
    $("#"+randomPosition1).removeClass("tile x")
    $("#"+randomPosition1).addClass("tile x2")
    $("#"+randomPosition1).text("2")
    $("#"+randomPosition2).removeClass("tile x")
    $("#"+randomPosition2).addClass("tile x2")
    $("#"+randomPosition2).text("2")
    //moving boxes 
    $( "body" ).on( "keyup", function( e ) {
        var direction=e.key
        switch(direction){
            case "ArrowUp":up();
                            checkPlay();        //this will check if there are any possible moves or you won
                            spawRandom2();      //otherwise it ends the game 
                            break;
            case "ArrowDown":down();
                            checkPlay();
                            spawRandom2();
                            break;
            case "ArrowLeft":left();
                            checkPlay();
                            spawRandom2();
                            break;
            case "ArrowRight":right();
                            checkPlay();
                            spawRandom2();
                            break;
        }
    })
}
//the reset function
function reset(){
    //this reloads the page to avoid unexpected errors
    location.reload(true)
    //this restarts the board to empty boxes
    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
            $("#"+i+"-"+j).remove()
        }
    }
    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
            $(".board").append("<div class='tile x' id='"+ i+"-"+j+"'></div>")
        }
    }
}
//these are the booleans variables that refer to the possibility of moving the tiles to a certain direction
//for example, if the tiles can't move to the right, flexibilityRight will become false
//this is still under developement
var flexibilityUp=true
var flexibilityDown=true
var flexibilityLeft=true
var flexibilityRight=true
function up(){
    var oldScore=score
    //the k loop is extra just to correct any unexpected behavior
    for(var k=0;k<4;k++){
        for(var i=1;i<=4;i++){
            for(var j=1;j<=4;j++){
                var identificator=i+"-"+j  //this is the id of each tile in the matrix, for exmaple 3-5
                //if the tile on top of the current tile is empty, they switch 
                if(($("#"+(i-1)+"-"+j)).attr("class")==="tile x" && $("#"+identificator).attr("class")!=="tile x"){
                    //to switch two tiles, we just remove the class of the target tile and give it the class of the new tile and its value
                    $("#"+(i-1)+"-"+j).removeClass()
                    var newClass=$("#"+identificator).attr("class")
                    var newValue=$("#"+identificator).text()
                    $("#"+(i-1)+"-"+j).addClass(newClass)
                    $("#"+(i-1)+"-"+j).text(newValue)
                    //then we remove the class and value of the other tile
                    //each class has its own css properties defined in the styles.css sheet 
                    $("#"+identificator).removeClass()
                    $("#"+identificator).text("")
                    $("#"+identificator).addClass("tile x")
                }
                //if the tile on top of the current tile and the current tile have the same value, we add them into the top tile
                if(($("#"+(i-1)+"-"+j)).attr("class") === $("#"+identificator).attr("class") && $("#"+identificator).attr("class")!=="tile x"){
                    var classNumberValue=$("#"+identificator).attr("class")    //this is the class of one of the tiles
                    var numberValue=parseInt($("#"+identificator).text())      //this is the value
                    numberValue=numberValue*2          //we make the new value of the new tile
                    score+=numberValue                 //we add it to the score
                    $("h2").text("Score:"+score)        //we change the score display
                    classNumberValue="tile x"+numberValue
                    //we change the top tile to the new added tile
                    $("#"+(i-1)+"-"+j).removeClass()
                    $("#"+(i-1)+"-"+j).addClass(classNumberValue)
                    $("#"+(i-1)+"-"+j).text(numberValue)
                    //and we empty the old tile
                    $("#"+identificator).removeClass()
                    $("#"+identificator).addClass("tile x")
                    $("#"+identificator).text("")
                }
            }
        }
    }
    //if we click up and no changes occur, the score will remain the same
    //so we know that there are no more possible moves when we click up
    if(oldScore===score){
        flexibilityUp=false
    }
}
//the same to the other functions down,left and right
function down(){
    var oldScore=score
    for(var k=0;k<4;k++){
        for(var i=1;i<=4;i++){
            for(var j=1;j<=4;j++){
                var identificator=i+"-"+j
                if(($("#"+(i+1)+"-"+j)).attr("class")==="tile x" && $("#"+identificator).attr("class")!=="tile x"){
                    $("#"+(i+1)+"-"+j).removeClass()
                    var newClass=$("#"+identificator).attr("class")
                    var newValue=$("#"+identificator).text()
                    $("#"+(i+1)+"-"+j).addClass(newClass)
                    $("#"+(i+1)+"-"+j).text(newValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).text("")
                    $("#"+identificator).addClass("tile x")
                }
                if(($("#"+(i+1)+"-"+j)).attr("class") === $("#"+identificator).attr("class") && $("#"+identificator).attr("class")!=="tile x"){
                    var classNumberValue=$("#"+identificator).attr("class")
                    var numberValue=parseInt($("#"+identificator).text())
                    numberValue=numberValue*2
                    score+=numberValue
                    $("h2").text("Score:"+score)
                    classNumberValue="tile x"+numberValue
                    $("#"+(i+1)+"-"+j).removeClass()
                    $("#"+(i+1)+"-"+j).addClass(classNumberValue)
                    $("#"+(i+1)+"-"+j).text(numberValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).addClass("tile x")
                    $("#"+identificator).text("")
                }
            }
        }
    }
    if(oldScore===score){
        flexibilityDown=false
    }
}
function left(){
    var oldScore=score
    for(var k=0;k<4;k++){
        for(var i=1;i<=4;i++){
            for(var j=1;j<=4;j++){
                var identificator=i+"-"+j
                if(($("#"+i+"-"+(j-1))).attr("class")==="tile x" && $("#"+identificator).attr("class")!=="tile x"){
                    $("#"+i+"-"+(j-1)).removeClass()
                    var newClass=$("#"+identificator).attr("class")
                    var newValue=$("#"+identificator).text()
                    $("#"+i+"-"+(j-1)).addClass(newClass)
                    $("#"+i+"-"+(j-1)).text(newValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).text("")
                    $("#"+identificator).addClass("tile x")
                }
                if(($("#"+i+"-"+(j-1))).attr("class") === $("#"+identificator).attr("class") && $("#"+identificator).attr("class")!=="tile x"){
                    var classNumberValue=$("#"+identificator).attr("class")
                    var numberValue=parseInt($("#"+identificator).text())
                    numberValue=numberValue*2
                    score+=numberValue
                    $("h2").text("Score:"+score)
                    classNumberValue="tile x"+numberValue
                    $("#"+i+"-"+(j-1)).removeClass()
                    $("#"+i+"-"+(j-1)).addClass(classNumberValue)
                    $("#"+i+"-"+(j-1)).text(numberValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).addClass("tile x")
                    $("#"+identificator).text("")
                }
            }
        }
    }
    if(oldScore===score){
        flexibilityLeft=false
    }
}
function right(){
    var oldScore=score
    for(var k=0;k<4;k++){
        for(var i=1;i<=4;i++){
            for(var j=1;j<=4;j++){
                var identificator=i+"-"+j
                if(($("#"+i+"-"+(j+1))).attr("class")==="tile x" && $("#"+identificator).attr("class")!=="tile x"){
                    $("#"+i+"-"+(j+1)).removeClass()
                    var newClass=$("#"+identificator).attr("class")
                    var newValue=$("#"+identificator).text()
                    $("#"+i+"-"+(j+1)).addClass(newClass)
                    $("#"+i+"-"+(j+1)).text(newValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).text("")
                    $("#"+identificator).addClass("tile x")
                }
                if(($("#"+i+"-"+(j+1))).attr("class") === $("#"+identificator).attr("class") && $("#"+identificator).attr("class")!=="tile x"){
                    var classNumberValue=$("#"+identificator).attr("class")
                    var numberValue=parseInt($("#"+identificator).text())
                    numberValue=numberValue*2
                    score+=numberValue
                    $("h2").text("Score:"+score)
                    classNumberValue="tile x"+numberValue
                    $("#"+i+"-"+(j+1)).removeClass()
                    $("#"+i+"-"+(j+1)).addClass(classNumberValue)
                    $("#"+i+"-"+(j+1)).text(numberValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).addClass("tile x")
                    $("#"+identificator).text("")
                }
            }
        }
    }
    if(oldScore===score){
        flexibilityRight=false
    }
}
function getEmptyBoxes(){
    var result=[]
    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
            var identificator=i+"-"+j
            if($("#"+identificator).attr("class")==="tile x"){
                result.push(identificator)
            }
        }
    }
    return result
}
function spawRandom2(){
    var emptyBoxes=getEmptyBoxes()
    var randomIndex=Math.floor(Math.random()*(emptyBoxes.length))
    var randomPosition=emptyBoxes[randomIndex]
    $("#"+randomPosition).removeClass()
    $("#"+randomPosition).addClass("tile x2")
    $("#"+randomPosition).text("2")
}
function checkPlay(){
    if(flexibilityDown===false && flexibilityLeft===false && flexibilityRight===false && flexibilityUp===false){
        console.log("you lost");
    }
    else{
        flexibilityDown=true
        flexibilityUp=true
        flexibilityLeft=true
        flexibilityRight=true
    }
}