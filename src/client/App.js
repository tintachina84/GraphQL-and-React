import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Feed from './Feed';
import Chats from './Chats';
import Bar from "./components/bar";
import LoginRegisterForm from './components/loginregister';
import { useCurrentUserQuery } from './apollo/queries/currentUserQuery';
import Loading from './components/loading';
import './components/fontawesome';
import '../../assets/css/style.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwt'));
    const { data, error, loading, refetch } = useCurrentUserQuery();

    if(loading) {
        return <Loading />;
    }

    return (
        <div className="container">
            <Helmet>
                <title>Graphbook - Feed</title>
                <meta name="description" content="Newsfeed of all your friends on Graphbook" />
            </Helmet>
            {loggedIn && (
                <div>
                    <Bar changeLoginState={setLoggedIn} />
                    <Feed />
                    <Chats />
                </div>
            )}
            {!loggedIn && <LoginRegisterForm changeLoginState={setLoggedIn} />}
        </div>
    )
}

export default App