import React from 'react' ;
import { Switch , Route} from 'react-router-dom';
import About from './About';
import Meetups from './Meetups';
import MeetupDetails from './MeetupDetails'
import AddMeetup from './Addmeetup' ;
import EditMeetup from './Editmeetup';
 

const Main = () => (
<main>
    <Switch>
        <Route exact path = '/' component={Meetups} />
        <Route exact path = '/About' component={About} />
        <Route exact path = '/details/:id' component={ MeetupDetails} />
        <Route exact path = '/meetups/add' component={AddMeetup} />
        <Route exact path = '/meetups/edit/:id' component={EditMeetup} />
        </Switch>
    </main>
)

export default Main ;