import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
           return (
               <li
                   key={book.title}
                   onClick={() => this.props.selectBook(book)}
                   className="list-group-item">{book.title}</li>
           );
        });
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//Anything returned from this func will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//instantly re-renders if state changes
function mapStateToProps(state){
    //Whatever is returned will show up as props inside BookList
    return {
        books: state.books
    };
}

//Promote BookList from a component to a container - it needs to know about
//this new dispatch method, selectBook. Make it avail as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);