function AddTask(props){
return(
    <div>
        <input type="text" 
        className="inputAdd"
        value= {props.getTask}
        onChange={(e) => props.setNewTask(e.target.value)}
        placeholder="Masukan Task"
        >

        </input>
        <button type="button" className="buttonAdd" onClick={() => props.Add()}>
            Add Task
        </button>
    </div>
)
}


export default AddTask;