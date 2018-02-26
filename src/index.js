import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// STYLES
import './index.css';

// CONTAINERS
import App from './App';


render(<App/>, document.getElementById('root'));

registerServiceWorker();
