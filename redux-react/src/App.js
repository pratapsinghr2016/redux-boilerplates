import { useDispatch } from "react-redux";
import APIResponse from "./APIResponse";
import "./App.css";
import { decreaseAction, increaseAction, asyncAction } from "./redux/actions";
import Result from "./Result";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increaseAction(1))}>Increase here</button>
      <button onClick={() => dispatch(decreaseAction(1))}>Decrease here</button>
      <div>
        <Result />
      </div>
      <button onClick={() => dispatch(asyncAction({}))}>Make api call</button>
      <APIResponse />
    </div>
  );
}

export default App;
