import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { addData } from '../Service.js';

export class MakePost extends Component {
    state = {
        title: "Post Title",
        text: ""
    };

    changeTitle = (value) => {
        this.setState({ title: value.target.value });
    };

    changeText = (value) => {
        this.setState({ text: value.target.value });
    };

    submitPost = () => {
        addData(this.state.title, this.state.text);
    };

    render() {
        return (
        <div>
            <Form>
                <FormGroup>
                    <Label for='postTitle'>Title</Label>
                    <Input id='titleInput'
                       placeholder='Add a nice title'
                       value={this.state.title}
                       onChange={(t) => this.changeTitle(t)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='postText'>Text</Label>
                    <Input id='textInput'
                       placeholder='Text..'
                       type='textarea'
                       value={this.state.text}
                       onChange={(t) => this.changeText(t)}
                    />
                </FormGroup>
                <Button onClick={() => this.submitPost()}>Submit</Button>
            </Form>
        </div>
        );
    }
}
