import React from 'react'

const SearchIcon = () => (
    <span className="icon is-small is-left">
        <i className="fas fa-search" />
    </span>
)

const SearchInput = () => (
    <p className="control has-icons-left">
        <SearchIcon />
        <input
            className="input is-rounded"
            type="search"
            placeholder="Search"
        />
    </p>
)

const SearchButton = () => (
    <p className="control">
        <button type="submit" className="button is-rounded">
            Search
        </button>
    </p>
)

const SearchForm = () => (
    <form id="nav-search">
        <div className="field has-addons">
            <SearchInput />
            <SearchButton />
        </div>
    </form>
)

export default SearchForm
