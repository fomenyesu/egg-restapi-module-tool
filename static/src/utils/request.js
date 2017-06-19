import axios from 'axios'
import qs from 'qs'
import config from './config'

axios.defaults.headers.post['Content-Type'] = 'application/json';

const fetch = (options) => {
  const {
    method = 'get',
    data,
    url,
    ..._options
  } = options
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, { params: data })
    case 'delete':
      return axios.delete(url, { data })
    case 'head':
      return axios.head(url, data)
    case 'post': {
      const params = new URLSearchParams();
      for (let key in data) {
        params.append(key, data[key]);
      }
      return axios.post(url, data, _options);
    }
    case 'put':
      return axios.put(url, data, _options);
    case 'patch':
      return axios.patch(url, data)
    case 'upload': {
      const form = new FormData();
      form.append('file', data.file);
      return axios.post(url, form, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
    default:
      return axios(options)
  }
}

export default function request (options) {
  if (options.url.indexOf('//') == -1) {
    options.url = config.devBaseURL + options.url;
  }
  const t = new Date().getTime();
  if (options.url.indexOf('?') != -1) {
    const search = options.url.split('?')[0];
    if (search.length > 0) {
      options.url = options.url + '&t=' + t;
    } else {
      options.url = options.url + 't=' + t;
    }
  } else {
    options.url = options.url + '?t=' + t;
  }

  return fetch(options).then((response) => {
    return response.data;
  }).catch((error) => {
    console.log(error)
    return Promise.reject(error)
  })
}
