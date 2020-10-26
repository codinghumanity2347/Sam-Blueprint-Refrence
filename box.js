class Box{
    //class consist of function and properties which you want to give it to an object
    //where do we create the properties?

    //inbuilt function inside a class:- constructor and it is mandatory function/method

    constructor(x,y,width,height){
        //inside a constructor we create the properties
        //by using the "this" keyword.
        //this is a keyword which points to current object.
        //-----------------------------------------------------

        // if you want a customized physic body then we need the change properties
        //if u want the obejct to bounce off use RESTITUTION - these are property of physic
        var boxProperties = {
                restitution: 1.0,
                friction:1,
                isStatic:true
        }
        //so how do you create a property is 
        //this.propertyName
        //physicsBody will contain the actual physic body object!
        this.physicsBody= Bodies.rectangle(x,y,width,height,boxProperties);
        World.add(world,this.physicsBody);
        this.width = width;
        this.height = height;
    }
    //remember when you create user defined function 
    //no need to use function keyword just go with a name
    //function in order to display them:-
    display(){
        //point consist x and y
        // xy would shift to center
        rectMode(CENTER);
        rect(this.physicsBody.position.x,this.physicsBody.position.y,this.width,this.height);

    }
}