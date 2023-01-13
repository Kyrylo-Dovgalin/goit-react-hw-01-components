import PropTypes from 'prop-types';

import {
  FriendsWrap,
  FriendListItem,
  Status,
  UserAvatar,
  UserName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsWrap>
      {friends.map(item => (
        <FriendListItem key={item.id}>
          <Status isOnline={item.isOnline}></Status>
          <UserAvatar
            src={item.avatar}
            alt="User avatar"
            width="48"
          ></UserAvatar>
          <UserName>{item.name}</UserName>
        </FriendListItem>
      ))}
    </FriendsWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
