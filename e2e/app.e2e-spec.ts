import {ClubsPage} from './app.po';
import {browser} from "protractor";

describe('clubs App', function () {
  let page: ClubsPage;

  beforeEach(() => {
    page = new ClubsPage();
  });

  it('should display toolbar with text Clubs', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Clubs');
    browser.waitForAngularEnabled(true);
  });
});
