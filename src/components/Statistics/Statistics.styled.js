import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 240px;
`;

export const CardTitle = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  /* background-color: gray; */
  border: 1px solid gray;
`;

export const StatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatItem = styled.li`
  margin: 0;
  list-style: none;
  width: 240px;
  border: 1px solid black;
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  background-color: gray;
  margin: 0;
`;

export const Value = styled.span`
  display: block;
  text-align: center;
  background-color: gray;
  margin: 0;
`;
