# EntityJS - Utilities

## t

A small utility which provides basic translation and token replacement.

### Usage

```javascript
var t = require('ejs-t');

t.t('Hello :world', {':world': 'world'}) // = 'Hello world';
```
