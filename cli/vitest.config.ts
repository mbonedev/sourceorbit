import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: { 
    // ... Specify options here.
    globalSetup: [`test/setup.ts`],
  },
})