import React from 'react';
import Loading from '../basics/Loading';
import axios from 'axios';
import FooterInfo from '../basics/FooterInfo';
import Title from '../basics/Title';
import Header from '../layout/Header';
import Layout from '../layout/Layout';

function PortInfo({link, image, title, category}){
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

class Portfolio extends React.Component{
    state={
        isLoading : true,
        ports : []
    }
    getPorts = async() => {
        const{
            data : {
                data:{ports},
            }
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        this.setState({isLoading : false, ports : ports})
    }

    // mainAnimation = () => {
    //     gsap.to(".wrap", {duration:0.3, y:0, opacity:1, ease:"power3.out"})
    //     gsap.to(".wrap1", {duration:0.3, y:0, opacity:1, ease:"power3.out"})
    //     gsap.to(".wrap2", {duration:0.3, y:0, opacity:1, ease:"power3.out"})
    //     gsap.to(".wrap3", {duration:0.3, y:0, opacity:1, ease:"power3.out"})
    // }
    // gsap에 scorll 하는거 새로 생겼음. scrollTrigger 그대로 써도 작동이 잘됨.

    componentDidMount(){
        setTimeout(() => {
            this.getPorts();
            document.querySelector("body").classList.add("show");
            // 3초뒤에 자연스럽게 애니메이션이 없어지도록.
            //DOM구조 HTML, 리액트는 돔구조인데 버츄얼 돔구조이다. 그래서 컴포넌트화 되어있어서 자바스크립트르 쓸때 그래서 선택자 이런게 안됨. 그래서 함수화 시켜줘야함. 
            this.mainAnimation();
            //이렇게 애니메이션 함수를 만들어놓는다. 콜백함수의 일종으로 


        },3000)
    }
    render(){
        const{isLoading, ports} = this.state;
        return(
            <>
                {isLoading ? (
                    // <Loading color="light"/>
                    <Loading />
                ) : (
                    <>
                        <Header/>
                        <Layout>
                        <section id="portCont">
                            <div className="container">
                                <Title text={["portfolio","book"]}/>
                                <div className="port__cont">
                                    {ports.map((port) => (
                                        <PortInfo
                                        link={port.link}
                                        image={port.image}
                                        title={port.title}
                                        category={port.category}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                        </Layout>
                        <FooterInfo/>
                    </>
                    
                )}

            </>
        )
    }
}

export default Portfolio;