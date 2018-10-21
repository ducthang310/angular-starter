import { BackupModule } from './backup.module';

describe('BackupModule', () => {
  let backupModule: BackupModule;

  beforeEach(() => {
    backupModule = new BackupModule();
  });

  it('should create an instance', () => {
    expect(backupModule).toBeTruthy();
  });
});
