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

var test = require('unit.js');

describe('ejs/t/strtr', function () {

  'use strict';

  var strtr = require('../lib/strtr');

  it('returnTheTextWithoutTokensAndNoTokens', function () {

    test.string(
      strtr('Hello world')
    ).is('Hello world');

  });

  it('returnTheTextWithTokensAndNoTokens', function () {

    test.string(
      strtr('Hello @world')
    ).is('Hello @world');

  });

  it('returnTheTextWithTokensAndWithTokens', function () {

    test.string(
      strtr('Hello @world', {'@world': 'mars'})
    ).is('Hello mars');

  });

  it('returnTheTextWithMultipleTokensAndWithTokens', function () {

    test.string(
      strtr('Hello @world, you are @world', {'@world': 'mars'})
    ).is('Hello mars, you are mars');

  });

  it('returnTheTextWithTokensAndWithMultipleTokens', function () {

    test.string(
      strtr('Hello @world, your name is @name', {
        '@world': 'mars',
        '@name': 'John'
      })
    ).is('Hello mars, your name is John');

  });

});
