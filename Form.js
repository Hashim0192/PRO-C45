class Form{
    constructor(){
     this.input = createInput("Name");
     this.button = createButton('Lets  Learn');
    }

    hide() {
        this.input.hide();
        this.button.hide();
    }

    display(){
    
   

    this.input.position(550,500);
    this.input.style('width','200px');
    this.input.style('height','20px');
    this.input.style('background','LIGHTgreen');
    this.button.position(550,560)
    this.button.style('width','300px')
    this.button.style('height','40px')
    this.button.style('background','LIGHTgreen')
    }
}