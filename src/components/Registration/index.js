import React, { useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import {jsPDF} from 'jspdf';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import "./style.css";

const Registration = () => {
  const history = useHistory();
  const [registerInput, setRegister] = useState({
    name: "",
    age:"",
    gender:"",
    occupation:"",
    maritial_status: "",
    date_of_birth: "",
    phone_no: "",
    address: "",
    zone: "",
    vaccine_center: "",
  });
  
  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };
  
  const saveRegister = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      age: registerInput.age,
      gender: registerInput.gender,
      occupation: registerInput.occupation,
      maritial_status: registerInput.maritial_status,
      date_of_birth: registerInput.date_of_birth,
      phone_no: registerInput.phone_no,
      address: registerInput.address,
      zone: registerInput.zone,
      vaccine_center: registerInput.vaccine_center,
    };
    
    axios
      .post("http://127.0.0.1:8000/api/add-registration", data)
      .then((res) => {
        if (res.data.status === 200) {
          
          setRegister({
            name: "",
            age:"",
            gender:"",
            occupation:"",
            maritial_status: "",
            date_of_birth: "",
            phone_no: "",
            address: "",
            zone: "",
            vaccine_center: "",
            
          });
         
          history.push("http://localhost:3000/registration");
        }
      }); 
  }

  const [value, setValue] = useState("");

  const printDocument = () => {
      const pdf = new jsPDF();
      pdf.save("download.pdf");
    
  };


  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div class="registration">
     
    <div class="social">

<FacebookLogin
  appId="" //APP ID NOT CREATED YET
  fields="name,email,picture"
  callback={responseFacebook}
/>
<br />
<br />


<GoogleLogin
  clientId="" //CLIENTID NOT CREATED YET
  buttonText="LOGIN WITH GOOGLE"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
/>
</div>
      <div>

        <form  className="regform" onSubmit={saveRegister}>
        <h1>Registration</h1>
   
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={registerInput.name}
              className="form-control"
            />
            
     
            <label>Age</label>
            <input
              type="number"
              name="age"
              onChange={handleInput}
              value={registerInput.age}
              className="form-control"
            />
         
            <label>Gender</label>
            <select value={value} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Do not want to Share">Do not want to Share</option>
          
          </select>
          
        
        
            <label>Occupation</label>
            <input
              type="text"
              name="occupation"
              onChange={handleInput}
              value={registerInput.occupation}
              className="form-control"
            />
           
       
            <label>Maritial Status</label>
            <select value={value} onChange={handleChange}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Do not want to Share">Do not want to Share</option>
          
          </select>

          <label>Date of Birth</label>
            <input
              type="date"
              name=" date_of_birth"
              onChange={handleChange}
              // value={registerInput.date_of_birth}
              className="form-control"
            />
   
            <label>Phone No.</label>
            <input
              type="tel"
              name="phone_no"
              onChange={handleInput}
              value={registerInput.phone_no}
              className="form-control"
            />
       
            <label>Address</label>
            <textarea
              name=" address"
              onChange={handleInput}
              // value={registerInput.address}
              className="form-control">
            </textarea>
           
            <label>Zone</label>
            <select value={value} onChange={handleChange}>
            <option value="Puran Dhaka">Puran Dhaka</option>
            <option value="Motijheel">Motijheel</option>
            <option value="Uttara">Uttara</option>
            <option value="Mirpur">Mirpur</option>
            <option value="Gulshan">Gulshan</option>
          
          </select>
     
            <label>Vaccine Center</label>
            <select value={value} onChange={handleChange}>
            <option value="BSSMU">BSSMU</option>
            <option value="Mugda Hospital">Mugda Hospital</option>
            <option value="Ibn Sina">Ibn Sina</option>
            <option value="Mirpur Health Care">Mirpur Health Care</option>
            <option value="Praava Health">Praava Health</option>
            </select>
    <div className="buttons">
            <button type="submit" className="Save">
              Save
            </button>
            <button onClick={window.print()}type="submit" className="Download">
              Download
            </button>
            
        </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
