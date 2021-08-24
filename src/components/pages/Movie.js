import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import FooterInfo from '../basics/FooterInfo';
import Title from '../basics/Title';

// function Movie(){
//     const [MovieLists, videos] = useState([]);

//     // const search = (query) => {
//     //     var requestOptions = {
//     //         method: 'GET',
//     //         redirect: 'follow'
//     //     };
//     //     //   템플릿리터럴
//     //     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=52bdaebc337db13698b78f5cff54101b&language=ko-KR&page=1`, requestOptions)
//     //         .then(response => response.json())
//     //         .then(result => videos(result.items))
//     //         .catch(error => console.log('error', error));
//     // }

//     useEffect(() => {
//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//         };
          
//         fetch("https://api.themoviedb.org/3/movie/popular?api_key=52bdaebc337db13698b78f5cff54101b&language=ko-KR&page=1", requestOptions)
//             .then(response => response.json())
//             .then(result => videos(result.items))
//             .catch(error => console.log('error', error));
//     },[]);

//     return (
//         <div>
//             <Header />
//             <Layout>
//                 <section id="aboutCont">
//                     <div className="container">
//                         <Title text={["movie", "site"]}/>
//                         <div className="about-cont">
                            
//                             <MovieList lists={MovieLists} />
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//             <FooterInfo/>
//         </div>
//     );
// }

// function Youtube(){
//     return (
//         <>
//             <Header />
//             <Layout>
//                 <section id="youtubeCont">
//                     <div className="container">
//                         <Title text={["Youtube", "Site"]} />  
//                         <div className="youtube__cont"></div>
//                     </div>
//                 </section>
//             </Layout>
//         </>
//     );
// }


export default Movie;