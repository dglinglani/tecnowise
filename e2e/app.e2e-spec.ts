import { TecnowisePage } from './app.po';

describe('tecnowise App', () => {
  let page: TecnowisePage;

  beforeEach(() => {
    page = new TecnowisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
