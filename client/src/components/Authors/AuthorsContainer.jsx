import React, { useEffect } from 'react';
import Authors from './Authors'
import { connect } from 'react-redux'
import { getAuthors } from '../../Redux/authors';

const AuthorsContainer = (props) => {
    useEffect(() => {
        props.getAuthors()
    }, [])

    return (
        <div>
            <Authors {...props} />
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        authors: state.authors.authors
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getAuthors: () => {
            dispatch(getAuthors());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthorsContainer)

