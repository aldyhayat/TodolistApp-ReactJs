function ListTask(props){
    return(
        <ul>
           {props.getDataTask.map((value,index)=> (
            <div className="ul">
                <button className="buttonRemove" type="button" onClick={() => props.Remove(index)}>-</button>
                <li className="list" key={index}>
                    <p className="p">{value}</p>
                </li> 
                <div className="clearfix"></div>
            </div>
               
           ))}
        </ul>
    )
}

export default ListTask