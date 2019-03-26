
describe('Top Nav Bar', function(){
	it('Top Bar Sac State Website', function(){
		cy.visit('https://csus.edu')

		cy.contains('Directories').click()
		cy.contains('Calendars').click()
		cy.contains('Quick Links').click()
				
})
})
describe('Login - My Sac state', function() {
	it('Header  Bar at Top Sac state', function() {
		cy.visit('https://my.csus.edu')
		cy.get('input[name=username]').type('TYPE IN USERNAME').blur()
		cy.get('input[name=password]').type('TYPE IN PASSWORD').blur()
		cy.contains('Login').click()
		})
	})

describe('Nav Bar 1', function(){
	it('Milldle Nav Bar Sac State Website', function(){
		cy.visit('https://csus.edu')

		//Click navigation menu on Top
		cy.contains('Admissions').get('.dropdown')
		cy.contains('About').click()
		cy.contains('Student Life').click()
		
		
	})
})
/*
describe('Nav Bar 2', function(){
	it('Milldle of page', function(){
		cy.visit('https://csus.edu')

		
		
	})
})
describe('Footer', function(){
	it('Bottom of the Page', function(){
		cy.visit('https://csus.edu')

		cy.contains('Housing')
		
	})
})
*/