import { useState, useEffect } from "react";

import "./App.css";

// function UnControlledComponent({ title, content }) {
//   return (
//     <section className="card">
//       <h2 className="card-title">{title}</h2>
//       <p className="card-content">{content}</p>
//     </section>
//   );
// }

// function ControlledComponent({ inputValue, setInputValue }) {
//   return (
//     <>
//       <label htmlFor="name">Name:</label>
//       <input
//         name="text_input"
//         type="text"
//         onChange={(event) => setInputValue(event.target.value)}
//         value={inputValue}
//       />
//     </>
//   );
// }

function App() {
  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
    terms: false,
    salutation: "",
    preferredContact: ""
  });

  const [errorMessage, setErrorMessage] = useState({
    fullname: false,
    email: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = { fullname: false, email: false };

    if (inputValue.fullname.length < 3 || inputValue.fullname.length > 15) {
      errors.fullname = true;
    }
    if (inputValue.email.includes("?")) {
      errors.email = true;
    }

    if (errors.fullname || errors.email) {
      setErrorMessage(errors);
      console.log(errorMessage);
      return;
    }

    setInputValue({
      fullname: "",
      email: "",
      terms: false,
      salutation: "",
      preferredContact: ""
    });
    setErrorMessage({
      fullname: false,
      email: false
    });
    console.log(inputValue);
  };

  //   useEffect(() => {
  //     console.log(inputValue);
  //   }, [inputValue]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">Name: </label>
        <input
          type="text"
          onChange={(e) =>
            setInputValue({ ...inputValue, fullname: e.target.value })
          }
          name="fullname"
        />
        {errorMessage.fullname ? (
          <p>Name should be more than 3 characters</p>
        ) : undefined}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
        />
        {errorMessage.email && <p>Your email contains invalid characters</p>}
      </div>
      <div>
        <label htmlFor="terms">I agree</label>
        <input
          type="checkbox"
          name="terms"
          onChange={(e) =>
            setInputValue({ ...inputValue, terms: e.target.checked })
          }
        />
      </div>
      <div>
        <div>
          <label htmlFor="salutation">Mister</label>
          <input
            type="radio"
            name="salutation"
            onChange={(e) =>
              setInputValue({ ...inputValue, salutation: e.target.value })
            }
            value="mister"
          />
        </div>
        <div>
          <label htmlFor="salutation">Misses</label>
          <input
            type="radio"
            name="salutation"
            onChange={(e) =>
              setInputValue({ ...inputValue, salutation: e.target.value })
            }
            value="misses"
          />
        </div>
      </div>
      <div>
        <label htmlFor="preferredContact">Preferred contact</label>
        <select
          name="preferredContact"
          onChange={(e) =>
            setInputValue({ ...inputValue, preferredContact: e.target.value })
          }
        >
          <option name="option_1" value="option_1">
            Option 1
          </option>
          <option name="option_2" value="option_2">
            Option 2
          </option>
          <option name="option_3" value="option_1">
            Option 3
          </option>
          <option name="option_4" value="option_4">
            Option 4
          </option>
        </select>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
