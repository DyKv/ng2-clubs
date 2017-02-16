import { browser, element, by } from 'protractor';

export class ClubsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-toolbar span')).getText();
  }
}
