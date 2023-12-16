//Nested Structure using React.
//<div id="parent">
//	<div id="child">
//		<h1></h1>
//	</div>
//</div>
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I'm h1 tag")));
//React.createElement will create a javascript object for you.
console.log(parent);
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(parent) //this render method will take the object and convert it into the heading tag and put it up on the DOM.

/*
div id="parent">
	<div id="child1">
		<h1></h1>
		<h2></h2>
	</div>
	<div id="child2">
		<h1></h1>
		<h2></h2>
	</div>
</div>
*/

const parent1 = React.createElement("div",
                                    {id:"parent1"},
                                        [React.createElement('div',{id:"child1"},
                                            [React.createElement("h1",{},"I am h1 tag"),
                                             React.createElement("h1",{},"I am h2 tag")]),
                                        React.createElement('div',{id:"child2"},
                                            [React.createElement("h1",{},"I am h1 tag"),
                                            React.createElement("h1",{},"I am h2 tag")])]);
console.log(parent1)
const root1 =ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent1)

//now the above code looks very untidy and this why there is something known as JSX that exist 

/*
const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World React!")
React.createElement will create a javascript object for you.
console.log(heading); //object
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(heading) //this render method will take the object and convert it into the heading tag and put it up on the DOM.
*/