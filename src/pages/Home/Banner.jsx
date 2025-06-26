const Banner = () => {
    return (
        <div className="carousel w-full h-[300px] md:h-[450px] rounded-lg shadow-md mb-10">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/KpggVrd8/ignacio-correia-1-yycyo-MT6g-unsplash.jpghttps://i.ibb.co/kVy6xzMM/Banner-1.jpg" className="w-full object-cover" alt="Care Tips 1" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#000000b6] to-transparent w-full p-6 md:p-12 text-white">
                    <div className="max-w-md">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">Water Smartly</h2>
                        <p className="text-sm md:text-base">
                            Overwatering kills more plants than underwatering. Know your plant's needs!
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-white text-green-700">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-white text-green-700">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/qMbXqypx/mark-raptapolus-l-Xt-VJ6n-P9lc-unsplash.jpg" className="w-full object-cover" alt="Care Tips 2" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#000000b6] to-transparent w-full p-6 md:p-12 text-white">
                    <div className="max-w-md">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">Sunlight Matters</h2>
                        <p className="text-sm md:text-base">
                            Keep your plants near indirect sunlight — direct light might burn them!
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-white text-green-700">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-white text-green-700">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/M5gzBtKb/veronica-reverse-q-Ywy-RF9u-uo-unsplash.jpg" className="w-full object-cover" alt="Care Tips 3" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#000000b6] to-transparent w-full p-6 md:p-12 text-white">
                    <div className="max-w-md">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">Check Soil Moisture</h2>
                        <p className="text-sm md:text-base">
                            Always touch the soil before watering. Moist soil means wait a bit longer.
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-white text-green-700">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-white text-green-700">❯</a>
                </div>
            </div>

            {/* Slider buttons */}
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle bg-white text-green-700">❮</a>
                <a href="#slide2" className="btn btn-circle bg-white text-green-700">❯</a>
            </div> */}
        </div>
    );
};

export default Banner;

