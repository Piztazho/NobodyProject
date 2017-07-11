import { NobodyPhotoPage } from './app.po';

describe('nobody-photo App', () => {
  let page: NobodyPhotoPage;

  beforeEach(() => {
    page = new NobodyPhotoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
