import StarRating from 'react-native-star-rating';
import React from "react";
class GeneralStarExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        starCount: 0
        };
    }

    onStarRatingPress(rating) {
        this.setState({
        starCount: rating
        });
    }

    render() {
        return (
        <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={'#FFD439'}
            emptyStarColor ={'#FFD439'}
        />
        );
    }
    }

export default GeneralStarExample