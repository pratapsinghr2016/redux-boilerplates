import { useSelector } from "react-redux";

function APIResponse() {
  const response = useSelector((state) => state.asyncReducer);

  console.log(response);

  return (
    <div>
      <h3>API response:</h3>
      {response?.value?.page}
    </div>
  );
}
export default APIResponse;
