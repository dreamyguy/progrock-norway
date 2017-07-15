import { ProgrockNorwayPage } from './app.po';

describe('progrock-norway App', () => {
  let page: ProgrockNorwayPage;

  beforeEach(() => {
    page = new ProgrockNorwayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
