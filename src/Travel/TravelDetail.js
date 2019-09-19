import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class TravelDetail extends Component {

            Trip={
                travellerId:'',
                TravelerName:'',
                travelStartDate:'',
                tripId:'',
                Source:'',
                Destination:'',
                travelMonth:'',
                mode:'',
                airways:'',
                travellingWith:'',
                isTicketBooked:'',
                isDomestic:'',
                canTakePackageInd:'',
                isFinalDestination:'',
                ReturnDate:'',
                Itinerary:'',
                OperatedBy:'',
                ServiceObtained:'',
                PreviouslyTravel:'',
            };

    constructor(props) {
        super(props);
        this.state = {
            trip: this.Trip,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleTripChange = this.handleTripChange.bind(this);
    }
    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.trip};
         item[name] = value;

        this.setState({trip:item});
    }


    componentDidMount() {
        this.setState({isLoading: true});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {trip} = this.state;
        this.setState({trips:{trip}})

            await fetch(`http://localhost:8081/tc/createTrip`, {
            method: (trip.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.trips),
        });
        alert(JSON.stringify(this.state.trips))
      // this.props.history.push('http://localhost:8081/tc');
    }


    render(){
        const title=<h1 >{"Traveler Detail"}</h1>;
        const {trip,isLoading}=this.state;


        if (!isLoading) { //need to change based on requirement
            return <p>Loading...</p>;
        }

        return<div>
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    {title}
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="text" name="travellerId" id="travellerId" value={trip.travellerId || ''}
                           onChange={this.handleChange} autoComplete="Email"/>
                </FormGroup>

                 <FormGroup>
                    <Label for="TravelerName">TravelerName</Label>
                    <Input type="text" name="TravelerName" id="TravelerName" value={trip.TravelerName || ''}
                           onChange={this.handleChange} autoComplete="TravelerName"/>
                 </FormGroup>

                   <FormGroup>
                    <Label for="StartDate">StartDate</Label>
                    <Input type="text" name="travelStartDate" id="travelStartDate" value={trip.travelStartDate || ''}
                           onChange={this.handleChange} autoComplete="Date"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="ReturnDate">ReturnDate</Label>
                    <Input type="text" name="ReturnDate" id="ReturnDate" value={trip.ReturnDate || ''}
                           onChange={this.handleChange} autoComplete="ReturnDate"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="Source">Source</Label>
                    <Input type="text" name="Source" id="Source" value={trip.Source || ''}
                           onChange={this.handleChange} autoComplete="Source"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="Destination">Destination</Label>
                    <Input type="text" name="Destination" id="Destination" value={trip.Destination || ''}
                           onChange={this.handleChange} autoComplete="Destination"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="Itinerary">Itinerary</Label>
                    <Input type="text" name="Itinerary" id="Itinerary" value={trip.Itinerary || ''}
                           onChange={this.handleChange} autoComplete="Itinerary"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="OperatedBy">OperatedBy</Label>
                    <Input type="text" name="airways" id="airways" value={trip.airways || ''}
                           onChange={this.handleChange} autoComplete="airways"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="ServiceObtained">ServiceObtained</Label>
                    <Input type="text" name="ServiceObtained" id="ServiceObtained" value={trip.ServiceObtained || ''}
                           onChange={this.handleChange} autoComplete="ServiceObtained"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="PreviouslyTravel">PreviouslyTravel</Label>
                    <Input type="text" name="PreviouslyTravel" id="PreviouslyTravel" value={trip.PreviouslyTravel || ''}
                           onChange={this.handleChange} autoComplete="PreviouslyTravel"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="isTicketBooked">isTicketBooked</Label>
                    <Input type="text" name="isTicketBooked" id="isTicketBooked" value={trip.isTicketBooked || ''}
                           onChange={this.handleChange} autoComplete="isTicketBooked"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="isDomestic">isDomestic</Label>
                    <Input type="text" name="isDomestic" id="isDomestic" value={trip.isDomestic || ''}
                           onChange={this.handleChange} autoComplete="isDomestic"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="canTakePackageInd">canTakePackageInd</Label>
                    <Input type="text" name="canTakePackageInd" id="canTakePackageInd" value={trip.canTakePackageInd || ''}
                           onChange={this.handleChange} autoComplete="canTakePackageInd"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="isFinalDestination">isFinalDestination</Label>
                    <Input type="text" name="isFinalDestination" id="isFinalDestination" value={trip.isFinalDestination || ''}
                           onChange={this.handleChange} autoComplete="isFinalDestination"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="mode">mode</Label>
                    <Input type="text" name="mode" id="mode" value={trip.mode || ''}
                           onChange={this.handleChange} autoComplete="mode"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="travellingWith">travellingWith</Label>
                    <Input type="text" name="travellingWith" id="travellingWith" value={trip.travellingWith || ''}
                           onChange={this.handleChange} autoComplete="travellingWith"/>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/view">view</Button>
                    </FormGroup>
                </Form>

            </Container>

        </div>
    }
}

export default withRouter(TravelDetail);
