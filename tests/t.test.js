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

describe('ejs/t', function () {

  'use strict';

  var t;

  beforeEach(function () {

    t = require('../lib');

  });

  afterEach(function () {

    var name = require.resolve('../lib');
    delete require.cache[name];

  });

  describe('t.current()', function () {

    it('shouldReturnTheDefaultLocale', function () {

      test.string(
        t.current()
      ).is('en');

    });

  });

  describe('t.locale()', function () {

    it('shouldSetTheCurrentLocale', function () {

      t.locale('fr');
      test.string(
        t.current()
      ).is('fr');

    });

  });

  describe('t.strings()', function () {

    it('shouldReturnAnEmptyObject', function () {

      test.object(
        t.strings()
      ).is({});

    });

    it('shouldBeAbleToManipulateStringsObject', function () {

      var strings = t.strings();
      strings.en = {
        'Hello world': 'Foo bar'
      };

      test.object(
        t.strings()
      ).is({
        en: {
          'Hello world': 'Foo bar'
        }
      });

    });

  });

  describe('t.add()', function () {

    it('shouldAddToTheStringsObject', function () {

      t.add('en', 'Foo bar', 'Hello world');
      test.object(
        t.strings()
      ).is({
        en: {
          'Foo bar': 'Hello world'
        }
      });

    });

  });

  describe('t.t()', function () {

    it('shouldReplaceTokensIfNoStringIsAvailable', function () {

      test.string(
        t.t('Hello @arg', {
          '@arg': 'world'
        })
      ).is('Hello world');

    });

    it('shouldUseAvailableStringIfApplicable', function () {

      t.add('en', 'Hello @arg', 'Foo @arg');
      test.string(
        t.t('Hello @arg', {
          '@arg': 'bar'
        })
      ).is('Foo bar');

    });

    it('shouldUseAvailableStringIfApplicableForOtherLocale', function () {

      t.add('en', 'Hello @arg', 'Hello @arg');
      t.add('fr', 'Hello @arg', 'Foo @arg');

      test.string(
        t.t('Hello @arg', {
          '@arg': 'bar'
        }, 'fr')
      ).is('Foo bar');

    });

  });

});
