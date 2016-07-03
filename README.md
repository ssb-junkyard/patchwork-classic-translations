# patchwork-translations

Locale data for [Patchwork] and [Patchkit], using [polyglot].

This module is a singleton so that if multiple modules require it, setting the
locale in one will set it for all of them. Also, it uses [`moment`][moment] as
a singleton, so if you are using `moment`, make sure that you `require` the
same instance of `moment` as `patchwork-translations` does.

[Patchwork]: http://ssbc.github.io/patchwork/
[Patchkit]: https://github.com/patchkit
[polyglot]: http://airbnb.io/polyglot.js/
[moment]: http://momentjs.com/

## Example

```js
var t = require('patchwork-translations')

// translate a string
t('Patchwork') // -> "Patchwork"

// change the locale
t.setLocale('eo')

// iterate through the locale data
for (var locale in t.locales) {
  var phrases = t.locales[locale]
  ...
}
```

## Notes

The JSON data is organized roughly so that each patchkit module has its own.
section/group.

## Contributing

Copy [locales/en.json](locales/en.json) to a new file for your locale, and then replace all
the strings on the right with localized ones. If some phrases are unclear and
you need more context, post about it in Patchwork. If you find something
that can't be accurately translated given the way the phrases are structured,
let us know and we can try to fix it.

## Known Issues

Some sentences have HTML elements in them so they are split into multiple
phrases, in such a way that may not be desirable in some langauges. e.g. "Welcome to " / "Patchwork".

## License

Copyright (C) 2015-2016 Secure Scuttlebutt Consortium

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
