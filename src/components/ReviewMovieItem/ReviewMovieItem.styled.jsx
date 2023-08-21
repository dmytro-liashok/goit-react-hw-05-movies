import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

export const ReviewMovieListStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const ReviewMovieItemStyled = styled.li`
  padding: 25px;
  box-shadow: 11px 8px 16px 3px rgba(0, 0, 0, 0.84);
`;
export const FaUserStyled = styled(FaUser)`
  width: 150px;
  height: auto;
`;

export const ReviewDetailList = styled.ul``;
export const ReviewDetailItem = styled.li`
  margin-bottom: 10px;
`;
export const ReviewDetailImg = styled.img`
  width: 150px;
  height: auto;
`;
export const ReviewDetailTitle = styled.h3``;
export const ReviewDetailText = styled.p``;
export const ReviewMovieWrap = styled.div`
  display: flex;
  gap: 25px;
`;

export const ReviewAuthorWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
