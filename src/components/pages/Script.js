import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';

function Script(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="scriptCont">
                    <div className="container">
                        <Title text={["Script", "site"]}/>
                        <div className="script__cont">
                            <h1>
                                <strong>Script</strong>
                                <em>SITE</em>
                            </h1>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Script;