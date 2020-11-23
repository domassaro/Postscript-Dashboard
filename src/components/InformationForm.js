import React, { useContext } from 'react';
import { PageContxt } from '../App';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { withRouter } from 'react-router';
import { updateText, addTags, updateMediaLink, updateName } from '../actions';
import "./InformationForm.css";

function InformationForm(props) {
  let selectedCampaignId = props.match.params.id;
  const { dispatch, state }  = useContext(PageContxt);
  let selectedCampaign = state.campaigns[selectedCampaignId];
  let imagePlaceholder = !!selectedCampaign.media ? selectedCampaign.media : "Enter Image";
  let copyPlaceholder = !!selectedCampaign.text ? selectedCampaign.text : "Enter text";

  const handleUpdateMediaLink = (campaignId, media) => {
    dispatch(updateMediaLink(campaignId, media))
  }

  const handleUpdateName = (campaignId, name) => {
    dispatch(updateName(campaignId, name))
  }

  const handleUpdateText = (campaignId, text) => {
    dispatch(updateText(campaignId, text))
  }

  const handleAddTags = (campaignId, text) => {
    let originalText = selectedCampaign.text;
    let updatedText = originalText.concat(text);
    dispatch(addTags(campaignId, updatedText));
  }

  return (
    <Form>
      <Form.Group key={`formBasicEmail_${selectedCampaign.name}`}>
        <Form.Control 
          type="email"
          value={selectedCampaign.name}
          onChange={e => {handleUpdateName(selectedCampaign.id, e.target.value);}}
          id="name-input"
        />
        <Form.Label id="information-email-row">
          Text
        {/* Created campaigns can use tags to replace parts of the message with variables. */}
        <DropdownButton size="sm" id="dropdown-toggle btn btn-primary btn-sm" title="Add Tag">
          <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(selectedCampaign.id, "{first_name}");}}>First Name</Dropdown.Item>
          <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(selectedCampaign.id, "{last_name}");}}>Last Name</Dropdown.Item>
          <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(selectedCampaign.id, "{shop_name}");}}>Shop Name</Dropdown.Item>
          <Dropdown.Item as="button" onClick={e => e.preventDefault()} onSelect={e => {handleAddTags(selectedCampaign.id, "{shop_link}");}} >Shop Link</Dropdown.Item>
        </DropdownButton>
        </Form.Label>
        <Form.Control 
          as="textarea" 
          rows={5} 
          value={copyPlaceholder} 
          onChange={e => {handleUpdateText(selectedCampaign.id, e.target.value);}} 
        />
        <Form.Label>Media</Form.Label>
        <Form.Control 
          type="text" 
          placeholder={imagePlaceholder} 
          defaultValue={imagePlaceholder} 
          onChange={e => {
          handleUpdateMediaLink(selectedCampaign.id, e.target.value);}} 
        />
        <Form.Text className="text-muted">
          Add and edit a media link in your campaign to attach a picture or GIF to your message.
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default withRouter(InformationForm);