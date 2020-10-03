import { connect } from 'react-redux';
import { View } from './view';
import { simplContact } from 'utils';

const mapStateToProps = (state) => {

	const contacts = state.app.contacts.map(simplContact);

	const allMales = contacts.filter((contact) => contact.gender === 'male');
	const allFemales = contacts.filter((contact) => contact.gender === 'female');

	const filtertedNats = new Map();
	contacts.map((contact) => contact.nat).forEach((nat) => {
		if (!filtertedNats.has(nat)) {
			filtertedNats.set(nat, contacts.filter((contactWithNat) => contactWithNat.nat === nat));
		}
	});

	const filteredNames = new Map();
	contacts.map((contact) => contact.name).forEach((name) => {
		if (!filteredNames.has(name)) {
			filteredNames.set(name, contacts.filter((contactWithName) => contactWithName.name === name));
		}
	});

	const aToZ = [...contacts].sort((firstContact, secondContact) => {
		if (firstContact.name > secondContact.name) {
			return 1;
		} else if (firstContact.name < secondContact.name) {
			return -1;
		} else {
			return 0;
		}
	});
	const zToA = [...contacts].sort((firstContact, secondContact) => {
		if (firstContact.name > secondContact.name) {
			return -1;
		} else if (firstContact.name < secondContact.name) {
			return 1;
		} else {
			return 0;
		}
	});

	/**
	 *
	 * @param {{
	 * sort: "aToZ" | "zToA" | null,
	 * filter: "<na>" | "<name>" | "male" | "female" | null
	 * }} state
	 */
	const manageSortedAndFilteredContacts = (state) => {
		if (state.sort) {
			return state.sort === "aToZ" ? aToZ : zToA;
		} else if (state.filter) {
			if (state.filter === "male") {
				return allMales;
			} else if (state.filter === "female") {
				return allFemales;
			} else {
				return state.filter.length === 2
					? filtertedNats.get(state.filter)
					: filteredNames.get(state.filter)
			}
		}

		return contacts;
	};

	return {
		// contacts,
		// allMales,
		// allFemales,
		manageSortedAndFilteredContacts,
	};
}

const mapDispatchToProps = {};

const ContactsBlockView = connect(mapStateToProps, mapDispatchToProps)(View);

export {
	ContactsBlockView
};
