/**
 * Created by hwlv on 2017/6/4.
 */

import React, {Component} from 'react';

class About extends React.Component {
    render() {
        return <h1>This is About page,this.props:<red>{this.props.name}</red></h1>;
    }
}


export default About;