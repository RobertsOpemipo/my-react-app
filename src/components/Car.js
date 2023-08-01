import React from "react";

class Car extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg" 
                    alt="Mercedes" width="300px" />
                </div>

                <div>
                    <div>
                        <h1>Audi</h1>

                        <p>Luxury Vehicles</p>
                    </div>
                </div>

                {/* <div>
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/12/52/automobile-1834278_1280.jpg" 
                    alt="BMW" width="300px" />
                </div> */}

                {/* <div>
                    <img src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg" 
                    alt="Audi" width="300px" />
                </div> */}

                {/* <div>
                    <img src="https://cdn.pixabay.com/photo/2022/11/14/05/25/road-7590793_1280.jpg" 
                    alt="Toyota" width="300px" />
                </div> */}

            </div>
        )
    }
}

export default Car