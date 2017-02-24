import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class Layout extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
};

export default connect(mapStateToProps)(Layout);