
describe('SacStateWebsite', function(){
	it('Visits Sac State Website', function(){
		cy.visit('https://csus.edu')

		//Header
		
		cy.contains('Directories').click()
		cy.contains('Calendars').click()
		cy.contains('Quick Links').click()

		//Click navigation menu on Top
		cy.contains('About').click()
		cy.contains('Student Life').click()
		cy.contains('Make a Gift').click()
		cy.get('.dropdown-menu').click()

		//Middle Navigation Bar
		
		
})
})