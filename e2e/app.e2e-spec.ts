import { AngbandPage } from './app.po';

describe('angband App', () => {
  let page: AngbandPage;

  beforeEach(() => {
    page = new AngbandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
