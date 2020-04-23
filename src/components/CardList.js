import React from 'react';
import Card from './Card';

const CardList = ({robotcillos}) => {
//     const cardComponent = robots.map((user,i)=>{
//         // para cada user de robots, haga lo siguiente
//         return (
//         <Card key={i} 
//         id={user.id} 
//         name={user.name} 
//         email={user.email}/>);
//         // is a good practice include a key for each element in the array
//     })
    
    return (
        <div>
            {/* {cardComponent} */}
            {
                robotcillos.map((user,i)=>{
                    // para cada user de robots, haga lo siguiente
                    return (
                        <Card 
                            key={i} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email}

                        />
                    );
                }) 
            }
        </div>
    );
}

export default CardList;