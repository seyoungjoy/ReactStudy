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

function Info({text}){
    return(
        <div>{text}</div>
    )
}

const textInfo = [
    {text1 = "WE PROVIDE"},
    {text2 = "VISUAL CODING"},
    {text3 = "SOLUTIONS"},
    {text4 = "FOR YOU WEBS"}
]

function Main(){
    return(
        <div id="wrap">
            <Header/>
            <section id="mainCont">
               <div className="main__cont">
                   {textInfo.map((el) => (
                       <Info text={el.text}/>
                   ))}
               </div>
            </section>
            <Footer/>

        </div>
    )
}

// 함수를 클래스로 바꾸는 작업을 잘하는것이중요
export default Main;