import React, { useState } from 'react';
import  '../Styling/CookieAlert.css'

function CookieAlert() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  function handleAccept() {
    setShowCookieConsent(false);
  }

  if (!showCookieConsent) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <p>Este sitio utiliza cookies para mejorar tu experiencia de usuario.</p>
      <button onClick={handleAccept}>Aceptar</button>
    </div>
  );
}


export default CookieAlert;
