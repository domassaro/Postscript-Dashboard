import React, { useContext } from 'react';
import CardContainer from "../components/Card.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import "./MainContent.css";
import { PageContxt } from '../App';
import { withRouter } from 'react-router';

export const Campaigns = ({ campaigns }) => { 
  return (
    <Container id="main-under-header">
      <h4>Sent Campaigns</h4>
      <Row>
        {Object.values(campaigns).map((campaign) => {
          return (
              <CardContainer
                key={campaign.id} 
                sentCampaigns={true}
                campaign={campaign} 
              />
          );
        })}
      </Row>
    </Container>
  );
};

export const OpenCampaigns = ({ campaigns }) => {
  return (
    <Container id="main-under-header">
      <h4>Open Campaigns</h4>
      <Row>
        {Object.values(campaigns).map((campaign) => {
          return (
              <CardContainer 
                key={campaign.id}
                sentCampaigns={false}
                campaign={campaign} 
              />
          );
        })}
      </Row>
    </Container>
  );
};

function MainContent(props) {
  const { state }  = useContext(PageContxt);
  let pageName = props.match.path === "/campaigns" ? "Campaigns" : "Dashboard";
  let sentCampaigns = Object.values(state.campaigns).filter(campaign => !!campaign.stats);
  let openCampaigns = Object.values(state.campaigns).filter(campaign => !campaign.stats); 
  let campaignsCount = Object.keys(state.campaigns).length;

  return (
    <div id="main-area">
      <div id="main-header">
        {pageName}
        <Link to={`/campaign/create/${campaignsCount + 1}`} variant="primary">Create Campaign</Link>          
      </div>
      <hr />
      <Campaigns 
        campaigns={sentCampaigns} 
      />
      <OpenCampaigns 
        campaigns={openCampaigns} 
      />
    </div>
  );
}

export default withRouter(MainContent);