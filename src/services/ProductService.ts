import axios from 'axios';
import ProductModel from '../models/ProductModel';

const fetchData = async () => {
  const response = await axios.get('https://fe-assignment.vaimo.net/');
  return response.data;
};

export default fetchData;
