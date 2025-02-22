/* eslint-disable no-undef */
const useRouter = () => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
});

module.exports = { useRouter };
