import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropExperiment extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.message}</h3>
            </div>
        )
    }
}

export default PropExperiment;