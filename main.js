//this fills the board with empty boxes
for(var i=1;i<=4;i++){
    for(var j=1;j<=4;j++){
        $(".board").append("<div class='tile x' id='"+ i+"-"+j+"'></div>")
    }
}
$("#startButton").on("click",startGame)
$("#resetButton").on("click",reset)
var score=0
$("h2").text("Score:"+score)
function startGame(){
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
                            checkPlay();
                            spawRandom2();
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
function reset(){
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
var flexibilityUp=true
var flexibilityDown=true
var flexibilityLeft=true
var flexibilityRight=true
function up(){
    var oldScore=score
    for(var k=0;k<4;k++){
        for(var i=1;i<=4;i++){
            for(var j=1;j<=4;j++){
                var identificator=i+"-"+j
                if(($("#"+(i-1)+"-"+j)).attr("class")==="tile x" && $("#"+identificator).attr("class")!=="tile x"){
                    $("#"+(i-1)+"-"+j).removeClass()
                    var newClass=$("#"+identificator).attr("class")
                    var newValue=$("#"+identificator).text()
                    $("#"+(i-1)+"-"+j).addClass(newClass)
                    $("#"+(i-1)+"-"+j).text(newValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).text("")
                    $("#"+identificator).addClass("tile x")
                }
                if(($("#"+(i-1)+"-"+j)).attr("class") === $("#"+identificator).attr("class") && $("#"+identificator).attr("class")!=="tile x"){
                    var classNumberValue=$("#"+identificator).attr("class")
                    var numberValue=parseInt($("#"+identificator).text())
                    numberValue=numberValue*2
                    score+=numberValue
                    $("h2").text("Score:"+score)
                    classNumberValue="tile x"+numberValue
                    $("#"+(i-1)+"-"+j).removeClass()
                    $("#"+(i-1)+"-"+j).addClass(classNumberValue)
                    $("#"+(i-1)+"-"+j).text(numberValue)
                    $("#"+identificator).removeClass()
                    $("#"+identificator).addClass("tile x")
                    $("#"+identificator).text("")
                }
            }
        }
    }
    if(oldScore===score){
        flexibilityUp=false
    }
}
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