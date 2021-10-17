import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Register from "./pages/Register.jsx";
import Todos from "./pages/Todos.jsx";
import MyTodo from "./pages/MyTodo.jsx";
import Login from "./pages/Login.jsx";
import NewTodo from "./pages/NewTodo.jsx";



	 
function App() {
  	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Register} />
				<Route path="/todos" exact component={Todos} />
				<Route path="/login" exact component={Login} />
				<Route path="/new-todo" exact component={NewTodo} />
				<Route path="/todo" exact component={MyTodo} />
			</Switch>
		</Router>
	);
}
     
export default App;