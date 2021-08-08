import React from "react";

class HornedBeasts extends React.Component {
    render() {
        console.log(this.props.imageUrl);
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src='' alt='' title=''>{this.props.imageUrl}</img>
                <p>{this.props.description}</p>
            </>
        )

    }
}

export default HornedBeasts;