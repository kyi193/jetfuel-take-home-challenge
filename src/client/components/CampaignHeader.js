import React from 'React';

const CampaignHeader = ({ campaignUrl, campaignName, payPerInstall }) => {
  return (
    <div className="campaign-header">
      <img className="campaign-logo" src={campaignUrl} />
      <div className="header-info-container">
        <div className="header-info-name">
          {campaignName}
        </div>
        <div className="header-info-ppi-container">
        <div className={"ppi-bold"}>{payPerInstall}</div>
        <div>&nbsp;per install</div>
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
