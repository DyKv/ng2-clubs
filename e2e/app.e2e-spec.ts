import {ClubsPage} from './app.po';

describe('clubs App', function () {
  let page: ClubsPage;

  beforeEach(() => {
    page = new ClubsPage();
  });

  it('should display toolbar with text Clubs', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Clubs');
  });
});
