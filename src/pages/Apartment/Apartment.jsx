
import './Apartment.css'

import ApartmentCard from './ApartmentCard';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useApartment from '../../hooks/useApartment';

const Apartment = () => {

    const { count } = useLoaderData()
    const [itemPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const [products,setProducts]=useState([])
    const [allapartment] = useApartment()
 
    useEffect(()=>{
        fetch(`https://y-rho-livid.vercel.app/apartment?page=${currentPage}&size=${itemPerPage}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[currentPage,itemPerPage])

    
   
    const handleItemsPerpage = e => {
        const val = parseInt(e.target.value)
        setItemPerPage(val)
        setCurrentPage(0)
    }


    const handlePrev = () =>{
        if(currentPage >0){
            setCurrentPage(currentPage-1)
        }
    }
    
    const handleNext = ()=>{
        if(currentPage < pages.length-1){
            setCurrentPage(currentPage+1)
        }
    }
    const numberofPages = Math.ceil(count / itemPerPage)
    const pages = []
    for (let i = 0; i < numberofPages; i++) {
        pages.push(i)
    }
    console.log(pages)
    return (
        <div >
            <div>
                <h2 className='bg-orange-200 py-4 text-center text-pink-400 font-bold text-4xl'>TOTAL AVAILABLE ROOMS : {allapartment.length}  </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 my-8'>
                {
                    products.map(apartment => <ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard>)
                }
            </div>
            <div className='pagination'>
                
                <button onClick={handlePrev}>Prev</button>
                {
                    pages.map(page => <button className={currentPage === page ? 'selected' : ''} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
                }
                <button onClick={handleNext}>Next</button>
                <select className='border-4  p-2  rounded-xl' value={itemPerPage} onChange={handleItemsPerpage}>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
};

export default Apartment;