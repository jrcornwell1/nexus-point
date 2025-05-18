import { app } from '../connections/app.connections.js';

export default {
  getVehicles: (params) =>
    app.get('/vehicles', {
      params: params,
    }),
};
