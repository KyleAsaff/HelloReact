var GreeterMessage = React.createClass({
	render: function() {
		var name = this.props.name;
		var text = this.props.text;
		return (
			<div>
				<h1>Hello {name}</h1>
				<p>{text}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();
		var name = this.refs.name.value;
		var text = this.refs.text.value;
		var updates = {};
		if(name.length > 0) {
			updates.name = this.refs.name.value;
			this.refs.name.value = '';
		}
		if(text.length > 0) {
			updates.text = this.refs.text.value;
			this.refs.text.value = '';
		}
		this.props.onNewName(updates); 
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" />
				<textarea type="text" ref="text"/>
				<button>Set Name</button>
			</form>
		);
	}
});

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: "React",
			text: "message default"
		};
	},
	getInitialState: function () {
		return {
			name: this.props.name,
			text: this.props.text
		};
	},
	handleNewName: function(updates) {
		if(updates.name) {
			this.setState({
				name: updates.name
			});
		}
		if(updates.text) {
			this.setState({
				text: updates.text
			});
		}
	},
	render: function() {
		var name = this.state.name;
		var text = this.state.text;
		return (
			<div>
				<GreeterMessage name={name} text={text}/>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
});

var name = "Kyle";
var text = "text"

ReactDOM.render(
	<Greeter name={name} text={text} />,
	document.getElementById("app")
);