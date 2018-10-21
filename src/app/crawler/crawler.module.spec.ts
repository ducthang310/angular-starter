import { CrawlerModule } from './crawler.module';

describe('CrawlerModule', () => {
  let crawlerModule: CrawlerModule;

  beforeEach(() => {
    crawlerModule = new CrawlerModule();
  });

  it('should create an instance', () => {
    expect(crawlerModule).toBeTruthy();
  });
});
