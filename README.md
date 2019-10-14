# js-kit

## online

online demo (Random + Color): [test/index.jtml](https://jniac.github.io/js-kit/test/)  

https://jniac.github.io/js-kit/build/kit.js  
https://jniac.github.io/js-kit/build/kit.module.js  
```html
<script src="https://jniac.github.io/js-kit/build/kit.js"></script>
```
```javascript
import kit from 'https://jniac.github.io/js-kit/build/kit.module.js  '
```
## files

### /src

Code source, au format [ES 2018](https://flaviocopes.com/es2018/)

usage :
```javascript
import kit from './src/kit.js'
```
```javascript
import Color from './src/Color.js'
```

### /build

Code compilé avec [`rollup`](https://rollupjs.org/guide/en/)

#### `kit.js`  
utilisable via
```html
<script src="kit.js"></script>
```

#### `kit.module.js`  
utilisable en précisant `"module"`
```html
<script src="main.js" type="module"></script>
```
`main.js`:
```javascript
import kit from './kit.js'
```

## build
rollup should be (globally) installed
```shell
npm i -g rollup
```
then
```shell
rollup -c
```
et voilà!
