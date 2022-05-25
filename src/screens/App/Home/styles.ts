import styled from 'styled-components/native';

import { Text } from 'react-native-paper';

import Logo from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
} from '@theme/common';

import theme from '@theme/index';

export const ContainerScroll = styled(ContainerScrollComponent)``;

export const ContainerView = styled(ContainerViewComponent)`
  align-items: center;
  margin-left: ${theme.dimensions.marginHorizontal}px;
  margin-right: ${theme.dimensions.marginHorizontal}px;
`;

export const TitleText = styled(Text)`
  margin-top: 10px;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: 10px;
`;
