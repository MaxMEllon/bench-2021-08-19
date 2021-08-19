const { performance } = require('perf_hooks');
const store = require('./store')

for (let i = 0; i < 22 * 100000; i+=20) {
  let t1, t2
  if (i % 100000 === 0) t1 = performance.now()
  store.dispatch({
    type: 'X',
    payload: i
  })
  if (i % 100000 === 0) t2 = performance.now()
  if (i % 100000 === 0) console.log({ i, time: t2-t1 })
}
