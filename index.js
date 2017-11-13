function BoardMember (name, homestate, training){
  this.name = name;
  this.homestate = homestate;
  this.training = trainging;
  this.veto = function(){
    console.log('No, I must disagree');
  }
  this.approve = function(){
    console.log('You can do that!');
  }
  this.doCharity = function(){
    console.log('I like to help people.');
  }
  
}





