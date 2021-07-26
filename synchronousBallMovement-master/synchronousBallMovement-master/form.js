class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("PLAY")
        this.title=createElement('h1')
        this.greating=createElement('h2')
        
    }
    hide(){
        this.greating.hide()
        this.button.hide()
        this.title.hide()
        this.input.hide()
    }
    display(){
        this.title.html("CAR RACEING GAME")
        this.title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greating.html("HEllo "+player.name)
            this.greating.position(displayWidth/2-70,displayHeight/4)
        })
        
        
    }
}