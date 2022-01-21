import axios from './axios';

export const getQuantity = async () => 
  await axios.get('/networks')