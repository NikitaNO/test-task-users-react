import axios from 'axios';

export const getUserListRequest = () => axios.get('/mock-data-user-list.json');
export const getTaskListRequest = () => axios.get('/mock-data-task-list.json');
