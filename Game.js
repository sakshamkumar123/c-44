class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState') 
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if (gameState===0){
            player=new Player();
            var playerCountRef = await database.ref('playerCount').once("value") 
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount()
            }
            form = new Form()
            form.display()
            
            var player1 = createSprite(20,100)
            player1.addImage(player1Img)
    
            var player2 = createSprite(100,100)
            player2.addImage(player2Img)
    
            var players = [player1,player2]
        }
        
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        if (allPlayers!==undefined){
            background("green")
            image(backgroundImg,0,0,displayWidth,displayHeight)

            var index = 0 
        var x  = 0 
        var y = 0

            for (var plr in allPlayers){

               index = index+1;
              
               
               // if (index===1){
                players[index-1].x = 20
                players[index-1].y = displayHeight/2
               // }
               // else{
                    //players[index-1].x = displayWidth-20
                    //players[index-1].y = displayHeight/2
              //  }
            
                
            }

        }
        if (keyDown("space")){
            bullet  = createSprite(player1.x,player1.y,10,10)
            bullet.velocityX = 5
            bullet.velocityY = 5 
        }
        drawSprites()
    }

    
}