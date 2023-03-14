import React, { useState } from "react";
import "../App.css";
import "../Styling/Form.css";
import axios from "axios";
import countriesList from '../Data/countries';

// create form component
const Form = ({ color }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria"
    // Agregar el resto de los países aquí
  ];
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdultsChange = (event) => {
    setAdults(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildren(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    axios
      .post("https://mavbaca-backend-production-5202.up.railway.app/api/mainform", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
     <div className="container">
  <div className="cardForm" style={{ backgroundColor: "transparent" }}>
    <div className="inputBoxName" style={{ borderColor: color }}>
      <input
        type="text"
        required
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={{
          color: color,
        
          borderColor: color,
        }}
      />
      <label htmlFor="name" className="user"style={{
          color: color
        }} >
        Nombre
      </label>
    </div>

    <div className="inputBoxApellido" style={{ borderColor: color }}>
      <input
        type="text"
        required
        id="apellido"
        name="apellido"
        value={formData.lastName}
        onChange={handleChange}
        style={{
          color: color,

          borderColor: color,
        }}
      />
      <label htmlFor="apellido" className="user" style={{
          color: color
        }} >
      
        Apellido
      </label>
    </div>

    <div className="inputBoxTelf" style={{ borderColor: color }}>
      <input
        type="tel"
        required
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        style={{
          color: color,
    
          borderColor: color,
        }}
      />
      <label htmlFor="phone" style={{ color: color }}>
        Teléfono
      </label>
    </div>

    <div className="checkboxGroup" style={{ borderColor: color }}>
      <label style={{ color: color }}>Contacto</label>
      <div>
        <label style={{ color: color }}>
          <input
            type="checkbox"
            name="contacto"
            value="chat"
            checked={formData.contacto && formData.contacto.includes("chat")}
            onChange={(e) =>
              setFormData({
                ...formData,
                //contacto: updateContacto(formData.contacto, "chat", e.target.checked),
              })
            }
          />
          Chat
        </label>
        <label style={{ color: color }}>
          <input
            type="checkbox"
            name="contacto"
            value="llamada"
            checked={formData.contacto && formData.contacto.includes("llamada")}
            onChange={(e) =>
              setFormData({
                ...formData,
                //contacto: updateContacto(formData.contacto, "llamada", e.target.checked),
              })
            }
          />
          Llamada
        </label>
        <label style={{ color: color }}>
          <input
            type="checkbox"
            name="contacto"
            value="email"
            checked={formData.contacto && formData.contacto.includes("email")}
            onChange={(e) =>
              setFormData({
                ...formData,
                //contacto: updateContacto(formData.contacto, "email", e.target.checked),
              })
            }
          />
          Email
        </label>
      </div>
    </div>

    <div className="residencia">
      <label htmlFor="country-select" style={{
          color: color
        }} >
      Residencia:</label>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value=""style={{
          color: color
        }} >Selecciona un país</option>
        {countries.map((country) => (
          <option key={country} value={country} >
            {country}
          </option>
        ))}
      </select>
    </div>


          <div className="inputBoxEmail" style={{ borderColor: color }}>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                color: color,
         
                borderColor: color,
              }}
            />
            <span className="user" style={{ color: color }}>
              Email
            </span>
          </div>

          <div className="pickr">
      <label htmlFor="adults-picker"
      style={{
        color: color,
 
   
      }}>
        Número de adultos:
        </label>
      <input
        type="number"
        id="adults-picker"
        value={adults}
        onChange={handleAdultsChange}
      />
      <br />
      <label htmlFor="children-picker" style={{
                color: color,
         
                borderColor: color,
              }}>Número de niños:</label>
      <input
        type="number"
        id="children-picker"
        value={children}
        onChange={handleChildrenChange}
      />
    </div>
        

          <div className="inputBoxMensaje" style={{ borderColor: color }}>
            <input
              type="text"
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                color: color,
              
                borderColor: color,
              }}
            />
            <span style={{ color: color }}>Mensaje</span>
          </div>

          <button
            className="enter"
            type="button"
            onClick={handleSubmit}
            style={{ backgroundColor: color, color: "black" }}
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
