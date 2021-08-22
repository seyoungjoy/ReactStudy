import React from "react";

function Loader(props) {
  return (
    <div id="loading" className={`loading-active ${props.color}`}> 
    {/* 기존클래스에 클래스추가하는법 */}
      <div className="loading-text">
        <span className="loading-text-words">L</span>
        <span className="loading-text-words">O</span>
        <span className="loading-text-words">A</span>
        <span className="loading-text-words">D</span>
        <span className="loading-text-words">I</span>
        <span className="loading-text-words">N</span>
        <span className="loading-text-words">G</span>
      </div>
    </div>
  );
}

export default Loader;