// IMPORT ALL THE CHILDREN
import React, { Component } from "react";
import CardList from "../components/CardList";
// We export variables like this:
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

// We define props in the parent file
// Example: Card props are defined in CardList
// Pass in the component CardList which is made up of Card components
// Card then destructures them in its function so we can use them!
// CardList accepts a robots prop which refers to the robots array

//return can only return ONE thing so nest everything inside one main
// div tag!

//how can sibling (pure) components communicate?
// we use states!
// a STATE (is an object that describe an application) (changes)
// a PROPS (things that come out of state)
// STATE (parent) >> props (child)

// CONVERT APP into a class for STATE to work
// ADD a constructor
// STATES live in the parent component (APP)
// The STATE (this.state.robots) is passed down as a prop to CardList
// APP owns state, so it owns robots, it's allowed to change it!
// STATES reside in the CONSTRUCTOR of the APP class component

// App is a SMART component
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				// return parsed JSON promise
				return response.json();
			})
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	// (SEARCHBOX) COMPONENT COMMUNICATES WITH (APP) COMPONENT //
	//.........................................................//
	// Anytime you make your own method for a component ALWAYS DO:
	// Use (this syntax) + (arrow functions) + (dismiss const)
	// Changes the state of "searchfiled" to the value we write
	//.........................................................//
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		console.log(event.target.value);
	};

	// (APP) COMPONENT COMMUNICATES WITH (CARDLIST) COMPONENT //
	// This happens inside the render() function before return()
	// Put that variable (filteredRobots) insid render() so we can access it
	// The result (state change; robots change) is passed as a prop
	//.........................................................//

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(searchfield.toLowerCase());
		});

		return !robots.length? 
			<h1>Loading</h1>:
			 (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}

export default App;
