import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class TravelDetail extends Component {

    defaultTravel={
        Email :'',
        TravelerName:'',
        StartDate:'',
        ReturnDate:'',
        Source:'',
        Destination:'',
        Itinerary:'',
        OperatedBy:'',
        ServiceObtained:'',
        PreviouslyTravel:'',
        isTicketBooked:'',
        isDomestic:'',
        canTakePackageInd:'',
        isFinalDestination:'',
        mode:'',
        travellingWith:'',
        airways:'',
    };


    constructor(props) {
        super(props);
        this.state = {
            item: this.defaultTravel
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    componentDidMount() {
        this.setState({isLoading: true});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch(`http://localhost:8081/tc/createTrip`, {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        alert(JSON.stringify(item))
      // this.props.history.push('http://localhost:8081/tc');
    }

    render(){

        const {item,isLoading}=this.state;

        if (!isLoading) { //need to change based on requirement
            return <p>Loading...</p>;
        }

        return<div>
            <Container>
                <Form onSubmit={this.handleSubmit}>

                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="text" name="Email" id="Email" value={item.Email || ''}
                           onChange={this.handleChange} autoComplete="Email"/>
                </FormGroup>

                 <FormGroup>
                    <Label for="TravelerName">TravelerName</Label>
                    <Input type="text" name="TravelerName" id="TravelerName" value={item.TravelerName || ''}
                           onChange={this.handleChange} autoComplete="TravelerName"/>
                 </FormGroup>

                    <FormGroup>
                    <Label for="StartDate">StartDate</Label>
                    <Input type="text" name="StartDate" id="StartDate" value={item.StartDate || ''}
                           onChange={this.handleChange} autoComplete="StartDate"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="ReturnDate">ReturnDate</Label>
                    <Input type="text" name="ReturnDate" id="ReturnDate" value={item.ReturnDate || ''}
                           onChange={this.handleChange} autoComplete="ReturnDate"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="Source">Source</Label>
                    <Input type="text" name="Source" id="Source" value={item.Source || ''}
                           onChange={this.handleChange} autoComplete="Source"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="Destination">Destination</Label>
                    <Input type="text" name="Destination" id="Destination" value={item.Destination || ''}
                           onChange={this.handleChange} autoComplete="Destination"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="Itinerary">Itinerary</Label>
                    <Input type="text" name="Itinerary" id="Itinerary" value={item.Itinerary || ''}
                           onChange={this.handleChange} autoComplete="Itinerary"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="OperatedBy">OperatedBy</Label>
                    <Input type="text" name="OperatedBy" id="OperatedBy" value={item.OperatedBy || ''}
                           onChange={this.handleChange} autoComplete="OperatedBy"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="ServiceObtained">ServiceObtained</Label>
                    <Input type="text" name="ServiceObtained" id="ServiceObtained" value={item.ServiceObtained || ''}
                           onChange={this.handleChange} autoComplete="ServiceObtained"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="PreviouslyTravel">PreviouslyTravel</Label>
                    <Input type="text" name="PreviouslyTravel" id="PreviouslyTravel" value={item.PreviouslyTravel || ''}
                           onChange={this.handleChange} autoComplete="PreviouslyTravel"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="isTicketBooked">isTicketBooked</Label>
                    <Input type="text" name="isTicketBooked" id="isTicketBooked" value={item.isTicketBooked || ''}
                           onChange={this.handleChange} autoComplete="isTicketBooked"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="isDomestic">isDomestic</Label>
                    <Input type="text" name="isDomestic" id="isDomestic" value={item.isDomestic || ''}
                           onChange={this.handleChange} autoComplete="isDomestic"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="canTakePackageInd">canTakePackageInd</Label>
                    <Input type="text" name="canTakePackageInd" id="canTakePackageInd" value={item.canTakePackageInd || ''}
                           onChange={this.handleChange} autoComplete="canTakePackageInd"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="isFinalDestination">isFinalDestination</Label>
                    <Input type="text" name="isFinalDestination" id="isFinalDestination" value={item.isFinalDestination || ''}
                           onChange={this.handleChange} autoComplete="isFinalDestination"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="mode">mode</Label>
                    <Input type="text" name="mode" id="mode" value={item.mode || ''}
                           onChange={this.handleChange} autoComplete="mode"/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="travellingWith">travellingWith</Label>
                    <Input type="text" name="travellingWith" id="travellingWith" value={item.travellingWith || ''}
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