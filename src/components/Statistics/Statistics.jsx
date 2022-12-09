import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, TextItem, BlockTitle } from './Statistics.styled';
import { getRandomtColor } from 'utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
    return (
    <>
        <BlockTitle>Statistics</BlockTitle>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            width="statisticsCard"
            ml="auto"
            mr="auto"
            mb={7}
            bg="background"
        >
            {Title && <Title>Upload stats</Title>}
            
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                as="ul"
            >
                {stats.map(({ id, label, percentage }) => (
                    <Box
                        key={id}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        py={4}
                        px={4}
                        width= "20%"
                        bg={getRandomtColor()}
                        as="li"
                        
                    >
                        <TextItem>{label}</TextItem>
                        <TextItem>{ percentage}%</TextItem>
                    </Box>
                    
                ))}
            </Box>
            </Box>
            </>
)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
    })     
    )
}