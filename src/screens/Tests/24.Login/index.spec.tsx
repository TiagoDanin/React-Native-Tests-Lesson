import React from 'react';

import { act, cleanup, fireEvent, render } from '@testing-library/react-native';

import { mockedNavigate } from '@tests/mocks/rnNavigation';

import MockedNavigator from '@routes/MockedNavigator';

import Login from './index';

describe('Login Screen', () => {
  afterEach(() => {
    cleanup();
    mockedNavigate.mockClear();
  });

  it('should render correctly', async () => {
    render(<MockedNavigator component={Login} />);
    await act(async () => {});
  });

  it('should show error for empty fields', async () => {
    const { getByText } = render(<MockedNavigator component={Login} />);

    await act(async () => {
      const Button = await getByText('Entrar');
      await fireEvent.press(Button);
    });

    getByText('Telefone é obrigatório');
    expect(mockedNavigate).toHaveBeenCalledTimes(0);
  });

  it('should open the page with success', async () => {
    const { queryByText, getByText, getByTestId } = render(
      <MockedNavigator component={Login} />,
    );

    await act(async () => {
      const Input = await getByTestId('textInput:phone');
      await fireEvent.changeText(Input, '12345678910');
    });

    await act(async () => {
      const Button = await getByText('Entrar');
      await fireEvent.press(Button);
    });

    expect(queryByText('Telefone é obrigatório')).toBeNull();
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenLastCalledWith('Dashboard');
  });
});
