// IMPORT ALL THE CHILDREN
import React, { useState, useEffect } from "react";
import CardList from "../components/CardList/CardList.component";
// We export variables like this:
import SearchBox from "../components/SearchBox/SearchBox.component";
import Scroll from "../components/Scroll/Scroll.component";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry.component";

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
function App() {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: "",
	// 	};

	//.........................................................//
	// REACT HOOKS //
	//.........................................................//
	// We use array destructuring to get the values we want
	// the useState() hook returns an array with 2 values
	// The first value is the current state
	// The second value is a function that allows us to change the state
	// and we give it an initial state
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState("");
	const [count, setCount] = useState(0);
	//.........................................................//
	// REACT HOOKS //
	//.........................................................//

	//.........................................................//
	// LIFE CYCLE METHODS USING HOOKS //
	//.........................................................//
	// React runs the useEffect() function everytime it Renders
	// To prevent useEffect() from running everytime we render
	// we pass in a second argument to useEffect()
	// This second argument is an array of values
	// If any of the values in the array change, then the useEffect()
	// function runs
	// We can pass in an empty array to useEffect() to make it run
	// only once
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				setRobots(users);
			});
		console.log(count);
	}, [count]); // only run if count changes (we fetch each time we click!)
	//.........................................................//
	// LIFE CYCLE METHODS USING HOOKS //
	//.........................................................//

	// Whenever we have a component (class component specifically)
	// that needs to leverage some API call to grab data from the internet
	// in order to display the correct UI
	// WE USE THE (componentDidMount()) LIFECYCLE METHOD!!!
	// Mounting means the first time a component is rendered on the page
	// the moment its placed on the DOM
	// componentDidMount() {
	// API calls that update your state
	// THEN RE-RENDER UI!!!

	// --------------------- //
	// COMPONENTS RENDER ONCE WHEN:
	// 1. The component is mounted (initialised in the DOM)
	// --------------------- //

	// --------------------- //
	// COMPONENTS RE-RENDER WHEN:
	// 1. The state changes gets called
	// 2. The props of the component get updated
	// --------------------- //

	// 	console.log("3", "componentDidMount()");
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then((response) => {
	// 			 return parsed JSON promise
	// 			return response.json();
	// 		})
	// 		.then((users) => {
	// 			this.setState(
	// 				() => {
	// 					return { robots: users };
	// 				},
	// 				() => {
	// 					console.log(this.state.robots);
	// 				}
	// 			);
	// 		});
	// }

	// (SEARCHBOX) COMPONENT COMMUNICATES WITH (APP) COMPONENT //
	//.........................................................//
	// Anytime you make your own method for a component ALWAYS DO:
	// Use (this syntax) + (arrow functions) + (dismiss const)
	// Changes the state of "searchfiled" to the value we write
	//.........................................................//

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	};

	// (APP) COMPONENT COMMUNICATES WITH (CARDLIST) COMPONENT //
	// This happens inside the render() function before return()
	// Put that variable (filteredRobots) insid render() so we can access it
	// The result (state change; robots change) is passed as a prop
	//.........................................................//

	// Render your initial component UI
	// console.log("2", "render()");

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	return !robots.length ? (
		<h1>Loading</h1>
	) : (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				Click Me!
			</button>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}
export default App;
