var name = 'songsong';
(function() {
  if(typeof name === 'undefined') {
    var name = 'jack';
    console.log('goodbye ' + name);
  } else {
    console.log('hello ' + name)
  }
})();
