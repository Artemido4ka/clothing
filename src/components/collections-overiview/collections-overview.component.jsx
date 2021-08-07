import React from "react";
import './collections-overview.styles.scss';
import CollectionPreviewComponent from "../preview-collection/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreviewComponent key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

// export default connect(mapStateToProps)(CollectionsOverview);
export default connect(mapStateToProps)(CollectionsOverview);