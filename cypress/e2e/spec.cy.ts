const pages = [
  '/our-network',
  '/for-students',
  '/for-partners',
  '/news',
  '/imprint',
];

describe('Page contains navigation', () => {
  it(`Should display navigation on landing page`, () => {
    cy.visit('/');
    cy.get('app-navigation').should('be.visible');
  });

  pages.forEach((page) => {
    it(`Should display navigation on ${page} page`, () => {
      cy.visit(page);
      cy.get('app-navigation-dark').should('be.visible');
    });
  });
});

describe('ESNcard page contains national partners', () => {
  it(`Should display title`, () => {
    cy.visit('/for-partners');
    cy.get('[data-testid="esn-national-partners"]').should(
      'contain.text',
      'Our National Partners'
    );
  });

  it(`Should display at least one partner`, () => {
    cy.visit('/for-partners');
    cy.get('[data-testid="esn-partner-figure"]').eq(0).should('be.visible');
  });
});

describe('Assets are available on students page', () => {
  before(`Empty downloads folder`, () => {
    cy.exec('rm -rf downloads/*');
  });
  it(`Should download pdf asset`, () => {
    cy.visit('/for-students');
    cy.get('[data-testid="esn-students-pdf"]').should('be.visible').click();

    cy.log('**confirm downloaded PDF**');
  });
});
