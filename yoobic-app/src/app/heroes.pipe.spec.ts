import { HeroesPipe } from './heroes.pipe';

describe('HeroesPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroesPipe();
    expect(pipe).toBeTruthy();
  });
});
