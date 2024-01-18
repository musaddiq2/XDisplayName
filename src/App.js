import { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullNameValue = `${firstname} ${lastname}`;
    setFullName(fullNameValue);
  };

  return (
    <div className="App">
      <h2 className="title">Full Name Display</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          First name: 
          <input 
            type="text" 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>
        <label>
          Last name: 
          <input 
            type="text" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {fullName && (
        <div className="result">
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;
