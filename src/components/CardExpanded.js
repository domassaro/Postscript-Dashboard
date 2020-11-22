import React, { useContext } from 'react';
import { PageContxt } from '../App';
import Card from 'react-bootstrap/Card';
import InformationForm from './InformationForm';
import emptyImage from '../images/emptyImage.png';
import SegmentsDropdown from './SegmentsDropdown';
import NewCampaignInput from './NewCampaignInput';
import "./Card.css";

function CardExpanded(props) {
  const { campaign, isNewCampaign } = props;
  const { state }  = useContext(PageContxt);
  let coverImage = !!campaign.media ? campaign.media : emptyImage;

  const addDefaultImage = (e) => {
    e.target.src = emptyImage;
  }

  return (
    <Card id="CardExpanded-Container">
    <Card.Img src={coverImage} onError={e => addDefaultImage(e)} />
    <Card.Body>
      <Card.Title>{campaign.name}</Card.Title>

      {/* Depending on whether or not you are making a new campaign or not -- 
      render different components */}
      {!!isNewCampaign &&
        <>
        <NewCampaignInput campaign={campaign}/>
          {/* Select a target segment for campaign */}
          <div id="segments-container">
            <h6>Segments</h6>
            <SegmentsDropdown draft={true} segments={state.segments} />
          </div>
        </>
      }

      {!isNewCampaign && 
        <>
          <InformationForm />
          {/* Select a target segment for campaign */}
          <div id="segments-container">
            <h6>Segments</h6>
            <SegmentsDropdown campaign={campaign} segments={state.segments} />
          </div>
        </>
      }

    </Card.Body>
    </Card>
  );
}

export default CardExpanded;
