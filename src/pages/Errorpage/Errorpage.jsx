
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from "react-icons/fa";

const Errorpage = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="flex-col space-y-4 text-left px-6">
                    <div className="text-7xl font-bold text-violet-700">404</div>
                    <div className="text-stone-500 font-medium">Oops, you still haven t found what you lookng for?</div>
                    <div className="flex space-x-4 items-center justify-start">
                        
                        <Link to={'/'}><button className='btn btn-secondary '>Home</button></Link>
                        <div className='flex'>
                        <FaAngleDoubleLeft className='mt-2 text-xl'></FaAngleDoubleLeft>
                        <div className="text-xl ml-2 font-bold  text-stone-500"> Back to Home Page</div>
                        </div>
                       
                    </div>
                </div>
            </div>



          </div>
    );
};

export default Errorpage;