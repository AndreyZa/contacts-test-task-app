import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => ({
	contacts: state.app.contacts,
});

const mapDispatchToProps = {};

const ContactsTableView = connect(mapStateToProps, mapDispatchToProps)(View);

export {
	ContactsTableView
};
