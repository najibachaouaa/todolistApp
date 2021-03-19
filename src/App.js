import React from 'react';
import AddTodo from '../containers/AddTodo';
import { Provider } from 'react-redux';

import store from './store';

const App = () => (
   <Provider store={store}>
     <ListTodo />
     </Provider>
    
   
   
);

export default App;
