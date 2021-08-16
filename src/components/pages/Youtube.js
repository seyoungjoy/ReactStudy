import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';

function Youtube(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="youtubeCont">
                    <div className="container">
                        <Title text={["Youtube", "site"]}/>
                        <div className="youtube__cont">
                            <h1>
                                <strong>Youtube</strong>
                                <em>SITE</em>
                            </h1>
                        </div>
                    </div>
                </section>
            </Layout>
            
        </>
    );
}

export default Youtube;