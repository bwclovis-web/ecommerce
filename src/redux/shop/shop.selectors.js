import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(selectShop, data => data.collections)

export const selectCollectionsForPreview = createSelector(selectShopData, data => data ? Object.keys(data).map(key => data[key]) : [])

export const selectedCollectionItem = urlparam => {
    return (createSelector(selectShopData, collections => collections ? collections[urlparam] : null))
};