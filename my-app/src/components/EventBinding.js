import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Initial state, represents the initial values of anything
            // the component might change either on it's own or due to user interaction.
            introduction: "Hello!",
            buttonText: "Exit",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //     });
    //     console.log(this.state.introduction);
    // }

    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction);
    }

    render () {
        return (
            <div>
                 <h1>{this.state.introduction}</h1>
                 {/* <button onClick={() => this.handleClick()}> */}
                 {/* <button onClick={this.handleClick.bind(this)}> */}
                 <button onClick={this.handleClick}>
                    {this.state.buttonText}
                 </button>
            </div>    
        );  
    }
}

export default EventBinding;