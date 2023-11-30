
import { motion } from "framer-motion"
import './Feature.css'
import { useState } from "react";
const Feature = () => {
    const [move, setMove] = useState(true)
    return (
        <div className="featurer">
            <div className="text-center text-3xl mt-20 bg-pink-500 rounded-xl text-white font-bold py-4 mb-8">NEW APARTMENT NEW EXPERIENCE</div>
            <div className='example-container flex'>
                <motion.div animate={{ x: move ? 0 : 665 }} transition={{ type: "tween", duration: 1 }} onHoverStart={() => { setMove(!move) }} ></motion.div>
                {/* <motion.div animate={{x:move ?0:250}} transition={{type:"tween",duration:5}} onClick={()=> {setMove(!move)}} ></motion.div> */}
                {
                    move &&
                    <>
                        <img src="https://i.ibb.co/J7J4njC/2.jpg" className="h-[500px] w-[48%] ml-[4%] mt-[20px] rounded-2xl" alt="" />

                    </>
                }
            </div>
        </div>
    );
};

export default Feature;