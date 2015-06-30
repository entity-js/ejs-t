/**
 *  ______   __   __   ______  __   ______  __  __
 * /\  ___\ /\ "-.\ \ /\__  _\/\ \ /\__  _\/\ \_\ \
 * \ \  __\ \ \ \-.  \\/_/\ \/\ \ \\/_/\ \/\ \____ \
 *  \ \_____\\ \_\\"\_\  \ \_\ \ \_\  \ \_\ \/\_____\
 *   \/_____/ \/_/ \/_/   \/_/  \/_/   \/_/  \/_____/
 *                          ______   __    __   ______
 *                         /\  ___\ /\ "-./  \ /\  ___\
 *                         \ \ \____\ \ \-./\ \\ \___  \
 *                          \ \_____\\ \_\ \ \_\\/\_____\
 *                           \/_____/ \/_/  \/_/ \/_____/
 */

/**
 * Provides the utility function 'strtr' from PHP.js [http://phpjs.org/].
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 *
 * @module Core
 * @submodule Utils
 * @class strtr
 */

/**
 * Replace the tokens in the str with the given args.
 *
 * @method strtr
 * @param {String} str The string that will be have its tokens replaced.
 * @param {Object} [args] Tokens to be replaced.
 * @return {String} Returns the translated and tokenized string.
 */
module.exports = function strtr (str, args) {
  'use strict';

  var i = 0, j = 0,
      lenStr = str.length, lenFrom = 0,
      from = [], to = [],
      ret = '',
      match = false;

  for (var arg in args) {
    from.push(arg);
    to.push(args[arg]);
  }

  lenFrom = from.length;
  for (i = 0; i < lenStr; i++) {
    match = false;
    for (j = 0; j < lenFrom; j++) {
      if (str.substr(i, from[j].length) === from[j]) {
        match = true;
        i = (i + from[j].length) - 1;

        break;
      }
    }

    ret += match ? to[j] : str.charAt(i);
  }

  return ret;
};
