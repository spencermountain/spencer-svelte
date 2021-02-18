opinionated svelte boilerplate commands

### CLI
create a quick svelte app
* `npx spencer-svelte -n myApp`

build it
* `npx spencer-svelte -b myApp`

dev-mode hot-reloading 
* `npx spencer-svelte -w myApp`

dev-mode hot-reloading with pug compiling
* `npx spencer-svelte -p myApp`

it uses live-reload, rollup, and chokidar in a sloppy way - putting things together with low-amounts of thinking.

### Pug-svelte setup
create a `./Part.pug` file:

```html
<script>
  import Part from './build/Part.html'
</script>

<div>
  <Part />
</div>
```


### See also
* [amble](https://github.com/spencermountain/amble) - for server-side reloading

MIT