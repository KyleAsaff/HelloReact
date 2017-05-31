var GreeterMessage = React.createClass({
	render: function() {
		var name = this.props.name;
		var paragraph = this.props.paragraph;
		return (
			<div>
				<h1>Hello {name}</h1>
				<p>{paragraph}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();
		var name = this.refs.name.value;

		if(name.length > 0) {
			this.refs.name.value = '';
			this.props.onNewName(name);
		}
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" />
				<button>Set Name</button>
			</form>
		);
	}
});

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: "React",
			message: "message default"
		};
	},
	getInitialState: function () {
		return {
			name: this.props.name
		};
	},
	handleNewName: function(name) {
		this.setState({
			name: name
		});
	},
	render: function() {
		var name = this.state.name;
		var message = this.props.message;
		return (
			<div>
				<GreeterMessage name={name} paragraph={message}/>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
});

var name = "Kyle";

ReactDOM.render(
	<Greeter name={name} message="Message From Prop!" />,
	document.getElementById("app")
);