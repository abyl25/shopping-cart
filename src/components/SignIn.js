import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';
import { withFirebase } from './Firebase';
import { SignUpLink } from './SignUp';

const SignInPage = () => (
    <div>
        <h1>Sign In</h1>
        <SignInForm />
        <SignUpLink />
    </div>
);

class SignInFormBase extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };

    onSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase.doSignInWithEmailAndPassword(email, password).then(() => {
            this.setState({ ...this.state });
            this.props.history.push("/");
        }).catch(error => {
            this.setState({ error });
        });    
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="email" value={email} placeholder="Email Address"
                    onChange={this.onChange} />
                <input type="password" name="password" value={password} placeholder="Password"
                    onChange={this.onChange} />
                <button disabled={isInvalid} type="submit">Sign In</button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

// const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };