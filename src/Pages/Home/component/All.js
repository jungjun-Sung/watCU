import React, { Component } from 'react';
import CardList from './Card/CardList';
import './Category.scss';

const CARD_WIDTH = 234;

class All extends Component {
  constructor() {
    super();

    this.state = {
      transLateX: 0,
      numArr: [0],
      // slideBtnLeftDisplay: '',
      // slideBtnRightDisplay: '',
    };
  }

  handleSlideLeft = () => {
    const { transLateX } = this.state;

    if (transLateX !== 0) {
      this.setState({
        transLateX: transLateX + CARD_WIDTH * 5,
      });
    }
  };

  handleSlideRight = () => {
    const { transLateX } = this.state;

    if (transLateX > -CARD_WIDTH * 25) {
      this.setState({
        transLateX: transLateX - CARD_WIDTH * 5,
      });
    }
  };

  render() {
    return (
      <div className="categoryContainer">
        <div
          // style={{ display: this.state.slideBtnLeftDisplay }}
          className="slideBtnLeft"
          onClick={this.handleSlideLeft}
        >
          <img
            className="arrowLeft"
            alt="slide_arrow_btn_left.svg"
            src={
              process.env.PUBLIC_URL + 'images/slide/slide_arrow_btn_left.svg'
            }
          />
        </div>
        <div
          // style={{ display: this.state.slideBtnRightDisplay }}
          className="slideBtnRight"
          onClick={this.handleSlideRight}
        >
          <img
            className="arrowRight"
            alt="slide_arrow_btn_right.svg"
            src={
              process.env.PUBLIC_URL + 'images/slide/slide_arrow_btn_right.svg'
            }
          />
        </div>
        <div className="categoryTitle">
          <p>전체 카테고리 순위</p>
        </div>
        <div className="slideContainer">
          <div
            className="pdCardList"
            style={{
              transform: `translateX(${this.state.transLateX}px)`,
            }}
          >
            {this.props.allList &&
              this.props.allList.map(all => {
                return (
                  <CardList
                    key={all.product_id}
                    categoryName={all.category_name}
                    koreanName={all.korean_name}
                    englishName={all.english_name}
                    productId={all.product_id}
                    price={all.price}
                    imageUrl={all.image_url}
                    averageRating={all.average_rating}
                    transLateX={this.state.transLateX}
                    badge={all.badge}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default All;
