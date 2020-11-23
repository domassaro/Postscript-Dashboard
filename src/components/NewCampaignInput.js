import React, { useContext } from 'react';
import { PageContxt } from '../App';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import { updateDraftText, updateDraftName, addDraftTags, updateDraftMediaLink, createNewCampaign } from '../actions';
import "./InformationForm.css";

function NewCampaignInput(props) {
  const { campaign } = props;
  const { state, dispatch }  = useContext(PageContxt);
  let history = useHistory();

  const handleUpdateName = (campaignId, name) => {
    dispatch(updateDraftName(campaignId, name))
  }

  const handleUpdateMediaLink = (campaignId, media) => {
    dispatch(updateDraftMediaLink(campaignId, media))
  }

  const handleUpdateText = (campaignId, text) => {
    dispatch(updateDraftText(campaignId, text))
  }

  const handleAddTags = (campaignId, text) => {
    let originalText = state.draftCampaign.text;
    let updatedText = originalText.concat(text);
    dispatch(addDraftTags(campaignId, updatedText));
  }

  const handleCreateNewCampaign = () => {
    dispatch(createNewCampaign(state.draftCampaign));
    history.push("/home");
  }

  return (
    <>
      <Form>
        <Form.Group key={`formBasicEmail_${state.draftCampaign.id}`}>
          <Form.Control 
            type="email"
            value={state.draftCampaign.name}
            onChange={e => {handleUpdateName(state.draftCampaign.id, e.target.value);}}
            id="name-input"
          />
          <Form.Label id="information-email-row">
            Text
          {/* Created campaigns can use tags to replace parts of the message with variables. */}
          <DropdownButton size="sm" id="dropdown-toggle btn btn-primary btn-sm" title="Add Tag">
            <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(state.draftCampaign.id, "{first_name}");}}>First Name</Dropdown.Item>
            <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(state.draftCampaign.id, "{last_name}");}}>Last Name</Dropdown.Item>
            <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(state.draftCampaign.id, "{shop_name}");}}>Shop Name</Dropdown.Item>
            <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(state.draftCampaign.id, "{shop_link}");}} >Shop Link</Dropdown.Item>
          </DropdownButton>
          </Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            value={state.draftCampaign.text} 
            onChange={e => {handleUpdateText(state.draftCampaign.id, e.target.value);}} 
            />
          <Form.Label>Media</Form.Label>
          <Form.Control 
            type="text" 
            placeholder={campaign.media} 
            defaultValue={campaign.media} 
            onChange={e => {
              handleUpdateMediaLink(state.draftCampaign.id, e.target.value);}} 
          />
          <Form.Text className="text-muted">
            Add and edit a media link in your campaign to attach a picture or GIF to your message.
          </Form.Text>
        </Form.Group>
      </Form>
    <Button variant="primary" onClick={() => handleCreateNewCampaign()}>Submit</Button>
  </>
  );
}

export default withRouter(NewCampaignInput);