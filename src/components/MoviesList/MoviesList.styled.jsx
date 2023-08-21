import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 15px 25px;
    align-items: baseline;
  }
`;
