import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const initialFormValues = {
  fullName: "",
  shirtSize: "",
  animals: [],
};

const animals = [
  { animal_id: "1", animal_name: "dog" },
  { animal_id: "2", animal_name: "cat" },
  { animal_id: "3", animal_name: "bird" },
  { animal_id: "4", animal_name: "fish" },
];

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      setFormValues({ ...formValues, animals: [...formValues.animals, name] });
    } else {
      setFormValues({
        ...formValues,
        animals: formValues.animals.filter((a) => a !== name),
      });
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={handleTextChange}
          name="fullName"
          value={formValues.fullName}
          placeholder="full name"
        />
      </div>
      <div>
        <select
          name="shirtSize"
          onChange={handleTextChange}
          value={formValues.shirtSize}
        >
          <option value="">select a shirt size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>
      {animals.map((animal) => (
        <div key={animal.animal_id}>
          <input
            name={animal.animal_id}
            onChange={handleCheckboxChange}
            checked={formValues.animals.includes(animal.animal_id)}
            type="checkbox"
          />{" "}
          {animal.animal_name}
        </div>
      ))}
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
