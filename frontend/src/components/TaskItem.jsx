import  {useDispatch} from "react-redux"
import {deleteTask} from "../features/tasks/taskSlice.js";
import{format} from "date-fns"
function TaskItem({task}){
    const dispatch= useDispatch();
    const taskDate = task.createdAt ? new Date(task.createdAt) : null;
    return (
        <div className="goal">
            <div>{taskDate ? format(taskDate, 'MM/dd/yyyy') : 'No due date'}</div>
            <h2>{task.text}</h2>
            <button onClick={() => dispatch(deleteTask(task._id))} className="close">
                X
            </button>
        </div>
    )
}
export default TaskItem;