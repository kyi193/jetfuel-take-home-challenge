import React from 'react';
import CampaignHeader from './CampaignHeader';
import CampaignMedia from './CampaignMedia';

const OfferCard = ({offerData}) => {
  return (
    <div className="offer-card">
      <CampaignHeader
        campaignUrl={offerData.campaign_icon_url}
        campaignName={offerData.campaign_name}
        payPerInstall={offerData.pay_per_install}
      />
      <CampaignMedia medias={offerData.medias}/>
    </div>
  );
};

export default OfferCard;
