import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const handleClick = async () => {
    const response = await fetch(
      "https://apicalls-c75cf-default-rtdb.firebaseio.com/Meals.json"
    );
    const data = await response.json();
    const meal = [];
    //const abs;
    for (const i in data) {
      meal.push({
        id: i,
        name: data[i].name,
        age: data[i].age,
      });
    }
    setList(meal);
  };
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  
  const handle1 = (e) => {
    setAge(e.target.value);
  };
  const handle2 = (e) => {
    setName(e.target.value);
  };
  const handleClick2 = async () => {
    fetch("https://apicalls-c75cf-default-rtdb.firebaseio.com/Meals.json", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        age: age,
      }),
    });
  };

  return (
    <div className="App">
      Ankit
      <div>
        {list.map((key) => (
          <div>
            <div>{key.name}</div>
            <div>{key.age}</div>
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Click here</button>
      <div>
        <input onChange={handle1} value={age}></input>
        <input onChange={handle2} value={name}></input>
        <button onClick={handleClick2}>Click to add data</button>
      </div>
    </div>
  );
}

export default App;
