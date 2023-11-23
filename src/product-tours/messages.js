import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  beginTour: {
    id: 'tours.button.beginTour',
    defaultMessage: 'Bắt đầu tham quan',
    description: 'A button used to start a tour of the website',
  },
  launchTour: {
    id: 'tours.button.launchTour',
    defaultMessage: 'Hướng dẫn sử dụng',
    description: 'A button used to launch a tour of the website',
  },
  newUserModalBody: {
    id: 'tours.newUserModal.body',
    defaultMessage: 'Hãy cùng tham quan nhanh {siteName} để bạn có thể tận dụng tối đa chương trình học của mình.',
  },
  newUserModalTitleWelcome: {
    id: 'tours.newUserModal.title.welcome',
    defaultMessage: 'Chào mừng bạn đến với',
    description: 'The beginning of the phrase "Welcome to your edX course!"',
  },
  skipForNow: {
    id: 'tours.button.skipForNow',
    defaultMessage: 'Bỏ qua bây giờ',
    description: 'A button used to dismiss the modal and skip the optional tour of the website',
  },
});

export default messages;
