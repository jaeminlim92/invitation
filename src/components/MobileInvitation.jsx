import React from 'react'
import SectionMain from './SectionMain'

import '../css/MobileInvitation.css'
import InformationWhere from './InformationWhere'
import AngelPoem from './AngelPoem'
import Photo1Section from './Photo1Section'
import MyGallery from './MyGallery'
import Transfer from './Transfer'
import MeetAtWedding from './MeetAtWedding'
import Footer from './Footer'
import Map from './Map'

function MobileInvitation() {
  return (
    <div className="mobileinvitation">
      <div className="div-2">
        <SectionMain />
        <InformationWhere />
        <AngelPoem />
        <Photo1Section />
        <MyGallery />
        <MeetAtWedding />
        <Map />
        <Transfer />
        <Footer />
      </div>
    </div>
  )
}

export default MobileInvitation
