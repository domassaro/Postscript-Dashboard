import React, { useContext } from 'react';
import { PageContxt } from '../App';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import emptyImage from '../images/emptyImage.png';
import SegmentsDropdown from './SegmentsDropdown';
import "./Card.css";

function CardContainer(props) {
  const { campaign, sentCampaigns } = props;
  const { state }  = useContext(PageContxt);
  let coverImage = !!campaign.media ? campaign.media : emptyImage;

  const addDefaultImage = (e) => {
    e.target.src = emptyImage;
  }

  return (
    <Card id="card-container" key={`${campaign.id}_${campaign.name}`}>
    <Card.Img src={coverImage} onError={e => addDefaultImage(e)} />
    <Card.Body>
      <table id="main-container"> 
        <tbody>
          <tr> 
            <td valign="top">
              <Card.Title>{campaign.name}</Card.Title>
              <Card.Text>
                {campaign.text}
              </Card.Text>
            </td> 
          </tr> 
          <tr> 
            <td valign="bottom">   
              {sentCampaigns && <div>
                <div id="card-text">
                  <div>
                    <h6>Sent</h6>
                    {campaign.stats.sent}
                  </div>
                  <div>
                    <h6>Clicked</h6>
                    {campaign.stats.clicked}  
                  </div>
                </div>   
              </div>}
              <Card id="segments-container">
                <h6>Target Segments</h6>
                <SegmentsDropdown campaign={campaign} segments={state.segments} />
              </Card>
              {/* Can only edit preview campaigns */}
              {!sentCampaigns &&
                <Link to={`/campaigns/${campaign.id}`} variant="primary">Edit</Link>
              }       
            </td> 
          </tr> 
        </tbody>
      </table> 
    </Card.Body>
    </Card>
  );
}

export default CardContainer;
