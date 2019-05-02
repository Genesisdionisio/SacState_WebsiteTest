
describe('Login - My Sac state', function() {
	it('Header  Bar at Top Sac state', function() {
		cy.visit('https://my.csus.edu')
		cy.get('input[name=username]').type('USERNAME').blur()
		cy.get('input[name=password]').type('PASSWORD').blur()
		cy.contains('Login').click()
		cy.contains('Sign Out').click()
		})
	})


describe('Top Nav Bar', function(){
	it('Top Bar Sac State Website', function(){
		cy.visit('https://csus.edu')

		cy.get(':nth-child(2) > [href="#"]').click()
		cy.get('[aria-label="View Calendars"]').click()
	     cy.get('#facStaffButton').click()
				
})
})
describe('Nav Bar 1[About, Colleges & Majors, StudentLife, Athletics, Make a Gift]', function(){
	it('Milldle Nav Bar Sac State Website', function(){
		cy.visit('https://csus.edu')

		//Click navigation menu on Top
		cy.contains('About').click()
		cy.visit('https://www.csus.edu/colleges-and-majors/')

		cy.get('[href=" https://www.csus.edu/art/"]')
		cy.contains('Student Life').click()
	
		cy.visit('https://www.csus.edu/giving/')
		
		
	})
})
describe('middle section', function() {
	it('Prospective Students', function() {
		cy.visit('https://csus.edu')
		
		cy.get('#Prospectiveheading > a').click()
        cy.get(':nth-child(2) > [href="https://www.csus.edu/colleges-and-majors/"]')
	    cy.contains('About Sac State')
        cy.contains('Quick Facts')
        cy.visit('https://csus.edu')
        cy.visit('https://www.csus.edu/faid/')
        cy.contains('Future Students')
        cy.contains('Current Students')
    })
        
    it('Current Students' , function(){
        cy.visit('https://csus.edu')
        cy.get('#currentheading > a')
        cy.visit('https://www.csus.edu/current-students/')
        cy.visit('https://csus.edu')
        cy.contains('Current Students')
        cy.contains('Academic Advising')
        cy.contains('Clubs & Organizations')
        cy.contains('Health & Counseling')
        cy.contains('The WELL')
        cy.contains('University Library')
        cy.get(':nth-child(2) > .col-sm-6 > nav > ul > :nth-child(1) > a').click(0)
        
    })
    it('Campus Visitors' , function(){
        cy.visit('https://csus.edu')
        cy.get('#visitorheading > a')
        cy.visit('https://www.csus.edu/current-students/')
        cy.visit('https://csus.edu')
        cy.contains('Campus Map & Tours')
        cy.contains('Dining')
        cy.contains('Meet President Nelsen')
        cy.contains('Parking and Transportation')
        cy.contains('Ticket Office')
        cy.get(':nth-child(3) > .col-sm-6 > nav > ul > :nth-child(1) > a').click()
        cy.get('#cb-showBuilding').click()
        cy.visit('https://csus.edu')
        
    })
    it('Sac State Alumni' , function(){
        cy.visit('https://csus.edu')
        cy.get('#alumniheading > a')
        cy.visit('https://www.csus.edu/alum/')
        cy.visit('https://csus.edu')
        cy.contains('Alumni Association')
        cy.contains('Career Resources')
        cy.contains('Make a Gift')
        cy.contains('Prominent Alumni')
        cy.contains('Sac State Magazine')
        
        cy.visit('https://www.csus.edu/careercenter/')
        cy.get(':nth-child(1) > :nth-child(1) > .btn')
        cy.get(':nth-child(3) > .btn')
    })
    
})
//@Author: Genesis Dionisio
describe('Footer-Housing', function(){
    it('Bottom Bar Sac State Website', function(){
        cy.visit('https://csus.edu')
        cy.get('.hidden-xs > :nth-child(2) > a').click()
        cy.get('.hidden-xs > :nth-child(3) > a').click()
        cy.get('.footer-links > nav > :nth-child(2) > :nth-child(4) > a').click()
        cy.get('.hidden-xs > :nth-child(4) > a').click()
        cy.get('.hidden-xs > :nth-child(5) > a').click()
        cy.get('.hidden-xs > :nth-child(6) > a').click()
})
})
describe('Footer-Library', function(){
    it('CSUS Library website', function(){
        cy.visit('https://library.csus.edu/')
        cy.get('#primoQueryTemp').type('Charlottes Web').click()
        cy.contains('Services').get('.dropdown')
        cy.contains('Spaces').get('.dropdown')              
})
})
describe('Footer-Campus Safety', function(){
    it('Campus Safety Link Check', function(){
        cy.visit('https://www.csus.edu/')
        cy.visit('https://www.csus.edu/aba/campus-safety/')
        //cy.contains('Building Emergency Preparedness Program').click()
        cy.get(':nth-child(2) > .header-search > form > .form-group > button > .glyphicon').click()
})
})
