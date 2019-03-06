import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from './reducers/user-list';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  users,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
);
