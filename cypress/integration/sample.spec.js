/* ALL SAMPLE TESTS FROM CYPRESS DOCS */

describe('My first test', () => {
	beforeEach(() => {
		cy.visit('https://example.cypress.io')
	})
	it('visits kitchen sink', () => {
		cy.visit('https://example.cypress.io')
	})

	it('finds the content "type"', () => {
		cy.contains('type')
	})

	it('clicks the "type" link', () => {
		cy.contains('type').click()
	})

	it('navigates to a new url when "type" is clicked', () => {
		cy.contains('type').click()
		cy.url().should('include', '/commands/actions')
	})

	it('gets, types, and asserts', () => {
		cy.pause()
		cy.contains('type').click()
		cy.url().should('include', '/commands/actions')
		cy.get('.action-email')
			.type('fake@email.com')
			.should('have.value', 'fake@email.com')
	})
})
