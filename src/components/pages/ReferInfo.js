import React from 'react';
// 데이터를 가져올때 자바스크립트만 데이터타입설정안해도됨. 다른언어들은 이런것들을 설정해줘야함. 그래서 이걸 데이터값의 데이터타ㅣㅇㅂ을 설정해주는 
import propType from "prop-types";
import {Link} from "react-router-dom";

function ReferInfo({id, title, desc1, desc2 ,element, tag, version, view, use, definition}){
    return(
        <li>
            <Link to={{
                pathname : "refer-detail",
                state:{
                    id,
                    title,
                    desc1,
                    desc2,
                    element,
                    tag,
                    version,
                    view,
                    use,
                    definition,
                },
            }}>
                <span className="alpha">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
            </Link>
        </li>
    )
}

//props를 사용하면 꼭 데이터타입을 이렇게 설정을 해줘야함.
ReferInfo.prototype = {
    id : propType.number.isRequired,
    title : propType.string.isRequired,
    desc1 : propType.string.isRequired,
    desc2 : propType.string.isRequired,
}

export default ReferInfo;