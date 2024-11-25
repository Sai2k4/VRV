import axios from 'axios';

const API_URL = 'http://localhost:3001/permissions';

export const getPermissions = () => axios.get(API_URL);
