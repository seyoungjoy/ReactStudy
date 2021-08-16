import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';
import FooterInfo from '../basics/FooterInfo';

function Port({link, image, title, category}){
    return(
        <div className="port__item">
            <figure className="port__item__img">
                <a href={link}>
                    <img src={image} alt={title} />
                </a>
            </figure>
            <div className="port__item__txt">
                <h2>{title}</h2>
                <p>{category}</p>
            </div>
        </div>
    )
}

const portfolioInfo = [
    {
        id: "1",
        link: "https://webstoryboy.github.io/portfolio/port2/",
        image: "../img/port01.jpg",
        title: "PORTFOLIO HWANG1",
        category: "PORTFOLIO",
        rating: 5,
    },
    {
        id: "2",
        link: "https://webstoryboy.github.io/portfolio/port1/",
        image: "../img/port02.jpg",
        title: "PORTFOLIO HWANG2",
        category: "PORTFOLIO",
        rating: 4.9,
    },
    {
        id: "3",
        link: "https://webstoryboy.github.io/portfolio/port3/pf03.html",
        image: "../img/port03.jpg",
        title: "PORTFOLIO HWANG3",
        category: "PORTFOLIO",
        rating: 5,
    },
    {
        id: "4",
        link: "https://webstoryboy.github.io/portfolio/port4/index4.html",
        image: "../img/port04.jpg",
        title: "PORTFOLIO HWANG4",
        category: "PORTFOLIO",
        rating: 5,
    },
    {
        id: "5",
        link: "https://webstoryboy.github.io/portfolio/port5/indexs/main.html",
        image: "../img/port01.jpg",
        title: "PORTFOLIO HWANG5",
        category: "PORTFOLIO",
        rating: 4.9,
    },
    {
        id: "6",
        link: "https://webstoryboy.github.io/portfolio/port6/port05.html",
        image: "../img/port02.jpg",
        title: "PORTFOLIO HWANG6",
        category: "PORTFOLIO",
        rating: 4.9,
    },
    {
        id: "7",
        link: "https://webstoryboy.github.io/portfolio/port7/",
        image: "../img/port03.jpg",
        title: "PORTFOLIO HWANG7",
        category: "PORTFOLIO",
        rating: 4.9,
    },
    {
        id: "8",
        link: "https://webstoryboy.github.io/portfolio/port8/index4.html",
        image: "../img/port04.jpg",
        title: "PORTFOLIO HWANG8",
        category: "PORTFOLIO",
        rating: 4.9,
    },
    {
        id: "9",
        link: "https://webstoryboy.github.io/portfolio/port9/index5.html",
        image: "../img/port01.jpg",
        title: "PORTFOLIO HWANG9",
        category: "PORTFOLIO",
        rating: 4.9,
    },
    {
        id: "10",
        link: "https://webstoryboy.github.io/portfolio/port10/portfolio/index.html",
        image: "../img/port02.jpg",
        title: "PORTFOLIO HWANG10",
        category: "PORTFOLIO",
        rating: 4.9,
    },
  ];

function Portfolio(){
    return (
        <>
            <Header/>
            <Layout>
                <section id="portCont">
                    <div className="container">
                            <Title text={["portfolio", "site"]}/>
                            {/* title.js로 값을 보낸ㄴ다... */}
                        <div className="port__cont">
                            {portfolioInfo.map((info)=>(
                                <Port 
                                    link={info.link}
                                    image={info.image}
                                    title={info.title}
                                    category={info.category}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
            <FooterInfo/>
        </>
    );
}

export default Portfolio;