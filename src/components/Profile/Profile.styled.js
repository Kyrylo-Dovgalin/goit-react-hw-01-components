import styled from '@emotion/styled';

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: auto;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  text-align: center;
`;
const Description = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
const UserAvatar = styled.img``;
const UserName = styled.p``;
const Tag = styled.p``;
const Location = styled.p``;
const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  background-color: gray;
`;
const Section = styled.li``;
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
