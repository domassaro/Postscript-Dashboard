  // Add/edit a media link in campaign to attach a picture or GIF to the message.
  export const updateMediaLink = (campaignId, media) => {
    return {
      type: 'addMediaLink',
      payload: {
        campaignId,
        media,
      },
    }
  };

  // Add/edit a media link in campaign to attach a picture or GIF to the message.
  export const updateDraftMediaLink = (campaignId, media) => {
    return {
      type: 'addDraftMediaLink',
      payload: {
        campaignId,
        media,
      },
    }
  };

  // Change segment in draft campaign
  export const updateDraftSegment = (campaignId, segment_id) => {
    return {
      type: 'changeDraftSegment',
      payload: {
        campaignId,
        segment_id,
      },
    }
  };

  // Change segment in campaign
  export const updateSegment = (campaignId, segment_id) => {
    return {
      type: 'changeSegment',
      payload: {
        campaignId,
        segment_id,
      },
    }
  };

  // Add draft tags in campaign
  export const addDraftTags = (campaignId, text) => {
    return {
      type: 'addDraftCampaignTags',
      payload: {
        campaignId,
        text,
      },
    }
  };

  // Add tags in campaign
  export const addTags = (campaignId, text) => {
    return {
      type: 'addCampaignTags',
      payload: {
        campaignId,
        text,
      },
    }
  };

  // Change draft text in campaign
  export const updateDraftText = (campaignId, text) => {
    return {
      type: 'changeDraftCampaignText',
      payload: {
        campaignId,
        text,
      },
    }
  };

  // Change text in campaign
  export const updateText = (campaignId, text) => {
    return {
      type: 'changeCampaignText',
      payload: {
        campaignId,
        text,
      },
    }
  };

  // Create draft of new campaign
  export const createNewDraftCampaign = (campaign) => {
    return {
      type: 'createNewDraftCampaign',
      payload: {
        campaign,
      },
    }
  }

  // Create new campaign
  export const createNewCampaign = (campaign) => {
    return {
      type: 'createNewCampaign',
      payload: {
        campaign,
        // text,
      },
    }
  }
  