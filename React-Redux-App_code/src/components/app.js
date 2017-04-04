import React from 'react';
import '../css/style.css';
import Matrix from '../containers/matrix.js';
import Async from '../containers/async.js';

const App = () => (
	<div>
		<Async />
        <Matrix />
	</div>
);

export default App;
