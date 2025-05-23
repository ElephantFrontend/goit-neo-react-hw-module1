import css from "./Transaction-history.module.css"

function TransactionHistory({items}) {

    return (
        <>
            <table className={css["transaction-table"]}>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>

                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}

export default TransactionHistory
