import React, { useContext, useEffect } from 'react';
import { PageContxt } from '../App';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import PhoneRendering from './PhoneRendering';
import CardExpanded from "../components/CardExpanded.js";

function CreateCampaignPage(props) {
  const { state, dispatch }  = useContext(PageContxt);
  let campaignsCount = Object.keys(state.campaigns).length;

  // Create initial default values for a new campaign
  let newCampaign = {
    "id": campaignsCount + 1,
    "name": "New campaign",
    "text": "Hey {first_name}! Enter your message here!",
    "status": "Preview",
    "segment_id": 3,
    "media": "https://images.unsplash.com/photo-1568485248685-019a98426c14",
    "stats": null
  };

  useEffect(() => {
    dispatch({
      type: 'createNewDraftCampaign',
      payload: { campaign: newCampaign },
    });
  }, [campaignsCount]);

  return (
    <div id="main-area">
      <div id="main-header">
        Create Campaign
        <Link to={"/campaigns"} variant="primary">Back</Link>     
      </div>
      <hr />
      <CardExpanded 
        key={newCampaign.id}
        campaign={state.draftCampaign} 
        isNewCampaign={true}
      />
      <PhoneRendering draft={true}/>
    </div>
  );
}

export default withRouter(CreateCampaignPage);