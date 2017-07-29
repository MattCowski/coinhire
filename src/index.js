import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  query: '',
  services: [
    {category: 'cleaner', providers: ["bob", "anne", "chris"]},
    {category: 'tiler', providers: ["bob", "anne", "chris"]}

  ],
  providers: []
}
const reducer = (state=initialState, action)=> {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        query: action.value,
        providers: state.services.filter((pro)=> action.value.length>2 && new RegExp(action.value).test(pro.category) )//action.value.test()===pro.category)
      }

    default:
      return state

  }
  return state
}

let store = createStore(reducer)


store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
