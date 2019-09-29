import {Button, Container, FormGroup, Input, Label} from "reactstrap";
import {Link,withRouter} from "react-router-dom";
import React from "react";
import DateTimePicker from "react-datetime-picker";
import imageUrl from '../images/travelimg1.jpg'


class viewTravel extends React.Component{


    viewDetail={
        email:'',
        Source: '',
        Destination:'',
        StartDate:new Date(),

};

    constructor(props){
        super(props);
        this.state={
            viewDetail:this.viewDetail,
            errors: {},
            isfetchUser:false,
          //  fetchUser:[],
        }

        this.handleChange = this.handleChange.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }



    handleDateChange = date => {
      let datestate=this.state.viewDetail;
        datestate.StartDate=date;
        this.setState({
            StartDate:date,
        });
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.viewDetail};
        item[name] = value;
        this.setState({viewDetail:item});
    };


    validateForm() {

        let fields = this.state.viewDetail;
        let errors = {};
        let formIsValid = true;
/*
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }*/

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }
/*
        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }*/

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    async fetchUser(event) {
        event.preventDefault();
        const {viewDetail} = this.state;
        if (this.validateForm()) {
            await fetch(`https://dd-project-c.appspot.com/check`, {
                method: (viewDetail.id) ? 'PUT' : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                },

                body: JSON.stringify(viewDetail),
            }).then((response) => {
                alert(JSON.stringify(response))
                console.log("response", response);
                this.setState({
                    fetchUser: response.data,
                    isfetchUser:true,
                });
                console.log("fetchUser", this.state.fetchUser);
            })
                .catch((error) => {
             /*       let stub_User=[];
                    stub_User["travellerId"]="ashwin";
                    alert(JSON.stringify(this.state.isfetchUser))
                    this.setState({
                        fetchUser:stub_User,
                    });
                    this.setState({
                        fetchUser:stub_User,
                        isfetchUser:true,
                    });*/
                    console.log(JSON.stringify(this.state.fetchUser));
                    console.log(error);
                });
          //  this.props.history.push("/home");

        }
    };

    render(){
        const {viewDetail} = this.state;
        const isfetchUser=this.state.isfetchUser;

        const ViewDetails=<h1>View Details</h1>
        if (!isfetchUser){
        return<div style={{backgroundImage: `url(${imageUrl})` }}>


            <Container style={{fontWeight: 'bold'}}>
                {ViewDetails}
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="email" value={viewDetail.email || ''}
                           onChange={this.handleChange} autoComplete="email"/>
                    <div className="alert-danger">{this.state.errors.email}</div>
                </FormGroup>
                <FormGroup>
                    <Label for="Source">Source</Label>
                    <Input type="text" name="Source" id="Source" value={viewDetail.Source || ''}
                           onChange={this.handleChange} autoComplete="Source" maxLength={3}/>
                </FormGroup>
                <FormGroup>
                    <Label for="Destination">Destination</Label>
                    <Input type="text" name="Destination" id="Destination" value={viewDetail.Destination || ''}
                           onChange={this.handleChange} autoComplete="Destination" maxLength={3}/>
                </FormGroup>
                <FormGroup>
                    <Label for="StartDate">StartDate</Label>
                    <DateTimePicker name="StartDate" id="StartDate" selected={this.state.StartDate}
                                    value={this.state.viewDetail.StartDate || ''}
                                    onChange={this.handleDateChange} autoComplete="StartDate"/>
                </FormGroup>

                <FormGroup>
                    <Button color="primary" tag={Link} to="/view" id="view" onClick={this.fetchUser}>View</Button>{' '}
                </FormGroup>

            </Container>


        </div> } if (isfetchUser){

            const elements=this.state.fetchUser;
            alert(JSON.stringify(elements));
            return(
                <div>
                    <Label for="Email">Email</Label>{elements["travellerId"]}

                </div>
        )}
    }

}

export default withRouter(viewTravel)
