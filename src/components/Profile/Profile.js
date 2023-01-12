import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Desription>
        <UserAvatar src={avatar}></UserAvatar>
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Desription>
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
  }),
};
