import { ClubsPage } from './app.po';

describe('clubs App', function() {
  let page: ClubsPage;

  beforeEach(() => {
    page = new ClubsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
