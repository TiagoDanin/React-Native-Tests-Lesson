import { shadowTheme } from '@tests/actions/styledTheme';
import { ComponentButton } from './styles';

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { act } from '@testing-library/react-hooks';

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
  it('should render correctly', async () => {
    render(
      shadowTheme(
        <Button onSubmit={() => {}} text="Entrar" testID="button:login" />,
      ),
    );
  });

  it('should show the text correctly', async () => {
    const { getByText } = render(
      shadowTheme(
        <Button onSubmit={() => {}} text="Entrar" testID="button:login" />,
      ),
    );

    await getByText('Entrar');
  });

  it('should emit click event correctly', async () => {
    const onSubmitMocked = jest.fn();
    const { getByText } = render(
      shadowTheme(
        <Button
          onSubmit={onSubmitMocked}
          text="Entrar"
          testID="button:login"
        />,
      ),
    );

    act(async () => {
      const ElementButton = await getByText('Entrar');
      await fireEvent.press(ElementButton);
      expect(onSubmitMocked).toHaveBeenCalledTimes(1);
    });
  });
});
