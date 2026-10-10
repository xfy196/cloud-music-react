import React, { useEffect, useState } from "react";
import {
  Swipe as SwipeStyle,
  Before,
  SliderContainer,
  SlideTrack,
  SlideItem,
  Dots,
  Dot,
} from "./style";
export default React.memo(function Slider(props) {
  const { bannerList } = props;
  const [index, setIndex] = useState(0);
  const count = bannerList.length;

  useEffect(() => {
    if (count <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(timer);
  }, [count]);

  if (!count) return null;

  return (
    <SliderContainer>
      <Before></Before>
      <SwipeStyle>
        <SlideTrack $index={index}>
          {bannerList.map((val) => (
            <SlideItem key={val.imageUrl || val.encodeId || val.targetId}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img src={val.imageUrl} alt="推荐" />
              </a>
            </SlideItem>
          ))}
        </SlideTrack>
        <Dots>
          {bannerList.map((val, i) => (
            <Dot
              key={val.imageUrl || i}
              $active={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </Dots>
      </SwipeStyle>
    </SliderContainer>
  );
});
