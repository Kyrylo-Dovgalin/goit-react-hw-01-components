import PropTypes from 'prop-types';
import {
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
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <UserAvatar src={avatar} width="180"></UserAvatar>
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <Section>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Section>
        <Section>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Section>
        <Section>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Section>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
