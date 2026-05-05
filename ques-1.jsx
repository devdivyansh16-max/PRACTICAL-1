import { createContext } from "react";

export const UserContext = createContext();
import React from "react";
import { UserContext } from "./UserContext";
import Child from "./Child";

function App() {
  const user = "Divyansh";

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Context API Example</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default App;
import React from "react";
import GrandChild from "./Grandchild";

function Child() {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
}

export default Child;
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Hello {user} 👋</p>
    </div>
  );
}

export default GrandChild;