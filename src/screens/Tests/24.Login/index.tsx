import React, { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackRouter } from '@typings/routes';

import { FormInputs, useValidationSchema } from './useValidationSchema';

import {
  ContainerScroll,
  Input,
  MaskedTextInput,
  ContainerView,
  BoxInputView,
  ContainerBottomView,
  LoginButton,
  LoadingIndicator,
  TitleText,
  LogoSvg,
} from './styles';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackRouter>>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const [form] = useState<FormInputs>({
    phone: '',
  });

  const { validationSchema } = useValidationSchema();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<FormInputs> = async () => {
    setLoading(true);
    // @ts-ignore
    navigation.navigate('Dashboard');
  };

  return (
    <ContainerView>
      <ContainerScroll>
        <TitleText>Bem-vindo</TitleText>
        <LogoSvg />
        <BoxInputView>
          <Input
            testID="textInput:phone"
            name="phone"
            control={control}
            param={form.phone}
            label="Telefone"
            placeholder="Telefone"
            keyboardType="phone-pad"
            hasError={errors?.phone?.message ? true : false}
            errorMessage={errors?.phone?.message}
            render={(props) => (
              <MaskedTextInput
                onChangeText={
                  props.onChangeText as (text: string, rawText: string) => void
                }
                {...props}
                mask="(99) 99999-9999"
                maxLength={16}
              />
            )}
          />
        </BoxInputView>
        <ContainerBottomView>
          {isLoading && <LoadingIndicator />}
          {!isLoading && (
            <LoginButton onPress={handleSubmit(onSubmit)}>Entrar</LoginButton>
          )}
        </ContainerBottomView>
      </ContainerScroll>
    </ContainerView>
  );
};

export default Login;
