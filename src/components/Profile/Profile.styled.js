import styled from '@emotion/styled';

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: auto;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  text-align: center;
`;
const Description = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
const UserAvatar = styled.img`
  border: 1px solid black;
  border-radius: 50%;
`;
const UserName = styled.p`
  font-weight: 700;
`;
const Tag = styled.p`
  color: gray;
`;

const Location = styled.p`
  color: gray;
`;
const Stats = styled.ul`
  display: flex;
  align-items: center;

  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  background-color: gray;
`;
const Section = styled.li`
  flex-basis: 80px;
  border: 1px solid black;
`;
const Label = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Quantity = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 700;
`;

export {
  ProfileCard,
  Description,
  UserAvatar,
  UserName,
  Tag,
  Location,
  Stats,
  Section,
  Label,
  Quantity,
};
