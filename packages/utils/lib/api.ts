import axios, { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

// Fetch data from some API

export const fetchApiData = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    const apiResponse: ApiResponse<T> = {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config
    };
    return apiResponse.data;
  } catch (error: any) {
    throw new Error(`Error fetching data from API: ${error.message}`);
  }
}

