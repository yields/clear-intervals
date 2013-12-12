
describe('clear-intervals', function(){

  var clear = require('clear-intervals');
  var assert = require('assert');
  var j = 0;

  function incr(){ ++j }
  setInterval(incr, 50);
  setInterval(incr, 100);

  it('should clean all intervals', function(done){
    setTimeout(function(){
      clear();
      assert(3 == j);
      done();
    }, 101);
  })

  it('should cleanup', function(){
    clear();
  })

})
