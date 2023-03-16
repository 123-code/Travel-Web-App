import React from 'react';
import { CCard } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CButton } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

const TourComponent = ({ text, image }) => {
<CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src={image} />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
}
export default TourComponent;