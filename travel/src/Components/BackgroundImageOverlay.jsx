import React,{useState} from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import '../Styling/BackgroundImageOverlay.css';
import Form from './Form';
import img1 from '../Imgs/rTA.png';
import img2 from  '../Imgs/tcha.gif';
import img3 from '../Imgs/kta.webp';


i18n
  .use(initReactI18next) 
  .init({

    resources: {
      en: {
        translation: {
          "La aventura está a un solo click": "Adventure is one Click away"
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });


function BackgroundImageOverlay(props) {
  const [Spanish,setSpanish] = useState(true);
  const { t } = useTranslation();
  return (
    <div
      className="background-image-overlay"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className="overlay">
        <div className="overlay-content">
          <div className="title-container">
            <h1 style={{color: 'white'}}>{t('La aventura está a un solo click')}</h1>
            <div className="image-container">
              <img className='imgPremios' src={img1} alt="imagen 1" />
              <img className='imgPremios' src={img2} alt="imagen 2" />
              <img className='imgPremios' src={img3} alt="imagen 3" />
            </div>
          </div>
          <div className="form-containermain">
            {/*<Form color="gray"/>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImageOverlay;
