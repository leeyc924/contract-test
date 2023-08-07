import * as api from '../../api/http';

describe('page test', () => {
  test('list 불러오기', async () => {
    const spyonGetList = jest.spyOn(api, 'getList');
    expect(spyonGetList).toHaveBeenCalled();
  });
});
