import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatusMarker, FriendName } from './FriendListItem.styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width="friendCard"
            mb="3"
            pb="3"
            pt="3"
            pl="4"
            bg="white"
            boxShadow="normal"
            as="li"
        >
            <StatusMarker>{ isOnline}</StatusMarker>
            <img src={avatar} alt={name} width="60" />
            <FriendName>{name}</FriendName>
        </Box>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}



