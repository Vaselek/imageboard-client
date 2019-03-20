import axios from '../../axios-api';

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';


export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const createMessageSuccess = () => ({type: CREATE_MESSAGE_SUCCESS});

export const fetchMessages = () => {
    return dispatch => {
        return axios.get('./messages').then(
            response => dispatch(fetchMessagesSuccess(response.data))
        )
    }
}

export const createMessage = (messageData) => {
    return dispatch => {
        return axios.post('./messages', messageData).then(
            () => dispatch(createMessageSuccess())
        )
    }
}