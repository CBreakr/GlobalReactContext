import React from "react";

import Child from "./Child";

export default class Parent extends React.Component {
    render(){
        return (
            <div className="parent-component">
                <h3>PARENT</h3>
                <Child />
            </div>
        );
    }
}