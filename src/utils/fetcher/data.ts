import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "http://103.183.75.112";

const API_ENDPOINTS = {
  dataList: "/api/directory/dataList",
};
interface ApiResponse<T> {
  data: T;
}

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axios({
      url: API_BASE_URL + endpoint,
    });

    return response.data.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${endpoint}: ${error?.message}`);
  }
};

export const fetchAllData = () => fetchData(API_ENDPOINTS.dataList);
