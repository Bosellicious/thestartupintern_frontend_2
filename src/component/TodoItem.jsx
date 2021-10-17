import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ title, content, date, completed }) =>{
    return(
        <Link to="/todo" className="todo-item">
            <div>
                <span>{date}</span>
                <h6 className="todo-title">{title}</h6>
                <p>{content}</p>
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