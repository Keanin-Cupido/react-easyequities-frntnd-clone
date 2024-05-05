import React from 'react';
import DocumentTitle from '../../components/DocumentTitle';
import Navbar from '../../components/Navbar';

function Home() {
    DocumentTitle('EasyEquities Clone - Home');
    return (
        <header className='w-full'>
            <Navbar />
        </header>
    )
}

export default Home;