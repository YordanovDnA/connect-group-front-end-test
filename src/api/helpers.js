import axios from 'axios';
/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  const res = await axios.get(apiUrl);
  return res;
}
