import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MyContainer from "../containers/MyContainer";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={MyContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;