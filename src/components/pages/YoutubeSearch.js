import React, {useRef} from 'react';

const YoutubeSearch = ({onSearch}) => {
    const inputRef = useRef();
    // 유즈이펙트와 같은 리액트 훅이다.

    const resultSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        console.log("onClick")
        resultSearch();
        
    }
    const onKeyPress = () => {
        console.log("onKeyPress");
    }
    return (
        <div className="title">
            <h2>검색하기</h2>
            <input
                ref={inputRef}
                type="search"
                placeholder="검색하시오"
                onKeyPress={onKeyPress}
            />
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    );
};

export default YoutubeSearch;