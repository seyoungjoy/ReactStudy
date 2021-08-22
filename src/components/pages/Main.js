import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';


// 함수형 컴퍼넌트 --> 클래스 컴퍼넌트 잠정 --> 리액트 훅
// 컴퍼넌트 + props
// 컴퍼넌트 + props 생략
// 컴퍼넌트 + props + 객체
// 컴퍼넌트 + props + 객체 + map + 반복문을 써야함. 
// 컴퍼넌트 + props + 객체 + map + API + 리덕스

// 클래스 컴퍼넌트

class Main extends React.Component{
    state = {};

    componentDidMount(){

    }
    render(){
        return(
            <div id="wrap">
                <Header />
                <main id="main">
                    <section id="mainCont">
                        <div className="main__cont">
                            <div>We Provide</div>
                            <div>visual coding</div>
                            <div>solutions</div>
                            <div>for you webs</div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

// 함수를 클래스로 바꾸는 작업을 잘하는것이중요
export default Main;