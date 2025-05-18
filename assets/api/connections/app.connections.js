import axios from 'axios';

const baseUrl = 'https://m6zhmj6dggvrmepfanilteq4q40rlalu.lambda-url.eu-west-1.on.aws/';

export const app = axios.create({
  baseURL: baseUrl,
});

app.interceptors.request.use(
  (response) => response,
  (error) => Promise.reject(error),
);
