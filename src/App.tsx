import React from "react";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello, world!</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <p>count: {count}</p>
        </div>
    );
}

export default App;
