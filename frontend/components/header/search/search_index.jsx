import React from "react";

class SearchIndex extends React.Component{

  render(){
      return(<div>
        <div className="search">
          <input type="text" className="search-input">
          </input>
        </div>
        <div>
          <button className="search-button">Search</button>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }

}

export default SearchIndex;