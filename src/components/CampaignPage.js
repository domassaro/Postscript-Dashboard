import React, { useContext } from 'react';
import { PageContxt } from '../App';
import CardExpanded from "../components/CardExpanded.js";
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import PhoneRendering from './PhoneRendering';

function CampaignPage(props) {
  let selectedCampaignId = props.match.params.id
  const { state }  = useContext(PageContxt);
  let selectedCampaign = state.campaigns[selectedCampaignId]

  return (
    <div id="main-area">
      <div id="main-header">
        Edit Campaign  
        <Link to={"/campaigns"} variant="primary">Back</Link>                
      </div>
      <hr />
      <CardExpanded 
        key={selectedCampaign.id}
        campaign={selectedCampaign} 
      />
      <PhoneRendering />
    </div>
  );
}

export default withRouter(CampaignPage);