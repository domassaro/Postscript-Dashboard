import dataFixture from "./data/campaigns.json";

export const getData = async () => {
    // for now, just return fixture
    const data = { ...dataFixture };
    data.campaigns = data.campaigns.reduce((acc, campaign) => ({
        ...acc,
        [campaign.id]: campaign,
    }), {});
    // do the same thing for segments

    return data;
};
