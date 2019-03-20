import React, {Component, Fragment} from 'react';
import {Card, CardBody} from 'reactstrap';
import {fetchMessages} from '../../store/actions/messageActions';
import {connect} from 'react-redux';
import PictureThumbnail from '../../components/PictureThumbnail/PictureThumbnail';
import NewMessage from "../NewMessage/NewMessage";

class Messages extends Component {

    componentDidMount () {
        this.props.onFetchMessages()
    }

    render() {
        return (
            <Fragment>
                <h3>THREAD</h3>
                { this.props.messages.map(message => (
                        <Card key={message.id} style={{marginBottom: '10px'}}>
                            <CardBody>
                                <PictureThumbnail image={message.image}/>
                                <span style={{ color: 'green' }}>
                                    {message.author ? message.author  : 'Anonymous'}
                                : </span>
                                <span>{message.title}</span>
                            </CardBody>
                        </Card>
                ))}
                <NewMessage />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages.messages
})

const mapDispatchToProps = dispatch => ({
    onFetchMessages: () => dispatch(fetchMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
