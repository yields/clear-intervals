
/**
 * Clear all intervals.
 *
 * @api public
 */

module.exports = function(){
  var i = setInterval(function(){});
  while (i--) clearInterval(i);
};
