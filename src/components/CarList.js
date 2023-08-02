import React from 'react'
import Car from './Car';
import cars from './Cars';
// function CarList(){
//     return " Wohoooo lets return multiple cars"
// }
// let cars = ["Mercedes" , "BMW" , "Audi", "Toyota"];
class CarList extends React.Component{
    render() {
        return <div className='grid sm:grid-cols-3 gap-6'>
                {cars.map(function(car) {
                    return <Car {...car}/>
                })}   
            </div>  
    }
}



export default CarList







// id={car.id}
                    // name={car.name}
                    // description={car.description}
                    // productType={car.productType}
                    // imageUrl={car.imageUrl}