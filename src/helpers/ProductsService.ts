import axios from 'axios';

export async function getProducts() {
  try {
    let response = await axios.get(
      'https://gist.githubusercontent.com/mrov/f0080f612f1f20cf33a54a25f8bb85ee/raw/342d9a6087f3cca28a021ee8838cf93311945423/cars.json',
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
  }
}
