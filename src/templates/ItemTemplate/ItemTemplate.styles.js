import styled from 'styled-components/macro';
import { ButtonIcon } from 'atoms';

export const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 25px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    width: 100%;
    padding: 10px 10px 0;
  }
`;

export const Settings = styled.form`
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-columns: 1fr 100px;
  gap: 15px;
  font-size: 2.2rem;

  input {
    font-size: 2rem;
  }

  .grid-settings-6 {
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .grid-settings-7 {
    grid-column: 1/2;
    grid-row: 4/5;
    justify-self: end;
  }
  .grid-settings-8 {
    grid-column: 2/3;
    grid-row: 4/5;
    justify-self: center;
  }
`;

export const Stock = styled.div`
  display: flex;
  column-gap: 27px;
  margin-bottom: 30px;

  label {
    font-size: 2.2rem;
    color: white;

    &::first-letter {
      text-transform: uppercase;
    }
  }
  input {
    font-size: 3rem;
  }
`;

export const Delete = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ApplyIcon = styled(ButtonIcon)`
  background-size: 65%;
`;

export const ChangeStockWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

export const ButtonAdd = styled(ButtonIcon)`
  border-radius: 15px 0 0 15px;
  height: 100%;
  background-size: 65%;
`;
export const ButtonSub = styled(ButtonIcon)`
  border-radius: 0 15px 15px 0;
  height: 100%;
  background-size: 65%;
`;
