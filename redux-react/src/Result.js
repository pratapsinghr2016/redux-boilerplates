import { useSelector } from "react-redux";

export default function Result() {
  const incRes = useSelector((state) => state.incReducer);
  const decRes = useSelector((state) => state.descReducer);

  return (
    <div>
      <h1>Result component</h1>
      <p>Result here:</p>
      <div>
        <span>INC: {incRes.value}</span>

        <span style={{ marginLeft: 20 }}>DEC: {decRes.value}</span>
      </div>
    </div>
  );
}
