import React from 'react';
import { Link } from 'react-router-dom';

class NewTodo extends React.Component{
    render(){
        return(
            <div className="page">
                <h6 className="page-title">Create Todo</h6>

                <form method="POST">
                    <div className="form-col">
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input name="date" id="date" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input name="title" id="title" type="text" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="details">Todo Details</label>
                        <textarea name="details" id="details" cols="10" rows="5"></textarea>
                    </div>
                    
                    <Link to="/todos" className="btn btn-dark">Save</Link>
                </form>
            </div>
        )
    }
}

export default NewTodo;
