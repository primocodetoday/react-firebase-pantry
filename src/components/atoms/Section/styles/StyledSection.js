import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  justify-content: flex-start;
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  width: 100%;
  min-height: 100vh;
  padding: 25px 35px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    align-items: center;
    padding: 10px 10px 0;
  }
`;

Wrapper.defaultProps = {
  theme: {
    mediaBreaks: {
      mobile: 600,
    },
  },
};
