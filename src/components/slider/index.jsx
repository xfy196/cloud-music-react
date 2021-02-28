import React from 'react'
import { Carousel } from "antd-mobile"
import { Swipe as SwipeStyle, Before, SliderContainer } from "./style"
export default React.memo(function index(props) {
  const { bannerList } = props
  return (
    <SliderContainer>
      <Before></Before>
      <SwipeStyle>
        {
          bannerList.length && <Carousel
            autoplay={true}
            infinite={true}
            dotActiveStyle={{ backgroundColor: "#d44439" }}
            dotStyle={{ background: "#000", opacity: .2 }}
          >
            {bannerList.map(val => (
              <a
                key={val}
                href="#"
                style={{display: 'inline-block', width: '100%' }}
              >
                <img
                  src={val.imageUrl}
                  alt="推荐"
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </a>
            ))}
          </Carousel>
        }

      </SwipeStyle>
    </SliderContainer>
  )
}
)
