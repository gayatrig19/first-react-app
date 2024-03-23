import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Initial state, represents the initial values of anything
            // the component might change either on it's own or due to user interaction.
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter"
        }, ()=>{
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render () {
        return (
            <div>
                 <h1>
                    {this.state.introduction} {this.props.name}, {this.props.greeting}
                 </h1>
                 <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                 </button>
            </div>    
        );   
    }
}

export default StatefulGreetingWithCallback;