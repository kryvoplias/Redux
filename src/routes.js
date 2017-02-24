import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import UpdateCoursePage from './components/course/UpdateCoursePage'; // eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={UpdateCoursePage} />
        <Route path="course/:id" component={UpdateCoursePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);