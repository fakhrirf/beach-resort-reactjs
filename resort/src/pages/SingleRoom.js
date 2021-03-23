import React, { Component } from 'react';
import defaultBackground from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';


export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,defaultBackground
        };
    }

    static contextType = RoomContext;

    // componentDidMount () {

    // }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);

        if (!room){
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to='/rooms' className="btn-primary">Rooms</Link>
            </div>
        }
        return (
            <div>
                hello from single room pages {room.name}
            </div>
        )
    }
}
