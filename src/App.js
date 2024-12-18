import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const initialFormValues = {
  fullName: "",
  shirtSize: "",
  animals: [],
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleTextChange = (e) => {
    // e.target.name = 'fullName'
    // e.target.value = 'a'
    // {fullName: '', shirtSize: '', animals: [], fullName: 'a'}
    // {shirtSize: '', animals: [], fullName: 'a'}
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  const handleCheckboxChange = (e) => {
    const {checked, name} = e.target;
    if (checked) {
      // {fullName: '', shirtSize: '', animals: ['dog']}
      // {fullName: '', shirtSize: '', animals: ['dog'], animals: ['dog', 'cat']}
      // {fullName: '', shirtSize: '', animals: ['dog', 'cat']}
      setFormValues({...formValues, animals: [...formValues.animals, name]})
    } else {
      setFormValues({...formValues, animals: formValues.animals.filter(a => a !== name)})
    }
  }

  return (
    <div>
      <div>
        <input onChange={handleTextChange} name="fullName" value={formValues.fullName} placeholder="full name" />
      </div>
      <div>
        <select name="shirtSize" onChange={handleTextChange} value={formValues.shirtSize}>
          <option value="">select a shirt size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>
      <div>
        <input name="dog" onChange={handleCheckboxChange} checked={formValues.animals.includes('dog')} type="checkbox"/> Dog
      </div>
      <div>
        <input name="cat" onChange={handleCheckboxChange} checked={formValues.animals.includes('cat')} type="checkbox"/> Cat
      </div>
      <div>
        <input name="fish" onChange={handleCheckboxChange} checked={formValues.animals.includes('fish')} type="checkbox"/> Fish
      </div>
      <div>
        <input name="bird" onChange={handleCheckboxChange} checked={formValues.animals.includes('bird')} type="checkbox"/> Bird
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
