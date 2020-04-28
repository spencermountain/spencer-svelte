// svelte.config.js
import { pug,scss } from 'svelte-preprocess'
module.exports = {
    preprocess:  [
      scss(),
      pug(),
    ],
    // ...other svelte options
};
