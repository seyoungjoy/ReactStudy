import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import YoutubeList from '../pages/YoutubeList';
import YoutubeSearch from '../pages/YoutubeSearch';

function Youtube(){
    const [lists, videos] = useState([]);

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        //   템프리리터럴
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyCvJ52pq3tyla1RfS2IOu2psNePZXM-LUc`, requestOptions)
            .then(response => response.json())
            .then(result => videos(result.items))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=bts&key=AIzaSyCvJ52pq3tyla1RfS2IOu2psNePZXM-LUc", requestOptions)
            .then(response => response.json())
            .then(result => videos(result.items))
            .catch(error => console.log('error', error));
    },[]);

    return (
        <div>
            <Header />
            <div className="youtube__cont">
                <YoutubeSearch onSearch={search}/>
                <YoutubeList lists={lists} />
                {/* 받아오고 보내주는거라서 두개 색이 다름. */}
            </div>
        </div>
    );
}

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

export default Youtube;