import axios from 'axios';
const API_BASE_URL = 'https://api.tvmaze.com';
export const searchShows = async (query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search/shows?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching shows:', error);
      return [];
    }
  };
  