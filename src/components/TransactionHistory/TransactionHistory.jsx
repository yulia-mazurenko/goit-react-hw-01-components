import PropTypes from 'prop-types';
import { Title, Table , TableRow, TableData, TableHead} from './TransactionHistory.styled';

export const TransactionHistory = function ({ items }) {
    return (
        <>
        <Title>Transaction history</Title>
        <Table>
            <thead>
                <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Currency</TableHead>
                </TableRow>
            </thead>

            <tbody>               
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <TableRow key = {id}>
                            <TableData>{type}</TableData>
                            <TableData>{amount}</TableData>
                            <TableData>{currency}</TableData>
                        </TableRow>
                    )
                })
                }
                         
            </tbody>
            </Table>
            </>
    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
     PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })     
),
}
