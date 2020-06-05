import React from "react";

import MainContext from "./MainContext";

export default class Child extends React.Component {
    
    state = {
        input: ""
    }

    //
    //
    //
    //
    //
    static contextType = MainContext;
    //
    //
    //
    //
    //

    submit = (event) => {
        event.preventDefault();
        // call the function which we passed down as a Context value
        this.context.update({
            editMe: this.state.input
        });

        this.setState({
            input: ""
        });
    }

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="child-component">
                <h4>CHILD</h4>
                <div>
                    {
                        /*
                        use this.context to refer to values set by the Context provider
                        */
                    }
                    <span>{this.context.valOne}</span>
                    <br />
                    <span>{this.context.valTwo}</span>
                </div>
                <form onSubmit={this.submit}>
                    <input type="text" name="input" 
                        value={this.state.input}
                        onChange={this.change}
                    />
                    <button>Edit</button>
                </form>
            </div>
        )
    }
}