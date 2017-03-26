import { ResearcherPage } from './app.po';

describe('researcher App', function() {
  let page: ResearcherPage;

  beforeEach(() => {
    page = new ResearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
