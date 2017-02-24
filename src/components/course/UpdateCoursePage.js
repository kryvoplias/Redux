import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class UpdateCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };

        this.saveCourse = this.saveCourse.bind(this);
        this.updateCourseState = this.updateCourseState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course).
            then(() => this.redirect()).
            catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
                onSave={this.saveCourse}
                onChange={this.updateCourseState} />
        );
    }
}

UpdateCoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    authors: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

UpdateCoursePage.contextTypes = {
    router: PropTypes.object.isRequired
};

const getCourseById = (courses, id) => {
    const course = courses.find(course => course.id === id);
    if (course)
        return course;
    return null;
};

const mapStateToProps = (state, ownProps) => {
    const courseId = ownProps.params.id;
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course,
        authors: authorsFormattedForDropdown
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCoursePage);
