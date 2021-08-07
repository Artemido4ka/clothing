import React from "react";

import './collection.styles.scss';
import {selectCollection} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionPage = ({collection}) => (
    <div className='collection-page'>
        <h2>Collection pahge</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);