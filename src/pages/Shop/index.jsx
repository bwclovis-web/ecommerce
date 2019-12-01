import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {selectIsShopFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/container';
import CollectionPage from '../Category';
import withSpinner from '../../components/with-spinner';

const CollectionsPageWithSpinner = withSpinner(CollectionPage);
 
class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props
        fetchCollectionsStart();
    }

    render() {
        const {match,isCollectionsLoaded} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route exact path={`${match.path}/:categoryId`} render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded}{...props} />}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsShopFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);