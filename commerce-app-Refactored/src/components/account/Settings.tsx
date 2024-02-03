import { useState, ChangeEvent } from "react";

interface State {
  [key: string]: string;
}

const Settings = () => {
  const initialState: State = {
    name: "",
    email: "",
    phone: "+",
    dob: "Day Month Year",
    password: "",
    confirmPassword: "",
  };

  const [state, setState] = useState<State>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: name === "phone" ? `+${value.replace(/[^\d]/g, '')}` : value,
    }));
  };

  return (
    <div className="settings">
      <h3>Account Information</h3>
      <div className="account-settings">
        <div className="account-inputs">
          {["name", "email", "phone", "dob", "password", "confirmPassword"].map((field) => (
            <div className="input-group" key={field}>
              <label htmlFor={field}>{field === "dob" ? "Date of Birth" : field}</label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : field === "dob" ? "date" : "text"}
                id={field}
                name={field}
                placeholder={field === "dob" ? "Day Month Year" : field.charAt(0).toUpperCase() + field.slice(1)}
                value={state[field]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
