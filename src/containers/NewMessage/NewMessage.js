import React, {Component, Fragment} from 'react';
import MessageForm from '../../components/MessageForm/MessageForm';
import {connect} from 'react-redux';
import {createMessage} from '../../store/actions/messageActions';

class NewMessage extends Component {
    createMessage = messageData => {
        this.props.onMessageCreated(messageData)
    }
    render() {
        return (
            <Fragment>
                <h5>Add answer</h5>
                <MessageForm onSubmit={this.createMessage} />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onMessageCreated: messageData => dispatch(createMessage(messageData))
})


export default connect(null, mapDispatchToProps)(NewMessage);
