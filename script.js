
(function(){
  var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0;i<=9;i++){
  var a=name[i].charAt(0);
  if(a=='J'||a=='j')
  byeSpeaker.speak(name[i]);
  else {
    helloSpeaker.speak(name[i]);
  }
}
})();
