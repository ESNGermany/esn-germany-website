import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'eaqchm',
  e2e: {
    baseUrl: 'http://localhost:4200',
  },
});
