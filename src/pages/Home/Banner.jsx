
const Banner = () => {
    return (
        // <div>
        //     <div className="carousel w-full ">
        //         <div id="slide1" className="carousel-item relative w-full">
        //             <img
        //                 src="https://i.ibb.co/kVy6xzMM/Banner-1.jpg"
        //                 className="w-full" />
        //             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //                 <a href="#slide4" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full">
        //             <img
        //                 src="https://i.ibb.co/RGMT2HC7/banner-2.webp"
        //                 className="w-full" />
        //             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full">
        //             <img
        //                 src="https://i.ibb.co/XkrdKTc6/banner3.jpg"
        //                 className="w-full" />
        //             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide4" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide4" className="carousel-item relative w-full">
        //             <img
        //                 src="https://i.ibb.co/XkrdKTc6/banner3.jpg"
        //                 className="w-full" />
        //             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //                 <a href="#slide3" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="carousel w-full h-[300px] md:h-[450px] rounded-lg shadow-md mb-10">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/kVy6xzMM/Banner-1.jpg" className="w-full object-cover" alt="Care Tips 1" />
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
                <img src="https://i.ibb.co/RGMT2HC7/banner-2.webp" className="w-full object-cover" alt="Care Tips 2" />
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
                <img src="https://i.ibb.co/XkrdKTc6/banner3.jpg" className="w-full object-cover" alt="Care Tips 3" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#000000b6] to-transparent w-full p-6 md:p-12 text-white">
                    <div className="max-w-md">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">Check Soil Moisture</h2>
                        <p className="text-sm md:text-base">
                            Always touch the soil before watering. Moist soil means wait a bit longer.
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-white text-green-700">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-white text-green-700">❯</a>
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
