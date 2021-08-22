import React from "react";
import Header from "../layout/Header";
import Layout from "../layout/Layout";
import FooterInfo from "../basics/FooterInfo";
import { Link } from "react-router-dom";

// function ReferDetail(props) {
//     console.log(props)
//     return <div>ddd</div>;
// }

class ReferDetail extends React.Component {
    componentDidMount() {
      const { location, history } = this.props;

      if (location.state === undefined) {
        history.push("/reference");
        console.log(history)
      }
    }
    render() {
        const { location } = this.props;
        console.log(location.state);
        
        if (location.state === undefined){
          return <div>잘못된 페이지입니다.</div>
        } else {
          return (
            <div id="wrap">
              <Header />
              <Layout>
                <section id="referCont">
                  <div className="container">
                    <div className="refer__cont">
                      <div className="refer-detail">
                        <h3>{location.state.title}</h3>
                        <p className="desc">{location.state.desc2}</p>
                        <div className="detail-info">
                          <table>
                            <thead>
                              <tr>
                                <th>특징</th>
                                <th>설명</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>요소</th>
                                <td>{location.state.element}</td>
                              </tr>
                              <tr>
                                <th>닫는 태그</th>
                                <td>{location.state.tag}</td>
                              </tr>
                              <tr>
                                <th>버전</th>
                                <td>{location.state.version}</td>
                              </tr>
                              <tr>
                                <th>시각적 표현</th>
                                <td>{location.state.view}</td>
                              </tr>
                              <tr>
                                <th>사용성</th>
                                <td>{location.state.use}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h4>정의(Definition)</h4>
                        <ul className="list">
                          {location.state.definition.map((defer) => (
                            <li key={defer.toString()}>{defer}</li>
                          ))}
                        </ul>
                      </div>
                      <Link className="refer-list" to="/reference">목록보기</Link>
                    </div>
                  </div>
                </section>
              </Layout>
              <FooterInfo />
            </div>
          );
        }
      }
}
export default ReferDetail;

//함수에서는 프로그 클래스에서는 state로 변수를 지정... 콘솔로그로 하나씩 찍어보면서