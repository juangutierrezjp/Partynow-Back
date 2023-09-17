const { Assigned, Organizer, Establishment, Event, Pv, Series, User } = require('../../db');
const { org1, org2, org3, org4} =  require( '../../data/organizer');
const {event1, event2, event3, event4 }= require( '../../data/event');
const { establi1, establi2, establi3, establi4} = require( '../../data/establishment');
const { user1, user2, user3, user4 } = require( '../../data/user');
const { pv1, pv2, pv3, pv4} = require( '../../data/pv');
const {series1, series2, series3, series4} = require( '../../data/series');
const {assigned1, assigned2, assigned3, assigned4} = require( '../../data/assigned');


const HandlerDataUpload = async (req, res)=>{
    try {

        await User.create(user1);
        await User.create(user2);
        await User.create(user3);
        await User.create(user4);
        
        await Organizer.create(org1);
        await Organizer.create(org2);
        await Organizer.create(org3);
        await Organizer.create(org4);

        await Establishment.create(establi1);
        await Establishment.create(establi2);
        await Establishment.create(establi3);
        await Establishment.create(establi4);

        await Pv.create(pv1);
        await Pv.create(pv2);
        await Pv.create(pv3);
        await Pv.create(pv4);

        
        await Event.create(event1);
        await Event.create(event2);
        await Event.create(event3);
        await Event.create(event4);

        await Series.create(series1);
        await Series.create(series2);
        await Series.create(series3);
        await Series.create(series4);

        
        await Assigned.create(assigned1); 
        await Assigned.create(assigned2); 
        await Assigned.create(assigned3); 
        await Assigned.create(assigned4); 


        res.status(200).json({
            message: 'la base de datos se cargó correctamente',
            user: 4,
            organizer: 4,
            establishment: 4,
            pv: 4,
            event: 4,
            series: 4,
            assigned: 4
        })

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = HandlerDataUpload;