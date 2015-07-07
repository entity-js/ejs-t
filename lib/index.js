/**
 *  ______   __   __   ______  __   ______  __  __
 * /\  ___\ /\ "-.\ \ /\__  _\/\ \ /\__  _\/\ \_\ \
 * \ \  __\ \ \ \-.  \\/_/\ \/\ \ \\/_/\ \/\ \____ \
 *  \ \_____\\ \_\\"\_\  \ \_\ \ \_\  \ \_\ \/\_____\
 *   \/_____/ \/_/ \/_/   \/_/  \/_/   \/_/  \/_____/
 *                                         __   ______
 *                                        /\ \ /\  ___\
 *                                       _\_\ \\ \___  \
 *                                      /\_____\\/\_____\
 *                                      \/_____/ \/_____/
 */

/**
 * Provides a very basic string replacement utility.
 *
 * @author Orgun109uk <orgun109uk@gmail.com>
 *
 * @module ejs
 * @class t
 */

var ejsStatic = require('ejs-static'),
    strtr = require('./strtr');

var _static = ejsStatic('ejs-t', {
      _locale: 'en',
      _strings: {}
    }).get(),
    t;

t = module.exports = {
  /**
   * Returns the current locale.
   *
   * @returns {String} The current locale.
   */
  current: function () {
    'use strict';

    return _static._locale;
  },

  /**
   * Sets the current locale.
   *
   * @param {String} locale The locale to set.
   * @returns {Object} Returns self.
   * @chainable
   */
  locale: function (locale) {
    'use strict';

    _static._locale = locale;
    return t;
  },

  /**
   * Returns an object containing all the defined strings.
   *
   * @returns {Object} The defined strings.
   */
  strings: function () {
    'use strict';

    return _static._strings;
  },

  /**
   * Adds a string to the translation strings.
   *
   * @param {String} locale The locale to add the translation string to.
   * @param {String} msg The message string to translate.
   * @param {String} translation The translated msg string.
   * @returns {Object} Returns self.
   * @chainable
   */
  add: function (locale, msg, translation) {
    'use strict';

    if (_static._strings[locale] === undefined) {
      _static._strings[locale] = {};
    }

    _static._strings[locale][msg] = translation;
    return t;
  },

  /**
   * Translates the msg (if avaialble) and then does a token replace.
   *
   * @method t
   * @param {String} msg The string that will be have its tokens replaced.
   * @param {Object} [args] Tokens to be replaced.
   * @param {String} [locale] The locale to use.
   * @return {String} Returns the translated and tokenized string.
   */
  t: function (msg, args, locale) {
    'use strict';

    if (!locale) {
      locale = _static._locale;
    }

    if (_static._strings[locale] && _static._strings[locale][msg]) {
      msg = _static._strings[locale][msg];
    }

    return strtr(msg, args);
  }
};
