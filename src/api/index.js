// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  // Initial request returning all vehicles
  const { data: vehicles } = await request('/api/vehicles.json');

  // Request to all apiUrls for details
  const details = [...vehicles].map((data) => request(data.apiUrl));
  const results = await Promise.allSettled(details);

  // Filtering function
  async function vehiclesFilter() {
    // Array to store all filtered vehicles that has details (apiUrl is not broken, )
    const filteredVehicles = [];

    // Add the details results to vehicles where price is given
    vehicles.forEach(async (e, i) => {
      const result = results[i].value;
      if (result && result.data.price && result.data.price.length > 0) {
        e.details = result.data;
      }
    });

    // Filter the vehicles to return only those with details
    vehicles.forEach((e) => {
      if (e.details) {
        filteredVehicles.push(e);
      }
    });

    // Return the filtered vehicles list
    return filteredVehicles;
  }

  return vehiclesFilter();
}
