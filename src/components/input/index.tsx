import React, { FC } from 'react';
import { COLORS } from '../../constants/colors';

interface InputProps {
  text?: string;
  inputStyle?: any;
  containerStyle?: any;
  onChangeText: (value: string) => any;
}

export const Input: FC<InputProps> = ({
  text,
  inputStyle,
  containerStyle,
  onChangeText
}) => {
  return <div>awd</div>;
};
