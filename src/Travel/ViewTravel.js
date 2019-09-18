import {Button, Container, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";

class viewTravel extends React.Component{


    viewDetail={
        email:'',
        Source: '',
        Destination:'',
        StartDate:'',

}

    constructor(props){
        super(props);
        this.state={
            viewDetail:this.viewDetail,
        };
        this.handleChange = this.handleChange.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.viewDetail};
        item[name] = value;
        this.setState({item});
    }

    async fetchUser(event) {
        event.preventDefault();
        const {viewDetail} = this.state;

        await fetch(`http://localhost:8081/tc/findTrip`, {
            method: (viewDetail.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(viewDetail),
        }).then((response) => {
            console.log("response", response);
            this.setState({
                fetchUser: response.data
            });
            console.log("fetchUser", this.state.fetchUser);
        })
            .catch( (error) => {
                console.log(error);
            });
        alert(JSON.stringify(this.state.fetchUser))
         this.props.history.push('/home');
    }

    render(){
        const {viewDetail} = this.state;

        return<div>
            <Container>
                     <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="text" name="Email" id="Email" value={viewDetail.email || ''}
                               onChange={this.handleChange} autoComplete="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Source">Source</Label>
                        <Input type="text" name="Source" id="Source" value={viewDetail.Source || ''}
                               onChange={this.handleChange} autoComplete="Source"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Destination">Destination</Label>
                        <Input type="text" name="Destination" id="Destination" value={viewDetail.Destination || ''}
                               onChange={this.handleChange} autoComplete="Destination"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="StartDate">StartDate</Label>
                        <Input type="text" name="StartDate" id="StartDate" value={viewDetail.StartDate || ''}
                               onChange={this.handleChange} autoComplete="StartDate"/>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" tag={Link} to="/view" onClick={this.fetchUser}>View</Button>{' '}
                    </FormGroup>

            </Container>

        </div>
    }

}

export default viewTravel