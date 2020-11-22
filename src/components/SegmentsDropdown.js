import React, { useContext } from 'react';
import { PageContxt } from '../App';
import Dropdown from 'react-bootstrap/Dropdown';
import { updateSegment, updateDraftSegment } from '../actions';

export const SegmentsDropdown = ({ draft, segments, campaign }) => {
  const { dispatch, state }  = useContext(PageContxt);
  let chosenCampaign = !!draft ? state.draftCampaign : campaign;
  const selectedSegment = segments.map((segment) => {
    if (segment.id === chosenCampaign.segment_id) {
      return segment.name;
    }
  });

  const handleUpdateSegment = (campaignId, segment) => {
    if (!!draft) {
      dispatch(updateDraftSegment(campaignId, segment))
    } else {
      dispatch(updateSegment(campaignId, segment))
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        {selectedSegment}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.values(segments).map((segment) => {
          return (
              <Dropdown.Item 
                onSelect={() => { handleUpdateSegment(chosenCampaign.id, segment.id); }}
                key={`${chosenCampaign.segment_id}_${segment.name}`}  
              >
                {segment.name}
              </Dropdown.Item>                
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SegmentsDropdown;
