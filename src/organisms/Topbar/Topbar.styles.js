import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  width: 93vw;
  height: 65px;
  color: ${({ theme }) => theme.primary};
  border-radius: 15px;
  padding-left: 10px;

  a {
    text-decoration: none;
  }

  a:visited {
    color: ${({ theme }) => theme.primary};
  }
`;

export const BurgerWrapper = styled.div`
  .bm-burger-button {
    position: absolute;
    top: 30px;
    right: 36px;
    width: 36px;
    height: 30px;
  }
  .bm-burger-bars {
    background: #ac3b61;
  }
  .bm-burger-bars-hover {
    background: #a90000;
  }
  .bm-cross-button {
    width: 40px;
    height: 40px;
  }
  .bm-cross {
    background: #ac3b61;
  }
  .bm-menu-wrap {
    position: fixed;
    top: 0;
    height: 60% !important;
  }
  .bm-menu {
    padding: 1rem 1rem 0;
    background: #fff;
    font-size: 3.3rem;
    border-radius: 0 0 0 15px;
    font-weight: 700;
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .bm-item {
    display: inline-block;
    margin: 15px 0;
    color: ${({ theme }) => theme.primary};

    &:last-child {
      margin-top: auto;
      cursor: pointer;
    }
  }
  .bm-overlay {
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .active {
    color: ${({ theme }) => theme.secondary} !important;
  }
`;
