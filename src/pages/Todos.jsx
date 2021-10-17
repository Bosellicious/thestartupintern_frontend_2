import React, { useState } from "react";
import TodoItem from "../component/TodoItem.jsx";


function Todos() {

	// eslint-disable-next-line
	const [ todoList, setTodoList ] = useState([
		{
			title: 'This is a sample title',
			content: 'This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details…',
			date: '24/01/2021',
			completed: true
		},
		{
			title: 'This is a sample title',
			content: 'This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details…',
			date: '24/01/2021',
			completed: true
		},
		{
			title: 'This is a sample title',
			content: 'This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details…',
			date: '24/01/2021',
			completed: false
		},
		{
			title: 'This is a sample title',
			content: 'This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details…',
			date: '24/01/2021',
			completed: true
		},
		{
			title: 'This is a sample title',
			content: 'This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details…',
			date: '24/01/2021',
			completed: false
		},
		{
			title: 'This is a sample title',
			content: 'This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details, This is a sample details…',
			date: '24/01/2021',
			completed: false
		},
	]);

	return (
		<div className="todos">
			<h6 className="todos-title">My Todo</h6>

			<div className="todoList">
				{todoList.map((item, index)=>(
					<TodoItem 
						key={index}
						title={item.title}
						content={item.content}
						date={item.date}
						completed={item.completed}
					/>
				))}
			</div>

			<div className="todos-pagination">
				<span>1 2 3</span>
			</div>
		</div>
	);
}

export default Todos;
