import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";



class NewTodo extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "",
            details: "",
            futureDate: "",
            redirect: false,
            path: ""
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        const { title, details, futureDate } = this.state;
        const data = { title, details, futureDate };

        if(title === "" || details === "" || futureDate === ""){
            return alert("Form Error: Please check your input and try again.");
        }

        alert("Creating...please wait");


        let config = {
            method: 'post',
            url: 'https://eventful-moments.herokuapp.com/api/v1/moment',
            headers: {
                'Content-Type': 'Application/json',
				'Authorization': localStorage.getItem('token')
            },
            data : JSON.stringify(data)
        };
          
        axios(config)
        .then((response) =>{
            console.log(response.data);
            alert(response.data.message);

            if(response.data.status_code === 200){
                this.setState(()=>({
                    redirect: true,
                    path: "/todos"
                }))
            }
        })
        .catch((error)=> {
            console.log(error);
            alert('Something went wrong, please try again!');
        });
    }

    handleChange = (e) =>{
        const { name, value } = e.target;
        this.setState(()=>({ [name]: value }));
    }


    render(){
        return(
            <div className="page">
                {this.state.redirect && <Redirect to={this.state.path} />}
                <h6 className="page-title">Create Todo</h6>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-col">
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input name="futureDate" id="date" type="date" onChange={this.handleChange} value={this.state.futureDate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input name="title" id="title" type="text" onChange={this.handleChange} value={this.state.title} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="details">Todo Details</label>
                        <textarea name="details" id="details" cols="30" rows="10" onChange={this.handleChange} value={this.state.details}></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-dark">Save</button>
                </form>
            </div>
        )
    }
}

export default NewTodo;
