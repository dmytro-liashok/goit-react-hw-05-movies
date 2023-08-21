import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export const StyledLink = styled(NavLink)`
  font-family: Kanit;
  font-size: 20px;
  color: #f5f6f8;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 5px;
  margin-bottom: 10px;

  &:hover {
    color: orange;
    transition: 250ms linear;
  }
`;

export const IoArrowBackCircleOutlineStyled = styled(IoArrowBackCircleOutline)`
  width: 30px;
  height: auto;
  margin: 0;
`;

export const MovieTitle = styled.h2`
  font-family: Kanit;
  color: #f5f6f8;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.24px;
  margin-bottom: 15px;
  text-align: center;
`;

export const MovieImg = styled.img`
  border-radius: 10%;
  width: 300px;
  height: auto;
  background-size: cover;
  background-position: center;
`;

export const MovieDetailsList = styled.ul`
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
export const MovieDetailsItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #f5f6f8;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.24px;

  @media screen and (min-width: 359px) {
    align-items: flex-start;
  }
  @media screen and (min-width: 1075px) {
    &:last-child {
      display: block;
    }
  }
`;
export const MovieDetailsItemTitle = styled.h3`
  font-size: 16px;
  color: #f5f6f8;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
`;
export const MovieDetailsDescription = styled.p``;
export const MovieDetailsDescriptionSecondary = styled.p`
  margin-left: 10px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
`;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 25px;
  }
`;

export const CompanyList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #fa7d00;
  border-radius: 10px;
  gap: 15px;
  padding: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: 359px) {
    flex-direction: row;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CompanyItem = styled.li`
  border-bottom: 1px solid #fa7d00;
  padding-bottom: 5px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  @media screen and (min-width: 359px) {
    border: 0;
  }
  @media screen and (min-width: 768px) {
    border: 0;
  }
`;
export const CompanyImg = styled.img`
  width: 100px;
  height: auto;
`;

export const ContainerTabList = styled.ul`
  width: 100%;
  margin-bottom: 10px;
`;
export const ContainerTabItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ContainerTabLink = styled(NavLink)`
  background-color: lightgray;
  text-align: center;
  border: none;
  color: #f5f6f8;
  cursor: pointer;
  padding: 25px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease-out;

  &.active {
    color: orange;
    background-color: rgba(0, 0, 0, 0.529);
  }

  &:hover {
    color: orange;
    background-color: rgba(0, 0, 0, 0.529);
    transition: 250ms linear;
  }
  &:disabled {
    background: linear-gradient(245.39deg, #fc65ed -35.14%, #0500ff 143.06%);
    color: white;
  }
`;

export const ContainerWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
  }
`;

export const MovieDetailsItemLink = styled.a`
  &:hover {
    color: orange;
    transition: 250ms linear;
  }
`;
