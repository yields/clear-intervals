/**
 * Clear all intervals.
 *
 * @api public
 */

module.exports = function(){
  var i = setInterval(function(){});
  do {
    clearInterval(i);
  }
  while (i--);
};
