import React from 'react';
import DocumentTitle from '../../components/DocumentTitle';

function Home() {
    DocumentTitle('EasyEquities Clone - Home');
    return (
        <header className='w-full'>
            <h1 className='font-bold opacity-45'>Home Page</h1>
        </header>
    )
}

export default Home;