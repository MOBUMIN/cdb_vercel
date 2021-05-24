import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
	height: '18rem',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class Carousel extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)} />
          <div style={Object.assign({}, styles.slide, styles.slide2)} />
          <div style={Object.assign({}, styles.slide, styles.slide3)} />
        </AutoPlaySwipeableViews>
        <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
      </div>
    );
  }
}

export default Carousel;