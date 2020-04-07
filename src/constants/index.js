export * from './task';

export const API_ENDPOINT = 'http://localhost:3000';

export const STATUS = [
  {
    value: 0,
    label: 'ready',
  },
  {
    value: 1,
    label: 'in progress',
  },
  {
    value: 2,
    label: 'completed',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDAED: 202,
};
