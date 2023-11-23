import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

import { OkayButtonFormattedMessage } from './GenericTourFormattedMessages';

const existingUserCourseHomeTour = ({ enabled, onEnd }) => ({
  checkpoints: [{
    body: <FormattedMessage
      id="tours.existingUserTour.launchTourCheckpoint.body"
      defaultMessage="Gần đây chúng tôi đã thêm một số tính năng mới vào trải nghiệm khóa học. Bạn muốn được trợ giúp khi tìm kiếm xung quanh? Hãy tham quan để tìm hiểu thêm."
    />,
    placement: 'left',
    target: '#courseHome-launchTourLink',
  }],
  enabled,
  endButtonText: <OkayButtonFormattedMessage />,
  onEnd,
  onEscape: onEnd,
  tourId: 'existingUserCourseHomeTour',
});

export default existingUserCourseHomeTour;
