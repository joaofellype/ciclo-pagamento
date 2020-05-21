import React, { Component } from 'react';
import If from '../operator/if'
import {selectTab} from './tabActions'

import { bindActionCreators} from 'redux'
import { connect} from 'react-redux'
class TabContent extends Component {
    render() {
        const selected  = this.props.tab.selected  === this.props.id
        const visible = this.props.tab.visible[this.props.id]
        console.log("sdskd"+visible)
        return (
            <If test={visible}>
            <div id={this.props.id}
                  className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
            </div>
            </If>
        );
    }
}
const mapStateToProps = state => ({tab:state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TabContent);