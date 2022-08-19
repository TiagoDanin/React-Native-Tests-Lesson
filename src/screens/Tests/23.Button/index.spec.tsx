import { shadowTheme } from '@tests/actions/styledTheme';
import { ComponentButton } from './styles';

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

interface Props {
  onSubmit: () => void;
  text: string;
  testID: string;
}

const Button = ({ onSubmit, text, testID }: Props) => {
  return (
    <ComponentButton onPress={onSubmit} testID={testID}>
      {text}
    </ComponentButton>
  );
};

describe('Button Component', () => {
  it('should click in button', async () => {
    const { getByText } = render(
      shadowTheme(
        <Button onSubmit={() => {}} text="Entrar" testID="button:login" />,
      ),
    );

    const MyButton = await getByText('Entrar');
    await fireEvent.press(MyButton);
  });
});
