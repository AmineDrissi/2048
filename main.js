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
                            break;
            case "ArrowDown":down();
                            break;
            case "ArrowLeft":left();
                            break;
            case "ArrowRight":right();
                            break;
        }
    })
}
function up(){
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
    var emptyBoxes=getEmptyBoxes()
    var randomIndex=Math.floor(Math.random()*(emptyBoxes.length))
    var randomPosition=emptyBoxes[randomIndex]
    $("#"+randomPosition).removeClass()
    $("#"+randomPosition).addClass("tile x2")
    $("#"+randomPosition).text("2")
}
function down(){
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
    var emptyBoxes=getEmptyBoxes()
    var randomIndex=Math.floor(Math.random()*(emptyBoxes.length))
    var randomPosition=emptyBoxes[randomIndex]
    $("#"+randomPosition).removeClass()
    $("#"+randomPosition).addClass("tile x2")
    $("#"+randomPosition).text("2")
}
function left(){
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
    var emptyBoxes=getEmptyBoxes()
    var randomIndex=Math.floor(Math.random()*(emptyBoxes.length))
    var randomPosition=emptyBoxes[randomIndex]
    $("#"+randomPosition).removeClass()
    $("#"+randomPosition).addClass("tile x2")
    $("#"+randomPosition).text("2")
}
function right(){
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
    var emptyBoxes=getEmptyBoxes()
    var randomIndex=Math.floor(Math.random()*(emptyBoxes.length))
    var randomPosition=emptyBoxes[randomIndex]
    $("#"+randomPosition).removeClass()
    $("#"+randomPosition).addClass("tile x2")
    $("#"+randomPosition).text("2")
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
