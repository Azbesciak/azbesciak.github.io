import { Azbesciak.Github.IoPage } from './app.po';

describe('azbesciak.github.io App', () => {
  let page: Azbesciak.Github.IoPage;

  beforeEach(() => {
    page = new Azbesciak.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
