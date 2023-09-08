import './expenses.css';
function ExpenseItem(props){
    return(
         <div className="divv">
        <div>{props.date.toISOString()}</div>
        <div className="date">
            <h2 className="head">{props.title}</h2>
            <div className="amountdiv">${props.amount}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;