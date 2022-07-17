// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC } from 'react';
import style from './index.module.css';

interface TextPlusButtonState {
  text?: string;
  buttonText?: string;
  onClick?: () => void;
}

export const TextPlusButton: FC<TextPlusButtonState> = ({
  text = 'Text',
  buttonText = 'ButtonText',
  onClick
}) => {
  return (
    <div className={style.container}>
      <div className={style.text}>{text}</div>
      {onClick && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
};
