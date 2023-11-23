import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

import { OkayButtonFormattedMessage } from './GenericTourFormattedMessages';

const abandonTour = ({ enabled, onEnd }) => ({
  checkpoints: [{
    body: <FormattedMessage
      id="tours.abandonTour.launchTourCheckpoint.body"
      defaultMessage="Cảm thấy lạc lõng? Bắt đầu chuyến tham quan bất kỳ lúc nào để biết một số mẹo nhanh nhằm tận dụng tối đa trải nghiệm."
    />,
    placement: 'left',
    target: '#courseHome-launchTourLink',
  }],
  enabled,
  endButtonText: <OkayButtonFormattedMessage />,
  onEnd,
  onEscape: onEnd,
  tourId: 'abandonTour',
});

export default abandonTour;
