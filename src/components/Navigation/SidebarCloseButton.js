import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const SidebarCloseButton = ({
  closeToolbar,
  toolbarOpen,
  title,
  titleIcon,
  backgroundColor,
  statusMessage,
  statusMessageColor,
}) => (
  <Menu
    attached="top"
    size="massive"
    borderless
    style={{ border: 'none', backgroundColor: backgroundColor || 'transparent', maxWidth: '100%' }}
  >
    {title
      && <Menu.Item position="left" content={title} icon={titleIcon} />}
    {statusMessage
      && <Menu.Item position="left" content={statusMessage} style={{ color: statusMessageColor }} />}
    <Menu.Item
      position="right"
      icon={toolbarOpen ? 'x' : 'angle left'}
      onClick={closeToolbar}
      style={{
        minWidth: 60,
      }}
    />
  </Menu>
);

SidebarCloseButton.defaultProps = {
  closeToolbar: () => {},
  toolbarOpen: false,
  title: undefined,
  titleIcon: undefined,
  backgroundColor: undefined,
  statusMessage: undefined,
  statusMessageColor: undefined,
};

SidebarCloseButton.propTypes = {
  closeToolbar: PropTypes.func,
  toolbarOpen: PropTypes.bool,
  title: PropTypes.string,
  titleIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  statusMessage: PropTypes.string,
  statusMessageColor: PropTypes.string,
};

export default SidebarCloseButton;
