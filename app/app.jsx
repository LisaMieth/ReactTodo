var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state');
  console.log(store.getState());
});

store.dispatch(actions.addTodo('Clean the garden'));
store.dispatch(actions.setSearchText('garden'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation
$(document).foundation();

//Load app.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
