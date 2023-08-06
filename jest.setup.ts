import { server } from './src/api/node';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())