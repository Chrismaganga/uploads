import { app, server } from '../src/server';

import request from 'supertest';

// Import app and server

describe('File Upload API', () => {
  // Close the server after all tests
  afterAll((done) => {
    server.close(done); // Close the server instance
  });

  it('GET / should render the file list', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  // You can add more tests here
});
