import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// exporting function! 
// ComposedComponent - The base component we want to extend
export default function(ComposedComponent) {
    
    class Authentication extends Component {
        //Declaring context part
        //When declaring this, it will be added 
        //TO THE CLASS as so:
        //Authentication.contextType

        //This will reveal the router part
        //which is on the context
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        //Called on every render(or when a new props arrive)
        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
            
        }

        render() {
            console.log("HOC");
            console.log(this.context);
            console.log(ComposedComponent);
            console.log(this.props.authenticated);
            //See 1.4
            // In that example, {resource} is the props!
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.authenticated
        };
    }

    return connect(mapStateToProps)(Authentication);
}





// Example of HOC usage

//This is my HOC
// import Authentication;
// import Resources; // This is the component I want to wrap

// const ComposedComponent = Authentication(Resources);


// // Now, the follwoing will go on a render function

// <ComposedComponent />