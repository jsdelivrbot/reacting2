import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={e => this.onTextChange(e)} />
      </div>
  }

  onTextChange(event) {
    this.setState({
      term: event.target.value
    })

    this.props.onSearchTermChange(event.target.value)
  }
}

export default SearchBar
