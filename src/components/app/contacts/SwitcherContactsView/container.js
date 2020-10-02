import { connect } from 'react-redux';
import { View } from './view';
import { choicedViewOpened } from 'store/app/actions';

const mapStateToProps = (state) => ({
	tableView: state.app.tableView,
});

const mapDispatchToProps = {
	choicedViewOpened,
};

const SwitcherContactsView = connect(mapStateToProps, mapDispatchToProps)(View);

export {
	SwitcherContactsView
};
