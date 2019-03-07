import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from './reducers/user';
import tasks from './reducers/task';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  users,
  tasks,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
