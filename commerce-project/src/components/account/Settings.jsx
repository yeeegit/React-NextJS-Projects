// import { useState } from "react";

// const Settings = () => {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     phone: "+",
//     dob: "Day Month Year",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone") {
//       const numericValue = value.replace(/[^\d]/g, '');
//       setState((prevState) => ({
//         ...prevState,
//         [name]: "+" + numericValue,
//       }));
//     } else {
//       setState((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   return (
//     <div className="settings">
//       <h3>Account Information</h3>
//       <div className="account-settings">
//         <div className="account-inputs">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Name"
//             value={state.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="email">Mail</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Mail"
//             value={state.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             placeholder="Phone Number"
//             value={state.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="dob">Date of Birth</label>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             value={state.dob}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Change Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Change Password"
//             value={state.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={state.confirmPassword}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Update</button>
//       </div>
//     </div>
//   );
// };

// export default Settings;


//


// renewed version

import { useState } from "react";

const Settings = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "+",
    dob: "Day Month Year",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
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
