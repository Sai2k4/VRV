import axios from 'axios';

const API_URL = 'http://localhost:3001/roles';

export const getRoles = () => axios.get(API_URL);
export const addRole = (role) => axios.post(API_URL, role);
export const updateRole = (id, role) => axios.put(`${API_URL}/${id}`, role);
export const deleteRole = (id) => axios.delete(`${API_URL}/${id}`);
