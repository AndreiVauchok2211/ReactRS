// import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
// import matchers from '@testing-library/jest-dom/matchers';

// expect.extend(vitest);

afterEach(() => {
  cleanup();
});
