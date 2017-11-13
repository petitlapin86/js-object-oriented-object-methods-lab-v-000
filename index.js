function BoardMember (name, homestate, training){
  this.name = name;
  this.homestate = homestate;
  this.training = trainging;
  this.sayHello = function(){
    console.log(`Hello everybody, my name is ${this.name}!`);
  }
}




let bobby = new User('bobby', 20, 'Philadelphia')


let susan = {
  name: 'susan',
  age: 28,
  hometown: 'Boston'
}