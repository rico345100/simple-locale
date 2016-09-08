# simple-locale
simple-locale is JavaScript locale manager for easy I18N support.

## Installation
> npm install --save simple-locale

## Isomorphic
You can use this module both Node.js or Browser platform if you using web bundler.

```javascript
// node.js
const Locale = require('simple-locale');
const locale = new Locale({
	us_EN: 'us_EN',
	ko_KR: 'ko_KR'
});
locale.set(locale.us_EN);

locale.load(locale.us_EN, require('./i18n/us_EN.json'));
locale.load(locale.ko_KR, require('./i18n/ko_KR.json'));

// browser
// it requires bundler like browserify or webpack!
import Locale from 'simple-locale';

const locale = new Locale({
	us_EN: 'us_EN',
	ko_KR: 'ko_KR'
});
locale.set(locale.us_EN);	// or, you can use just string: locale.set('us_EN') in this case.

locale.load(locale.us_EN, require('./i18n/us_EN.json'));	// if you are using webpack, make sure to load json-loader in your webpack config.
locale.load(locale.ko_KR, require('./i18n/ko_KR.json'));