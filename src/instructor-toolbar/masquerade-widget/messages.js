import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  genericError: {
    id: 'masquerade-widget.userName.error.generic',
    defaultMessage: 'Một lỗi đã xảy ra; vui lòng thử lại.',
    description: 'Message shown after a general error when attempting to masquerade',
  },
  placeholder: {
    id: 'masquerade-widget.userName.input.placeholder',
    defaultMessage: 'Tên người dùng hoặc email',
    description: 'Placeholder text to prompt for a user to masquerade as',
  },
  userNameLabel: {
    id: 'masquerade-widget.userName.input.label',
    defaultMessage: 'Giả trang thành người dùng này',
    description: 'Label for the masquerade user input',
  },
});

export default messages;
