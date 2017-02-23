import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class UpdateCoursePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h1>Update Course</h1>
        );
    }
}

UpdateCoursePage.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCoursePage);
