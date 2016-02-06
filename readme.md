## reduxr-scoped-reducer

A utility to create Redux reducers which only respond to prefixed actions.

Part of the [reduxr](https://github.com/chrisdavies/reduxr) family of packages.

[![Build Status](https://travis-ci.org/chrisdavies/reduxr-scoped-reducer.svg?branch=master)](https://travis-ci.org/chrisdavies/reduxr-scoped-reducer)

## Usage

Sometimes we have a reducer which is concerned only with a very specific subset of actions, generally scoped using some type prefix. Here's an example:

```js
import objReducer from 'reduxr-scoped-reducer';

export default objReducer({}, {
  user_setName: (state, {name}) => ({...state, name}),
  user_setAge: (state, {age}) => ({...state, age})
});

```

This reducer only responds to `user_` actions. Instead of having to type `user_` over and over, we can instead scope the reducer as shown below:

```js
// user-reducer.js
import objReducer from 'reduxr-obj-reducer';

// Note the reducer functions are no longer prefixed with user_
export default objReducer({}, {
  setName: (state, {name}) => ({...state, name}),
  setAge: (state, {age}) => ({...state, age})
});

// reducers.js
import { combineReducers } from 'redux';
import scopedReducer from 'reduxr-scoped-reducer';
import user from './user-reducer';

export default combineReducers({
  // This only passes user_ actions down to the user reducer, and takes the
  // user_ prefix off of the action type when it does.
  user: scopedReducer('user_', user)
});
```

At first glance, this may not seem super useful, but it has proven to be
very handy when dealing with refactoring, or when dealing with really common
reducer patterns (e.g. filters on lists), allowing us to reuse a reducer
definition, but apply it to a different set of actions.

## License MIT

Copyright (c) 2015 Chris Davies

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
