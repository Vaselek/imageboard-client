import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';

class MessageForm extends Component {
    state = {
        title: '',
        author: '',
        image: ''
    }

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData);
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    fileChangeHandler = event => {
        this.setState( {
            [event.target.name]: event.target.files[0]
        })
    }

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <FormGroup row>
                    <Label sm={2} for='title'>Message</Label>
                    <Col sm={10}>
                        <Input
                            type='textarea'
                            name='title' id='title'
                            placeholder='Enter message'
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for='author'>Author</Label>
                    <Col sm={10}>
                        <Input
                            type='text'
                            name='author' id='author'
                            placeholder='Enter your name'
                            value={this.state.author}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for='image'>Picture</Label>
                    <Col sm={10}>
                        <Input
                            type='file'
                            name='image' id='image'
                            onChange={this.fileChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type='submit' color='primary'>Send</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default MessageForm;
