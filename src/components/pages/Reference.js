import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';

function Reference(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="referCont">
                    <div className="container">
                        <Title text={["Reference", "site"]}/>
                        <div className="refer__cont">
                            <h1>
                                <strong>Reference</strong>
                                <em>SITE</em>
                            </h1>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Reference;