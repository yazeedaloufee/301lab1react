import React from "react";

class HornedBeasts extends React.Component {
    render() {
        console.log(this.props.imageUrl);
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt='' title=''></img>
                <p>{this.props.description}</p>
            </>
        )

    }
}

export default HornedBeasts;