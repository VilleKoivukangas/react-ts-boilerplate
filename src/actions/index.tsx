import * as constants from '../constants';

export interface FooHappened {
  type: constants.FOO_FOO,
  foo: Array<any>
}

export type BoilerplateAction = FooHappened

export function fooFoo(someArray: Array<any>): FooHappened {
  return {
    type: constants.FOO_FOO,
    foo: someArray
  }
}