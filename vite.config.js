import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? '/PRISM_Feedback_Management/'
    : '/',
});