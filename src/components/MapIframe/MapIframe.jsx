import React from 'react';;
import './styles/MapIframe.css'

function MapIframe() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1990.2112874889167!2d-76.47675293790152!3d3.9328913971021535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTYnMDAuNyJOIDc2wrAyOCczOS40Ilc!5e0!3m2!1ses-419!2sco!4v1689831042012!5m2!1ses-419!2sco"
      width="100%"
      height="100%"
      style={{ border: 1 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default MapIframe;
