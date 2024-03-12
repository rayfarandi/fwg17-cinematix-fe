/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import CardMovie from './CardMovie';

const Slider = ({ data }) => {
  const sliderRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const speed = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - speed;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div
      className="scroll scroll-smooth cursor-pointer mw-global global-px flex gap-16 pt-1 pb-5 overflow-x-auto bg-white home-scrollbar"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      style={{ overflowY: 'hidden' }}
    >
      {data.map((movie, index) => (
        <CardMovie isCardHome={true} key={index} {...movie} />
      ))}
    </div>
  );
};

export default Slider;
