import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import OfferCard from './OfferCard';
import PullToRefresh from 'react-simple-pull-to-refresh';

const API_URL = '/api/getOffersData/';

const OfferFeed = () => {
  const [ campaignData, setCampaignData ] = useState(null);

  useEffect(() => {
    fetchOffersData();
  }, []);

  const fetchOffersData = () => {
    Axios.get(API_URL)
    .then(res => {
      const offersData = res.data.campaigns;
      setCampaignData(offersData)
    })
    .catch(e => console.error(e));
  };

  const refreshOffersData = async () => {
    return new Promise((resolve, reject) => {
      try {
        fetchOffersData();
        resolve();
      } catch (e) {
        reject(e);
      }
    })
  }

  console.log(campaignData);

  return (
    <PullToRefresh onRefresh={refreshOffersData}>
      <div className="offer-feed-container">
        {campaignData ?
          <>
            {campaignData.map(campaign => {
              return (
                <OfferCard key={`${campaign.id}`} offerData={campaign} />
              );
            })}
          </> :
          <div>Loading</div>
          }
      </div>
    </PullToRefresh>
  );
};

export default OfferFeed;
