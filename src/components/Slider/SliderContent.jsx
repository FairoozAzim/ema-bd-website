
const SliderContent = ({activeIndex, sliderImage}) => {
    return (

        <section>
            {
            sliderImage.map((slide, index)=> (
                <div
                key={index}
                className= {index === activeIndex ? "slides-active" : "inactive"}
                >
                <img className='slide-image' src={slide.url}></img>
                </div>
            ))}

        </section>
    );
};

export default SliderContent;