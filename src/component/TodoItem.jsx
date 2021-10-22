import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ id, title, details, futureDate, completed }) =>{
    return(
        <Link to={`/todo/${id}`} className="todo-item">
            <div>
                <span>{futureDate.substring(0,10)}</span>
                <h6 className="todo-title">{title}</h6>
                <p>{details}</p>
                <div>
                    {completed && (
                        <button className="btn btn-dark">Completed</button>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default TodoItem;