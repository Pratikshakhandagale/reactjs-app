import React, { useState } from 'react';
import EmployeeList from '../pages/Employeelist'
import EmptyMsg from '../primitive-components/EmptyMsg';

function SearchBar(prop) {
  const [query, setQuery] = useState('');
  // const [items, setItems] = useState(prop.searchItems);

  if (prop.searchItems.length !== 0) {
    // Function to handle the search query
    const handleSearch = (event) => {
      setQuery(event.target.value);
    };


    const filteredItems = prop.searchItems.filter((item) => {
      return item.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.email.toLowerCase().includes(query.toLowerCase())

    });

    console.log(filteredItems)

    return (
      <div>
        <div className="main">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
            />
          </div>
        </div>

        <ul>
          {filteredItems.length ? <EmployeeList items={filteredItems}></EmployeeList> : <EmptyMsg></EmptyMsg>}

        </ul>

      </div>
    );
  }
}

export default SearchBar;
