import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItemNavLink = styled(NavLink)`
  border-radius: 10px;
`;

export const MovieItemImg = styled.img`
  border-radius: 10px;
  width: 300px;
  height: 450px;
`;
export const MovieItemTitle = styled.h3`
  font-family: Kanit;
  max-width: 290px;
  font-size: 24px;
  color: rgb(245, 246, 248);
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.24px;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const MovieItemVoteAverge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 500;
  background: var(--linear, linear-gradient(90deg, #cc8a04 0%, #b27600 100%));
  padding: 7px;
  border-radius: 50px;
`;
export const MovieItemWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  padding-bottom: 15px;
`;
export const MovieItemRelease = styled.p`
  font-weight: 500;
`;
export const MovieItemGenresList = styled.ul`
  display: flex;
  gap: 5px;
`;
export const MovieItemGenresItem = styled.li`
  font-size: 16px;
  font-weight: 500;
`;

export const MovieItemOverview = styled.p`
  text-align: center;
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MovieItemOverviewWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 10px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  height: 55%;
  padding: 10px 10px;
  border-radius: 10px;
  overflow: hidden;
  transform: translateY(101%);
  transition: 300ms linear;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const MovieItemStyled = styled.li`
  height: 100%;
  height: auto;
  position: relative;
  margin-bottom: 15px;
  overflow: hidden;
  &:hover {
    border-radius: 10px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    &:hover ${MovieItemOverviewWrap} {
      transform: translateY(0);
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
