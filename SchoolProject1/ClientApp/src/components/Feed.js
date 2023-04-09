import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { getData } from '../Service.js';

function PostCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <CardBody>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardText>
                    {props.text}
                </CardText>
                <Button color="primary">Like Button</Button>
            </CardBody>
        </Card>
    );
}

export class Feed extends Component {
    state = {
        posts: [
            {
                title: "Shithead",
                text: "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
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
            }}>
                <PostCard title='Post'></PostCard>
                {this.state.posts.map(p => 
                    <PostCard title={p.title} text={p.text}></PostCard>
                )}
            </div>
        );
    }
}
