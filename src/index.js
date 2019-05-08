import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import { useSelector, Provider } from "react-redux";

import rootReducer, { getCereals } from "./store";

const Parent = () => (
  <div>
    <AChild>{ASubChild}</AChild>
  </div>
);

// this fails
// class AChild extends React.Component {
//   render() {
//     return this.props.children();
//   }
// }

// this works
const AChild = ({ children }) => {
  return children();
};

const ASubChild = () => {
  const cereals = useSelector(getCereals);

  return (
    <div>
      <h1>Cereals</h1>
      <ul>
        {cereals.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Parent />
  </Provider>,
  document.getElementById("root")
);
