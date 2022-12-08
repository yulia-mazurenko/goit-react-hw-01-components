import PropTypes from 'prop-types';
import { GiShadowFollower } from 'react-icons/gi';
import { AiFillLike } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { Box } from 'components/Box';

import {
    UserName,
    UserInfo,
    UserAvatar,
    StatsItem,    
} from './Profile.styled'

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats }) => {
    
    return (
      <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="profileCard"
          pt={5}
          ml="auto"
          mr="auto"
          mb={7}
          bg="background"
          as="div"
        >
          <Box
              display="flex"
            flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
              as="div">
              <UserAvatar
                src={avatar}
                alt="User avatar"      
              />
              <UserName>{username}</UserName>
              <UserInfo>@{tag}</UserInfo>
              <UserInfo>{location}</UserInfo>
          </Box>

          <Box
              display="flex"
              alignItems="center"
              justifyContent="center" 
              width="100%"
              as="ul">
              <StatsItem>
              <GiShadowFollower/>
                <span>{stats.followers}</span>
              </StatsItem>
              <StatsItem>
                <AiFillEye/>
                <span>{stats.views}</span>
              </StatsItem>
              <StatsItem>
                <AiFillLike/>
                <span>{stats.likes}</span>
              </StatsItem>
          </Box>
      </Box>
    )   
}
     
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}