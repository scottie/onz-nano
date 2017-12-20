import React from 'react';
import styles from './clickToSend.css';
import RelativeLink from '../relativeLink';
import { fromRawOnz } from '../../utils/onz';

const ClickToSend = ({ rawAmount, amount, className,
  recipient, children, disabled }) => {
  const normalizedAmount = rawAmount ? fromRawOnz(rawAmount) : amount;
  const urlParams = new URLSearchParams();
  if (normalizedAmount) {
    urlParams.set('amount', normalizedAmount);
  }
  if (recipient) {
    urlParams.set('recipient', recipient);
  }

  return (
    disabled ?
      children :
      <RelativeLink className={`${styles.clickable} ${className}`}
        to={`send?${urlParams}`}>
        {children}
      </RelativeLink>
  );
};

export default ClickToSend;
