import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log("componentWillMount");

    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log("Welcome " + this.props.name)
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>
                Checkig LifeCycle Hooks
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;