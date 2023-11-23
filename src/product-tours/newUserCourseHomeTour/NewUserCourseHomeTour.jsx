import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import {
  DismissButtonFormattedMessage,
  NextButtonFormattedMessage,
  OkayButtonFormattedMessage,
} from '../GenericTourFormattedMessages';

const datesCheckpoint = {
  body: <FormattedMessage
    id="tours.datesCheckpoint.body"
    defaultMessage="Important dates can help you stay on track."
  />,
  placement: 'left',
  target: '#courseHome-dates',
  title: <FormattedMessage
    id="tours.datesCheckpoint.title"
    defaultMessage="Keep on top of key dates"
  />,
};

const outlineCheckpoint = {
  body: <FormattedMessage
    id="tours.outlineCheckpoint.body"
    defaultMessage="Bạn có thể khám phá các phần của môn học bằng cách sử dụng đề cương bên dưới."
  />,
  placement: 'top',
  target: '#courseHome-outline',
  title: <FormattedMessage
    id="tours.outlineCheckpoint.title"
    defaultMessage="Tham gia môn học!"
  />,
};

const tabNavigationCheckpoint = {
  body: <FormattedMessage
    id="tours.tabNavigationCheckpoint.body"
    defaultMessage="Các tab này có thể được sử dụng để truy cập các tài liệu môn học khác, chẳng hạn như tiến độ, giáo trình, v.v."
  />,
  placement: 'bottom',
  target: '#courseTabsNavigation',
  title: <FormattedMessage
    id="tours.tabNavigationCheckpoint.title"
    defaultMessage="Tài nguyên môn học bổ sung"
  />,
};

const upgradeCheckpoint = {
  body: <FormattedMessage
    id="tours.upgradeCheckpoint.body"
    defaultMessage="Work towards a certificate and gain full access to course materials. Upgrade now!"
  />,
  placement: 'left',
  target: '#courseHome-upgradeNotification',
  title: <FormattedMessage
    id="tours.upgradeCheckpoint.title"
    defaultMessage="Unlock your course"
  />,
};

const weeklyGoalsCheckpoint = {
  body: <FormattedMessage
    id="tours.weeklyGoalsCheckpoint.body"
    defaultMessage="Setting a goal makes you more likely to complete your course."
  />,
  placement: 'left',
  target: '#courseHome-weeklyLearningGoal',
  title: <FormattedMessage
    id="tours.weeklyGoalsCheckpoint.title"
    defaultMessage="Set a course goal"
  />,
};

const newUserCourseHomeTour = ({
  enabled,
  onDismiss,
  onEnd,
}) => ({
  advanceButtonText: <NextButtonFormattedMessage />,
  checkpoints: [
    outlineCheckpoint,
    datesCheckpoint,
    tabNavigationCheckpoint,
    upgradeCheckpoint,
    weeklyGoalsCheckpoint,
  ],
  dismissButtonText: <DismissButtonFormattedMessage />,
  enabled,
  endButtonText: <OkayButtonFormattedMessage />,
  onDismiss,
  onEnd,
  onEscape: onDismiss,
  tourId: 'newUserCourseHomeTour',
});

export default newUserCourseHomeTour;
