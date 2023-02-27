import axios from 'axios';

export async function getProducts() {
  let response = await axios.get('http://192.168.0.7:5000/getCars');
  return response;
}
