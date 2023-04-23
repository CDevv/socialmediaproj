import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardFooter, Tooltip } from 'reactstrap';
import { getPost } from '../Service.js';
import moment from 'moment';

export class ViewPost extends Component {
    state = {
        id: "",
        title: "Post Title",
        text: "Post Text",
        date: Date.now(),
        dateFormatted: "",
        dateFromNow: "",
        tooltipOpen: false,
    }

    async componentDidMount() {
        //const { postId } = this.props.match.params;
        //const postId = '6432e08e8e48441600016753'
        const postId = window.location.href.split('/')[4]
        console.log(postId);
        getPost(postId).then(p => this.setState({
            id: postId,
            title: p.title,
            text: p.text,
            date: p.date,
            dateFormatted: moment(p.date).format("dddd, MMMM Do YYYY, h:mm a"),
            dateFromNow: moment(p.date).fromNow()
        }));
    }

    toggleTooltip = () => {
        this.setState({tooltipOpen: !this.state.tooltipOpen})
    };

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{this.state.title}</CardTitle>
                        <CardText>
                            {this.state.text}
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <p>This was posted <span id="ToolTipExample">{this.state.dateFromNow}</span></p>
                        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="ToolTipExample" toggle={this.toggleTooltip}>
                            {this.state.dateFormatted}
                        </Tooltip>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

