import React from 'react'
import PropTypes from  'prop-types'

type Props= {
logo: string
phone: string
message: string
width: number
height: number
}

const WhatsappButton= ({logo, phone, message, width, height }: Props) =>
{
const formattedMessage = message.replace(/  /g, "%20")
console.log("Mi mensaje formateado es", formattedMessage, logo)
  return <>
<div className='fixed bottom-2 right-2  flex  flexColum'>
<a href={`https://wa.me/${phone}?text=Me%20interesa%20in%20el%20auto%20que%20vendes`}
target= "_blank"
rel="noreferrer noopener"
>
  {logo}
</a>
<img src={logo}
width={width}
height={height}
alt="logo de WhatsApp"
 />
</div>
  </>
}

WhatsappButton.prototype={
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message:  PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps ={
  logo: "mi-logo.png",
 phone: "3004507575",
 message: "Estás comunicándote con VTEX University, por favor  ingresa tu duda",
   width: 60,
  height: 60
}

WhatsappButton.schema = {
title: "Botón de WhatsApp",
type: "object",
properties: {
logo: {
title: "Logo de WhatsApp que se relaciones con la marca",
type: "string",
widget: {
"ui:widget": "image-uploader"
}
},
phone:{
title: "Teléfono",
description: "Agregar por favor el número de teléfono",
type: "string"
},
message:{
title: "Mensaje",
description: "Agregar por favor el mensaje que se verá para tu cliente",
type: "string",
widget: {
"ui:widget": "textarea"
}
},
width:{
title: "Teléfono",
description: "Agregar por favor el número de teléfono",
type: "number"
},
height:{
title: "Teléfono",
description: "Agregar por favor el número de teléfono",
type: "number"
},
}

}



export default WhatsappButton;
