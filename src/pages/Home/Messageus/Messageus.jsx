import './MessageUs.css'

const Messageus = () => {
    return (
        <div className='message '>
            <div className=" items-center justify-center">
                <div className="flex-col items-center justify-center text-white mx-0 md:mx-0 lg:mx-12">
                    <div className="h-40 w-[70%] md:w-1/2 flex items-center justify-center  text-3xl lg:text-5xl font-bold ">Our apartment facilities</div>

                    <div className="flex">
                        <div className="flex md:flex-row flex-col  justify-around w-full space-y-4 md:space-y-0 h-auto lg:h-60 items-center px-8 space-x-0 md:space-x-2 lg:space-x-20">
                            <div className="h-40 w-[90%]  md:w-1/3 flex items-center  border-2 rounded-lg pl-8 md:pl-2 lg:pl-20" data-aos="fade-down"
                                data-aos-duration="3000">
                                <div className="flex-col space-y-2 items-center px-0 ">
                                    <div className="text-2xl font-medium ">swimming pools</div>
                                    <div className="text-2xl font-medium">Beachfront</div>
                                    <div className="text-2xl font-medium">Free parking</div>
                                </div>
                            </div>
                            <div className="h-40 w-[90%]  md:w-1/3 flex items-center border-2 rounded-lg pl-8 md:pl-2 lg:pl-20" data-aos="fade-down"
                                data-aos-duration="3000">
                                <div className="flex-col space-y-2 items-center px-0 ">
                                    <div className="text-2xl font-medium ">Air conditioning</div>
                                    <div className="text-2xl font-medium">Heating</div>
                                    <div className="text-2xl font-medium">Play Grounds</div>
                                </div>
                            </div>
                            <div className="h-40 w-[90%]  md:w-1/3 flex items-center border-2 rounded-lg pl-8 md:pl-2 lg:pl-20" data-aos="fade-down"
                                data-aos-duration="3000">
                                <div className="flex-col space-y-2 items-center px-0 ">
                                    <div className="text-2xl font-medium ">Free WiFi</div>
                                    <div className="text-2xl font-medium">Lift, scelator</div>
                                    <div className="text-2xl font-medium">Laundry</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex pb-24 mt-4">
                        <div className="flex md:flex-row flex-col  justify-around w-full space-y-4 md:space-y-0 h-auto lg:h-60 items-center px-8 space-x-0 md:space-x-2 lg:space-x-20">
                            <div className="h-40 w-[90%]  md:w-1/3 flex items-center  border-2 rounded-lg pl-8 md:pl-2 lg:pl-20" data-aos="fade-down"
                                data-aos-duration="3000">
                                <div className="flex-col space-y-2 items-center px-0 ">
                                    <div className="text-2xl font-medium ">School</div>
                                    <div className="text-2xl font-medium">Collage</div>
                                    <div className="text-2xl font-medium">Child Care </div>
                                </div>
                            </div>
                            <div className="h-40 w-[90%]  md:w-1/3 flex items-center  border-2 rounded-lg pl-8 md:pl-2 lg:pl-20" data-aos="fade-down"
                                data-aos-duration="3000">
                                <div className="flex-col space-y-2 items-center px-0 ">
                                    <div className="text-2xl font-medium ">Bauty Parlour</div>
                                    <div className="text-2xl font-medium">Shop</div>
                                    <div className="text-2xl font-medium">Garden</div>
                                </div>
                            </div>
                            <div className="h-40 w-[90%]  md:w-1/3 flex items-center  border-2 rounded-lg pl-8 md:pl-2 lg:pl-20" data-aos="fade-down"
                                data-aos-duration="3000">
                                <div className="flex-col space-y-2 items-center px-0 ">
                                    <div className="text-2xl font-medium ">Generator </div>
                                    <div className="text-2xl font-medium">IPS system</div>
                                    <div className="text-2xl font-medium">Internet Line</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <script src="https://cdn.tailwindcss.com"></script>

        </div>
    );
};

export default Messageus;