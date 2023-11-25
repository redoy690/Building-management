
import useApartment from '../../hooks/useApartment';
import ApartmentCard from './ApartmentCard';

const Apartment = () => {
    const [apartment] = useApartment()
    return (
        <div >

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 my-8'>
                {
                    apartment.map(apartment => <ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;