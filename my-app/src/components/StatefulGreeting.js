import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Initial state, represents the initial values of anything
            // the component might change either on it's own or due to user interaction.
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    
    render () {
        return (
            <div>
                 <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                 <button>{this.state.buttonText}</button>
            </div>
           
        )    
    }
}

export default StatefulGreeting;