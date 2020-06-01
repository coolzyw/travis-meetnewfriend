describe ('Test App', () => {

    it ('launches', () => {
        cy.visit ('/');
    });

    it ('test content and interaction', () => {
        cy.visit ('/restaurant');
        // cy.get('[data-cy=viewEvents]').should('contain', 'View My Events');

        cy.get('[data-cy=viewEvents]').click();
        cy.get('[data-cy=title]').should('contain', 'Events you\'re hosting');
    });
});
