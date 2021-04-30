import react, { useState } from "react";
import { useForm } from "./useForm";

const UseStateHook = () => {
  // UseState hook to set and get value
  // ================== Example 1 ====================
  // const [{ count, count1, count2 }, setCount] = useState({
  //   count: 0,
  //   count1: 1,
  //   count2: 2
  // });
  // return (
  //   <div>
  //     <button
  //       onClick={() =>
  //         setCount((currentState) => ({
  //           count: currentState.count + 1,
  //           count1: currentState.count1 + 1,
  //           count2: currentState.count2 + 1
  //         }))
  //       }
  //     >
  //       Add
  //     </button>
  //     <h3>count: {count}</h3>
  //     <h3>count1: {count1}</h3>
  //     <h3>count2: {count2}</h3>
  //   </div>
  // );
  // ========================= Example 2 =========================
  const [values, handleChange] = useForm({ email: "", password: "" });

  const windowAlert = () => {
    window.alert("Logged In");
  };

  return (
    <div>
      <input
        name="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={windowAlert}>login</button>
    </div>
  );
};

export default UseStateHook;
