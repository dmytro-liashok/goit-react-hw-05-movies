import styled from 'styled-components';

export const ButtonList = styled.ul`
  height: 100px;
  display: flex;
  gap: 35px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ButtonChangePage = styled.button`
  font-family: 'Open Sans', sans-serif;
  background-color: transparent;
  border: 3px solid #ea7414;
  border-radius: 50px;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  color: #f5f6f8;
  padding: 15px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  &:hover {
    transition: 250ms linear;
    box-shadow: 0 0 10px 0 #ea7414 inset, 0 0 20px 2px #ea7414;
    border: 3px solid #ea7414;
    transition: 250ms linear;
  }
`;
