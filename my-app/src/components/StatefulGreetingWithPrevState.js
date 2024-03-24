import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initial state, represents the initial values of anything
            // the component might change either on it's own or due to user interaction.
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, ()=> {
            // inside the callback function, this code will run after setState completes.
    //         console.log('new state', this.state.introduction);
    //         console.log('new state', this.state.buttonText);
    //     });
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState);
            console.log('Previous Props:', prevProps);
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            };
        }) ;   
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState);
            console.log('Previous Props:', prevProps);
            return {
                count: prevState.count + 1,
            };
        });
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
                 <button onClick={() => this.increment()}>
                    Increment
                 </button>
                <p>You've clicked {this.state.count} times.</p>
            </div>    
        );   
    }
}

export default StatefulGreetingWithPrevState;