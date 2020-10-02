import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const ContactsBlockView = connect(mapStateToProps, mapDispatchToProps)(View);

export {
	ContactsBlockView
};
