export default function Cart (props) {
    return (
        <div>
            <h3>Cart</h3>
            <ul>
                {props.cart.map((item, i) => {
                    return (<li key={i}>
                        <p>{item.name}</p>
                        <button onClick={()=>props.handleCart(item)}>Remove</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}