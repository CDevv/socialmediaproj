import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getPost } from '../Service.js';

export class ViewPost extends Component {
  state = {
      id: "",
      title: "Post Title"
  }

  async componentDidMount() {
      console.log(this.props);
      const postId = this.props.match.params.postId;
      //const postId = '6432e08e8e48441600016753'
      getPost(postId).then(p => this.setState({
          id: postId,
          title: p.title
      }));
  }

  render() {
    return (
      <div>
         <Card>
             <CardTitle>{this.state.title}</CardTitle>
         </Card>
      </div>
    );
  }
}
