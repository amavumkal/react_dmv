import React from 'react';
import Spinner from '../Spinner/spinner';
import EditApplication from './EditApplication';

export default function EditApplicationRender(props) {
    let { applicationData } = props;
    if(applicationData.requestPending) {
        return (<Spinner></Spinner>)
    } 
    else if(props.applicationData.requestSuccessful) {
        props.history.push('/applications');
    }
    else if (applicationData.editApplication) {
        return (<EditApplication {...props} />)
    }
    return(<h1>Something Went Wrong :(</h1>)
}
