import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Post from '../routes/post';
``
const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/" />
				<Post path="/post/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</main>
	</div>
);

export default App;
