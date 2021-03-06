﻿import styled from 'styled-components';
import { Title } from 'atoms';

export const Wrapper = styled.div`
  position: relative;
  max-width: 420px;
  min-height: 250px;
  background-color: white;
  padding: 27px 25px;
  color: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-basis: 350px;
  flex-grow: 1;

  @media (max-width: 960px) {
    max-width: 100%;
    min-height: 100px;
  }
`;

export const Text = styled(Title)`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-bottom: 20px;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 1px;
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 27px;
  width: 50px;
  height: 65px;

  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;
