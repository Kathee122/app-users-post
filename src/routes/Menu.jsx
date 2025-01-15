import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import UserList from '../components/UserList';
import UserPost from '../components/UserPost';
import NotFound from '../components/NotFound';

export default function Menu() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/posts/:userId" element={<UserPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
