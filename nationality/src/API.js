import { useState, useEffect, useRef } from "react";
import Photo from './world-flags.jpg';

function Nationality() {
  //define states
  const [inputName, setInputName] = useState("");
  const [nationalityData, setNationalityData] = useState();
  //create a ref for input element
  const inputRef = useRef();

  //use the useEffect to auto focus on the input element when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //Define an async function that fetches nationality data from API
  async function fetchData() {
    let response = await fetch(`https://api.nationalize.io?name=${inputName}`);
    let data = await response.json();
    setNationalityData(data.country[0]);
  }

  //render the input element and results from fetch
  return (
    <div>
        <img src={Photo} alt="world flag"></img>
      <h1>Find your name's origin!</h1>
      {/* create input to set the input name based on user input */}
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        ref={inputRef}
      />
      {/*create button to use fetch data function*/}
      <button onClick={fetchData}>Click Me!</button>
      {/* Create conditional operator*/}
      {nationalityData && 
      <h3>Your name's nationality is: {nationalityData.country_id}</h3>}
    </div>
  );
}

export default Nationality;