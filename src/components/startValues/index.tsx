import React, { FC } from 'react';
import { StartArgsType } from '../../types/array';
import { Form } from '../form';

interface ModalState {
  setStartArray: (value?: StartArgsType) => void;
}

export const StartValues: FC<ModalState> = ({ setStartArray }) => {
  return (
    <Form
      buttonNameFirst="Сreate table"
      buttonNameSecond="Random table"
      onSubmitForm={setStartArray}
    />
  );
};
