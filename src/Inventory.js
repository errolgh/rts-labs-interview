export default function Inventory (props) {
    return (
        <div>
            <h3>Inventory</h3>
            <ul>
                {props.inventory.map((item, i) => {
                    return (<li key={i}>
                        <p>{item.name}</p>
                        <button  onClick={()=>props.handleInventory(item)} >Add</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}