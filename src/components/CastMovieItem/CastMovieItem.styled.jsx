import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

export const CastMovieList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px 15px;
`;

export const CastMovieItemStyled = styled.li`
  width: 150px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const CastMovieImg = styled.img`
  border-radius: 15px;
`;
export const CastDetailList = styled.ul``;
export const CastDetailItem = styled.li``;
export const FaUserStyled = styled(FaUser)`
  width: 150px;
  height: auto;
`;
