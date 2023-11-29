import './MessageUs.css'

const Messageus = () => {
    return (
        <div className='message '>
            <div className="flex items-center justify-center ">
                <div className="flex-col items-center justify-center text-white">
                    <div className="h-40 w-[70%] md:w-1/2 flex items-center justify-center  text-3xl lg:text-5xl font-bold mx-14">Our apartment facalities</div>

                    <div className="flex">

                        <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                            <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4 border-2 rounded-lg">
                                <div className="flex-col space-y-2 items-center px-0 md:px-6">
                                    <div className="text-sm font-medium text-gray-200">Clients</div>
                                    <div className="text-5xl font-bold">15k+</div>
                                    <div className="text-sm font-medium text-gray-200">Tailblocks has more than 15k+ visitors per month.</div>
                                </div>
                            </div>
                            <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center border-2 rounded-lg p-4">
                                <div className="flex-col space-y-2">
                                    <div className="text-sm font-medium text-gray-200">Users</div>
                                    <div className="text-5xl font-bold">1.2M+</div>
                                    <div className="text-sm font-medium text-gray-200">Tailblocks has more than 1.2M+ total users.</div>
                                </div>
                            </div>
                            <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center border-2 rounded-lg p-4">
                                <div className="flex-col space-y-2">
                                    <div className="text-sm font-medium text-gray-200">Engagement</div>
                                    <div className="text-5xl font-bold">69k</div>
                                    <div className="text-sm font-medium text-gray-200">Tailblocks has gained 69k+ users last month.</div>
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