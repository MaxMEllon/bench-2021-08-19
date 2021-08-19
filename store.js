const { createStore, applyMiddleware, compose } = require('redux')

let actions = []
const X = (store) => (next) => (action) => {
  actions = [...actions, action]
  return next(action)
}

const store = createStore(state => state, {}, compose(applyMiddleware(X)))

module.exports = store
