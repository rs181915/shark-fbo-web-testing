import AXIOS from 'axios';
import endpoints from './endpoints';

const getToken = () => JSON.parse(localStorage.getItem('jwt'))?.token;
const AxiosCancelToken = AXIOS.CancelToken;

const axios = AXIOS.create({ baseURL: `${endpoints.baseUri}/v1` });

const dataFetcher = ({ url, method, data, cancelToken, num }) => axios({
  url,
  method,
  ...data && { data },
  headers: {
    Authorization: getToken() ? `Bearer ${getToken()}` : '',
  },
  ...cancelToken && { cancelToken },
}).then((res) => ({ ...res.data, code: res.status }))
  .catch(({ response }) => response.data);

const myIpAddress = async () => {
  // creating function to load ip address from the API
  const res = await AXIOS.get('https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708');
  return { geoip: res.data, ip: res.data.IPv4 };
};

export {
  axios,
  AxiosCancelToken,
  dataFetcher,
  endpoints,
  getToken,
  myIpAddress
};
