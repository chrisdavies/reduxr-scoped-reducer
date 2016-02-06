'use strict';

import scopedReducer from '../scoped-reducer';

describe('scoped-reducer', function () {
  it('invokes the reducer for actions starting w/ scope', function () {
    const reducer = scopedReducer(
      'foo_', (state, action) => action.type ? action : 'default'
    );

    expect(reducer({}, { type: 'foo_bar' }).type).toEqual('bar');
  });

  it('invokes the reducer with empty action if action type mismatch', function () {
    let lastAction = undefined;
    const reducer = scopedReducer(
      'foo_', (state, action) => action.type ? action : 'default'
    );

    expect(reducer({}, { type: 'foobar' })).toEqual('default');
  });
});
