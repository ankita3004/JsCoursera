
(function(){
  var name = ["John","Joseph","Alex","Martin","Joey"];
for(var i=0;i<5;i++){
  var a=name[i].charAt(0);
  if(a=='J'||a=='j')
  byeSpeaker.speak(name[i]);
  else {
    helloSpeaker.speak(name[i]);
  }
}
})();
