import React from 'react';
import { fromRawOnz } from '../../utils/onz';
import FormattedNumber from '../formattedNumber';

const roundTo = (value, places) => {
  if (!places) {
    return value;
  }
  const x = 10 ** places;
  return Math.round(value * x) / x;
};

const OnzAmount = props => (<FormattedNumber val={
  roundTo(parseFloat(fromRawOnz(props.val)), props.roundTo)} />);

export default OnzAmount;

