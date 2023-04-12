import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { getData } from '../Service.js';
import { useNavigate } from 'react-router-dom';

function PostCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <CardBody>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardText>
                    {props.text}
                </CardText>
                <Button color="primary" onClick={useNavigate(`/post/${props._id}`)}>See post</Button>
            </CardBody>
        </Card>
    );
}

export class Feed extends Component {
    state = {
        posts: [
            
        ]
    };

    componentDidMount() {
        getData().then(posts => this.setState({posts}));
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                direction: 'column'
            }}>
                {this.state.posts.map(p => 
                    <PostCard title={p.title} text={p.text}></PostCard>
                )}
            </div>
        );
    }
}
