import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getPost } from '../Service.js';

export function PostData() {
    const { postId } = useParams();
    let postTitle = "";
    let text = "";
    getPost(postId).then(p => {
        postTitle = p.title
    })
    //console.log(postData);
    return (
        <div>
            <Card>
                <CardTitle>{postTitle}</CardTitle>
                <CardText>
                    {text}
                </CardText>
                <CardText>{postId}</CardText>
            </Card>
        </div>
    );
}

