import React from 'react';
import DocumentTitle from '../../components/DocumentTitle';
import Navbar from '../../components/Navbar';

function Home() {
    DocumentTitle('EasyEquities Clone - Home');
    return (
        <header>
            <Navbar />
        </header>
    )
}

export default Home;