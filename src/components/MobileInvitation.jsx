import React from 'react';
import SectionMain from './SectionMain';

// ...다른 섹션 import
import '../css/MobileInvitation.css';
import InformationWhere from './InformationWhere';
import AngelPoem from './AngelPoem';
import Photo1Section from './Photo1Section';
import MyGallery from './MyGallery';
function MobileInvitation() {
  return (
    <div className="mobileinvitation">
        <div className="div-2">
        <SectionMain />
        <InformationWhere />
        <AngelPoem />
        <Photo1Section />
        <MyGallery />
        </div>
      
      {/* <SectionWeddingInfo /> */}
      {/* ...다른 섹션들 */}
    </div>
  );
}

export default MobileInvitation; 