# js-kit

### `/src`

Code source, au format [ES 2018](https://flaviocopes.com/es2018/)

usage :
```javascript
import kit from './src/kit.js'
```
```javascript
import Color from './src/Color.js'
```

### `/build`

Code compilé avec [`rollup`](https://rollupjs.org/guide/en/)

- `kit.js`  
  utilisable via
  ```html
  <script src="kit.js"></script>
  ```

- `kit.module.js`  
  utilisable en précisant `"module"`
  ```html
  <script src="kit.js" type="module"></script>
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
