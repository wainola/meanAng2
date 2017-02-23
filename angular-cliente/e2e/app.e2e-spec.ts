import { AngularClientePage } from './app.po';

describe('angular-cliente App', function() {
  let page: AngularClientePage;

  beforeEach(() => {
    page = new AngularClientePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
