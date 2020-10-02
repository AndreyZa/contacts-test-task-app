import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const ContactsTableView = connect(mapStateToProps, mapDispatchToProps)(View);

export {
	ContactsTableView
};
