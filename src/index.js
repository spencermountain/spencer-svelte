import Show from './fromPug.html'

const app = new Show({
  target: document.body,
  props: {
    name: 'foo',
  },
})

export default app
