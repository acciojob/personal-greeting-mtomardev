
import React , {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [text, setText] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}

        <h2>Enter your name</h2>
        <input type="text" onChange={(e)=>setText(e.target.value)}></input>
        <h1>{text}</h1>

    </div>
  )
}

export default App
