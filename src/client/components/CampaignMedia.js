import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import copy from 'copy-to-clipboard';

const CampaignMedia = ({ medias }) => {
  const copyToClipboard = (linkText) => {
    copy(linkText);
  }

  return (
    <div className="campaign-media-container">
      <div className="campaign-media-carousel">
        {medias.map(media => {
          return (
            <div key={`${media.cover_photo_url}`} className="media-container">
              <div className="media-image-container">
                <img className="media-image" src={media.cover_photo_url} />
                {media.media_type === "video" &&
                  <PlayArrowIcon
                    className="play-button"
                    style={{ height: "48px", width: '48px' }}
                  />
                }
              </div>

              <div className="media-buttons-container">
                <LinkIcon
                  className="media-button-icon"
                  onClick={() => copyToClipboard(media.tracking_link)}
                />
                <a href={media.download_url} download>
                  <GetAppIcon
                    className="media-button-icon"
                  />
                </a>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default CampaignMedia;
