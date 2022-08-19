import { shadowTheme } from '@tests/actions/styledTheme';
import { ComponentButton } from './styles';

import React from 'react';
import { render } from '@testing-library/react-native';

interface Props {
  onSubmit: () => void;
  text: string;
}

const Button = ({ onSubmit, text }: Props) => {
  return <ComponentButton onPress={onSubmit}>{text}</ComponentButton>;
};

describe('Button Component', () => {
  it('should render correctly', async () => {
    render(shadowTheme(<Button onSubmit={() => {}} text="Entrar" />));
  });
});
