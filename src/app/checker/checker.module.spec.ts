import { CheckerModule } from './checker.module';

describe('CheckerModule', () => {
  let checkerModule: CheckerModule;

  beforeEach(() => {
    checkerModule = new CheckerModule();
  });

  it('should create an instance', () => {
    expect(checkerModule).toBeTruthy();
  });
});
