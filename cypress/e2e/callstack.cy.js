describe('CK site test', () => {

	it('Navigate to tech tab', function() {
    	cy.prompt([
			"Visit 'https://www.callstack.com/' page",
			"Click 'Technology' tab",
			"Validate if 'Build for every platform within the React Universe' text is visible"
		])
	});

	it('Open React Universe App project in case-studies', function() {
    	cy.prompt([
			"Visit 'https://www.callstack.com/' page",
			"Click 'Case Studies' tab",
			"Click 'View prject' button of 'React Universe App: Networking Evolved with Liquid Glass' case",
			"Validate if 'adoption rate; majority of attendees registered in the app' text is visible"
		])
	});
});

