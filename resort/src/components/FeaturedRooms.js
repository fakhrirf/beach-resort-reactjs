import React, { useContext } from 'react';
import {RoomContext} from '../context';
import Loading from "./Loading";
import Room from "./Room";
import Title from './Title';

const FeaturedRooms = () => {
    const context = useContext(RoomContext);
 
        // access value from context
       let {featuredRooms: rooms, loading } = context;

        rooms = rooms.map(room =>{
            return <Room key={room.id}
                            room={room}/>
        })

        return (
            <section className='featured-rooms'>
                <Title title='featured-rooms'/>

                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
 
                </div>
            </section>
        )
    };

    export default FeaturedRooms;