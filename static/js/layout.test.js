describe('Fluency level guesses', function () {
	it('a node which is marked fluent is guessed as fluent', function () {
		expect(guess_fluency_level(FLUENCY.FLUENT)).to.equal(FLUENCY.FLUENT);
	});
	it('a node which is marked striving is guessed as striving', function () {
		expect(guess_fluency_level(FLUENCY.STRIVING)).to.equal(FLUENCY.STRIVING);
	});
	it('a node is unmarked and has no descendents is guessed as none', function () {
		expect(guess_fluency_level(FLUENCY.NONE)).to.equal(FLUENCY.NONE);
	});
	it('a node that is unmarked and has at least one fluent descendent is likely fluent', function () {
		expect(guess_fluency_level(FLUENCY.NONE, FLUENCY.NONE, FLUENCY.FLUENT, FLUENCY.STRIVING)).to.equal(FLUENCY.LIKELY_FLUENT);
	});
	it('a node that is unmarked and has at least one striving descendent and no fluent or likely fluent is likely fluent', function () {
		expect(guess_fluency_level(FLUENCY.NONE, FLUENCY.NONE, FLUENCY.STRIVING)).to.equal(FLUENCY.LIKELY_STRIVING);
	});
	it('a node that is unmarked and has at least one likely fluent descendent is likely fluent', function () {
		expect(guess_fluency_level(FLUENCY.NONE, FLUENCY.NONE, FLUENCY.LIKELY_FLUENT, FLUENCY.STRIVING)).to.equal(FLUENCY.LIKELY_FLUENT);
	});
	it('a node that is unmarked and has at least one likely striving descendent but not fluent or likely fluent is likely striving', function () {
		expect(guess_fluency_level(FLUENCY.NONE, FLUENCY.NONE, FLUENCY.LIKELY_STRIVING)).to.equal(FLUENCY.LIKELY_STRIVING);
	});
});
