import * as bluebird from '..';

describe('bluebird', () => {
  it('matches snapshot', () => {
    expect(bluebird).toMatchSnapshot();
  });
});
