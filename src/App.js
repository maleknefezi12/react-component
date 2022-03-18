import React from 'react';
import './App.css';
import './style.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

const App = () => ( 
    <div>
      <ProfilePhoto/>
      <FullName/>
      <Address/> 
    </div>
  );
export default App;