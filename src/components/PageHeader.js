import React from 'react';

import { MediaObject, MediaObjectBody, MediaObjectFigure } from './MediaObject';
import Icon from './Icon';

const PageHeaderBase = ({ title, info }) => {
  const icon = <Icon category="standard" icon="opportunity" />;

  return (
    <div className="slds-page-header" role="banner">
      <MediaObject>
        <MediaObjectFigure>{icon}</MediaObjectFigure>
        <MediaObjectBody>
          <p className="slds-page-header__title slds-truncate slds-align-middle" title={title}>
            {title}
          </p>
          <p className="slds-text-body--small slds-page-header__info">{info}</p>
        </MediaObjectBody>
      </MediaObject>
    </div>
  );
};

PageHeaderBase.propTypes = {
  title: React.PropTypes.string.isRequired,
  info: React.PropTypes.string.isRequired,
};

export default PageHeaderBase;
