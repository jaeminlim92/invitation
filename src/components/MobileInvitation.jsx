import React from 'react'
import SectionMain from './SectionMain'

import '../css/MobileInvitation.css'
import InformationWhere from './InformationWhere'
import AngelPoem from './AngelPoem'
import Photo1Section from './Photo1Section'
import MyGallery from './MyGallery'
import Map from './Map'
import Transfer from './Transfer'

function MobileInvitation() {
  return (
    <div className="mobileinvitation">
      <div className="div-2">
        <SectionMain />
        <InformationWhere />
        <AngelPoem />
        <Photo1Section />
        <MyGallery />
        <Map />
        <Transfer />
      </div>
      {/* <SectionWeddingInfo /> */}
      {/* ...다른 섹션들 */}
    </div>
  )
}

export default MobileInvitation
