function boardMember (name , homeState, training) {
    this.name = 'name';
    this.homeState = homeState;
    this.training = training;
     
    }
     //creating objects
    const name= new name();
    const homeState = new homeState();
    const training = new training();
   //method
    boardMember.prototype.veto = function() {
        console.log("No, I must disagree");
    }
    boardMember.prototype.approve = function() {
        console.log("You can do that");
    }
    boardMember.prototype.doCharity = function() {
        console.log("I like to help people");
    }
    boardMember.prototype.releasePressStatement = function() {
            console.log("You will see great things from Scuber"); 
    }
    boardMember.prototype.sayHi = function() {
        console.log("Hi, my name is <name>. I am from <homestate>, and I was trained in <training>"); 
}
    

    
    
