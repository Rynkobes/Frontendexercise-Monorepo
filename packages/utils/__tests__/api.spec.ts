import { fetchApiData } from '../lib/api';
import axios from 'axios';

jest.mock('axios');

describe('fetchApiData', () => {
    
    const apiURL = 'https://pokeapi.co/api/v2/pokemon'

  it('fetches data from API', async () => {
    const mockData = { foo: 'bar' };
    const mockResponse = { data: mockData, status: 200, statusText: 'OK', headers: {}, config: {} };
    (axios.get as jest.Mock).mockResolvedValue(mockResponse);
    
    const data = await fetchApiData(apiURL);

    expect(data).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(apiURL);
  });

  it('throws an error if API call fails', async () => {
    const errorMessage = 'API call failed';
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(fetchApiData(apiURL)).rejects.toThrow(`Error fetching data from API: ${errorMessage}`);
  });
});
