import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Redux/Actions/applicationActions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Applications extends React.Component {
  async componentDidMount() {
    this.props.getApplications();
  }

  render() {
    if (this.props.applicationReducer.applications.value == undefined) {
      console.log("undefined bro");
      console.log(this.props.applicationReducer.applications.value);
    } else {
      console.log("defined bro");
      console.log(this.props);
      return (
        <div>
          {/* Customers
          {this.props.contactReducer.contacts.value.map((customer, index) => (
            <div>
              <Card style={{ minWidth: "275px" }} variant="outlined">
                <CardContent>
                  <Typography
                    style={{ fontSize: "14" }}
                    color="textSecondary"
                    gutterBottom
                  >
                    Customer Name
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {customer.fullname}
                  </Typography>
                  <Typography
                    style={{ marginBottom: "12px" }}
                    color="textSecondary"
                  >
                    Customer Email
                  </Typography>
                  <Typography variant="body2" component="p">
                    {customer.emailaddress1}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          ))} */}
        </div>
      );
    }

    return <div>Applications Loading Applications</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Applications);
