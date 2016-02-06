'use strict';

var mix = require('reduxr-mix');

// A helper function that takes a scope (e.g. 'member_') and a reducer.
// The reducer is only invoked for actions that begin with the specified
// scope, in which case the reducer is passed the action with the scope
// trimmed off. (e.g. instead of 'member_setName', it is passed 'setName')
module.exports = function (scope, reducer) {
  return function (state, action) {
    return (action.type.slice(0, scope.length) === scope) ?
      reducer(state, mix(action, {type: action.type.slice(scope.length)})) :
      reducer(state, {})
  }
}
