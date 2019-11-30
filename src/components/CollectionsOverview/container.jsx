import {connect} from 'react-redux';
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect';
import {selectIsShopFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner';
import CollectionsOverview from './index';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsShopFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)


export default CollectionsOverviewContainer;