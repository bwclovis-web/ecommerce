import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './styles.scss';
import {selectDirectorySelection} from '../../redux/directory/directory.selectors';

import MenuItem from '../MenuItem';
 
class Directory extends Component {

    render() {
        const {sections} = this.props;
        return (
            <div className="directory-menu">
                {sections.map(({id, ...sectionProps}) => (
                    <MenuItem key={id} {...sectionProps}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySelection
  })
 
export default connect(mapStateToProps)(Directory);