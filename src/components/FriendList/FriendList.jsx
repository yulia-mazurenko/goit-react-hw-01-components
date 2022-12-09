import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Title } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (   
        <>
            <Title>Friend List</Title>
        <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            ml="auto"
            mr="auto"
            mb={7}            
            as="ul">
                {friends.map(({id, avatar, name, isOnline}) => 
                     (                        
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline= {isOnline}
                    />
                   )
               )} 
            </Box>  
            </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
)
}