import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListofBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = { shelfChange: false }

  render() {
    const { books, changeShelf } = this.props
    const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                        { type: 'wantToRead',  title: 'Reading Wish List' },
                        { type: 'read', title: ' Already Read'}]

    return (
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) =>  {
          const shelfBooks = books.filter( book => book.shelf === shelf.type)
          return  (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={ shelfBooks }
                  changeShelf={ changeShelf }
                />
              </div>
            </div> )
        })}
      </div>
    )
  }
}

export default ListofBooks
