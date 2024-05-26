import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import Card from './card';
import Buttons from './buttons';


function Filter() {
  const [item, setItems] = useState(Data); 
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredItems = item.filter((val) =>
    val.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const menuItems = [];
  for (const item of Data) {
    if (!menuItems.includes(item.category)) {
      menuItems.push(item.category);
    }
  }

  const filterItems = (cat) => setItems(Data.filter((newval) => newval.category === cat));

  return (
    <> 
      <div className='container-fluid'>
        <div className='row'>
          <h1 className='text-center col-12 fw-bold mt-3 mb-5'>Bienvenue dans Pharmaco</h1>
          <div className='col-12 mb-3'>
            <input
               type='text'
               className='container-fluid form-control search-bar'
               
               style={{ width: '50%', height: '40px', fontSize: '16px', borderRadius: '5px', border: '3px solid #ced4da' }}
              placeholder='Rechercher un medicament...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Buttons menuItems={menuItems} filterItems={filterItems} setItems={setItems} />
          <Card item={filteredItems} />
         
        </div>
      </div>
    </>
  );
}

export default Filter;
