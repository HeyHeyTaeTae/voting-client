import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import {expect} from 'chai'

describe('Voting', () => {

	it('render a pair of buttons', () => {
		const component = renderIntoDocument(
			<Voting pair={["Trainspotting", "28 Days Later"]} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('Trainspotting');
		expect(buttons[1].textContent).to.equal('28 Days Later');
	});

	it('invokes callback when button is clicked', () => {
		let votedWith;
		const vote = entry => votedWith = entry;

		const component = renderIntoDocument
	});

	it('disables buttons when user has voted', () => {
	  const component = renderIntoDocument(
	    <Voting pair={["Trainspotting", "28 Days Later"]}
	            hasVoted="Trainspotting" />
	  );
	  const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

	  expect(buttons.length).to.equal(2);
	  expect(buttons[0].hasAttribute('disabled')).to.equal(true);
	  expect(buttons[1].hasAttribute('disabled')).to.equal(true);
	});
});







