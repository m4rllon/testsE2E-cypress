describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('deve fazer login com sucesso com credenciais válidas', () => {
    cy.get('#username').type('student');

    cy.get('#password').type('Password123');

    cy.get('#submit').click();

    cy.url().should('include', '/logged-in-successfully/');
    cy.contains('Congratulations student. You successfully logged in!').should('be.visible');
  });

  it('deve falhar ao fazer login com um usuário inesistente', () => {
    cy.get('#username').type('otheruser');

    cy.get('#password').type('Password123');

    cy.get('#submit').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('deve falhar ao fazer login com uma senha incorreta', () => {
    cy.get('#username').type('student');

    cy.get('#password').type('Password12345');

    cy.get('#submit').click();

    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('deve falhar ao fazer login com o campo de username vazio', () => {
    cy.get('#username').should('have.value', '');

    cy.get('#password').type('Password123');

    cy.get('#submit').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('deve falhar ao fazer login com o campo de username com apenas 1 caractere', () => {
    cy.get('#username').type('o');

    cy.get('#password').type('Password123');

    cy.get('#submit').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('deve falhar ao fazer login com o campo password vazio', () => {
    cy.get('#username').type('student');

    cy.get('#password').should('have.value', '');

    cy.get('#submit').click();

    cy.contains('Your password is invalid!').should('be.visible');
  });
});