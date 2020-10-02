//import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => ({
	size: state.app.size,
});

const mapDispatchToProps = {};

const PageContacts = connect(mapStateToProps, mapDispatchToProps)(View);

export { PageContacts };
