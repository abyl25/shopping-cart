import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from './Firebase';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
        {/* <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer> */}
    </div>
);

class SignUpFormBase extends React.Component {
    state = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null,
    };

    onSubmit = event => {
        event.preventDefault();
        const { username, email, passwordOne } = this.state;
        this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
            this.setState({ ...this.state });
            this.props.history.push("/");
        }).catch(error => {
            this.setState({ error });
        });
    }
  
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {username, email, passwordOne, passwordTwo, error} = this.state;
        const isInvalid = passwordOne !== passwordTwo ||  passwordOne === '' || email === '' || 
            username === '';

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="username" value={username} placeholder="Full Name"
                        onChange={this.onChange} />
                    <input type="text" name="email" value={email} placeholder="Email Address"
                        onChange={this.onChange} />
                    <input type="password" name="passwordOne" value={passwordOne} placeholder="Password"
                        onChange={this.onChange} />
                    <input type="password" name="passwordTwo" value={passwordTwo} placeholder="Password"
                        onChange={this.onChange} />
                    <button type="submit" disabled={isInvalid}>Sign Up</button>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
};

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to="signup">Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm, SignUpLink };