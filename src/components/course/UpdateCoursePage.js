import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class UpdateCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={[]} />
        );
    }
}

UpdateCoursePage.propTypes = {
    course: PropTypes.object.isRequired
    //errors: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = (state, ownProps) => {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    return { course };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCoursePage);
