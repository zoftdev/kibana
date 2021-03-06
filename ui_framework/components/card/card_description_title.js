import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export const KuiCardDescriptionTitle = ({ children, className, ...rest }) => {
  const classes = classNames('kuiCard__descriptionTitle', className);
  return <div className={classes} {...rest}>{children}</div>;
};
KuiCardDescriptionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
