import Show from './Show.svelte'

const app = new Show({
  target: document.body,
  props: {
    name: 'foo',
  },
})

export default app
