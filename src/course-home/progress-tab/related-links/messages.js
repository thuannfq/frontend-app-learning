import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  datesCardDescription: {
    id: 'progress.relatedLinks.datesCard.description',
    defaultMessage: 'A schedule view of your course due dates and upcoming assignments.',
    description: 'It explain the content of the dates tab',
  },
  datesCardLink: {
    id: 'progress.relatedLinks.datesCard.link',
    defaultMessage: 'Dates',
    description: 'Anchor text for link that redirects to dates tab',
  },
  outlineCardDescription: {
    id: 'progress.relatedLinks.outlineCard.description',
    defaultMessage: 'Một cái nhìn toàn cảnh về nội dung môn học của bạn.',
    description: 'It explain the content of the course outline tab',
  },
  outlineCardLink: {
    id: 'progress.relatedLinks.outlineCard.link',
    defaultMessage: 'Đề cương môn học',
    description: 'Anchor text for link that redirects to course outline tab',
  },
  relatedLinks: {
    id: 'progress.relatedLinks',
    defaultMessage: 'Liên kết liên quan',
    description: 'Headline for (related links) section in progress tab',
  },
});

export default messages;
