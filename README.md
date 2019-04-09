# vue-hm-closeset

🍔ハンバーガーメニュー🍔  
とりあえず、8種類  

🍔<a href="https://nananakamura.github.io/c/vue-hm-closese/index.html" target="_blank">Demo</a>


## Usage

### type 1の場合
#### HTML
```
<template>
  <HamburgerMenuCloseSetType1></HamburgerMenuCloseSetType1>
</template>
```

#### scripts

.vueファイルコンポーネントフォルダーにコピペして、  
componentsに追加？

```
import HamburgerMenuCloseSetType1 from "HamburgerMenuCloseSetType1.vue";

export default {
  components: {
    HamburgerMenuCloseSetType1
  }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# SCSSを有効化
npm install sass-loader node-sass --save-dev

<style lang="scss">
/* write SASS! */
</style>
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
