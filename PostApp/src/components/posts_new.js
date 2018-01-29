import React, { Component } from 'react';
// Very similar to connect from react-redux
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // blog post has been created, navigate user to the index
                // We navigate by calling this.contex.router.push with the
                // new path to navigate to
                this.context.router.push('/'); 
            });
    }
    
    render() {
        console.log(this.props);
        // To see further callbacks:
        // Look at the this.props

        const { fields: { title, categories, content }, handleSubmit } = this.props;
``
        return ( 
            // giving the form control of handling the submit
            // Also, giving it an action creator, to dispatch the action once submitted
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    {/* 
                        {...state} - syntax to drop all properties out.
                        
                        E.G:
                        state = {a:b, c:d}

                        <.... {...state} ... /> = <.... a=b c=d ...>
                    */}
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories'
    }

    if (!values.content) {
        errors.content = 'Enter some content'
    }

    // If the errors object have a field with
    // the same key of the form field, redux form
    // will understand the form is not valid,
    // abd will not allow it to be submit
    return errors;
}

// connect - first arg: mapStateToProps, second arg: mapDispathToProps
// reduxForm: first arg: form config,    second arg: mapStateToProps, 3rd: mapDispathToProps
export default reduxForm({
    // Define the fields of data
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);

// When user puts inputs, it goes to the GLOBAL APPLICATION STATE!
// state === {
//     ...
//     form: {
//         PostNewForm: {
//             title: '...',
//             cotegories: '...',
//             content: '...'
//         }
//     }
//     ...
// }