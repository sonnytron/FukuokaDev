import React, { Component } from "react";

class Article extends Component {
    render() {
        return(
            <div className="article">
                <div className="articleTitle">
                    <div className="articleTitleInner">
                        <img width={75} height={75} src={this.props.imageName} />
                        <h2>{this.props.articleTitle}</h2>
                    </div>
                </div>
                <div className="articleContent">
                    <p>{this.props.articleContent}</p>
                </div>
            </div>
        );
    }
}

export default Article