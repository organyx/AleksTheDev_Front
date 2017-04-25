import { AleksthedevFrontPage } from './app.po';

describe('aleksthedev-front App', () => {
  let page: AleksthedevFrontPage;

  beforeEach(() => {
    page = new AleksthedevFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
