import MyComponent from "../components/MyComponent";
import * as actions from "../actions";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export function mapStateToProps(state: StoreState) {
  return {
    foo: state.foo
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.FooHappened>) {
  return {
    onFooHappened: (foo: Array<any>) => dispatch(actions.fooFoo(foo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);