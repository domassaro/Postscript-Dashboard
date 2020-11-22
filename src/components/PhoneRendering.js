import React, { useContext } from 'react';
import { PageContxt } from '../App';
import { withRouter } from 'react-router';
import phone from '../images/phone.png';
import emptyImage from '../images/emptyImage.png';
import './PhoneRendering.css';

const USER_DATA = {
  first_name: 'Deirdre',
  last_name: 'Massaro',
  shop_name: 'Brooklinen',
  shop_link: 'http://deirdremassaro.com/',
};

// Component that creates a live preview of selected campaign as it is edited
export const PhoneRendering = (props) => {
  const { state }  = useContext(PageContxt);
  let selectedCampaignId = props.match.params.id;
  let selectedCampaign = !!props.draft ? state.draftCampaign : state.campaigns[selectedCampaignId];
  let selectedCampaignText = selectedCampaign.text;

  const addDefaultImage = (e) => {
    e.target.src = emptyImage;
  }

  // Campaign can use tags to replace parts of the message with variables
  if (!!selectedCampaignText) {
    selectedCampaignText = selectedCampaignText.replace(/\{(\w+)\}/ig, (_, templateKey) =>
      USER_DATA[templateKey]
    );
  }

  return (
    <div id="phone-container-placeholder">
        <div id="phone-container">
            <img id="phone-outline" alt="phone" src={phone} />
            <div id="phone-content-container">
                <div id="phone-content-header" className="text-medium">
                    text message
                </div>
                <div id="phone-content-body">
                  {selectedCampaign.media && <img onError={e => addDefaultImage(e)} src={selectedCampaign.media} alt="mms-media" id="phone-content-media-img" />}
                  <div id="phone-content-message">
                      {selectedCampaignText}
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default withRouter(PhoneRendering);