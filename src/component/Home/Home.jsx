import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
function Home () {
  const [userName, setUserName] = useState('');
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [notNavigate, setNotNavigate] = useState(false);
  const givenName = 'Spelina';

  const matchName = () => {
    if (userName.trim() !== '') {
      if (userName.trim().toLowerCase() === givenName.toLowerCase()) {
        alert('Hi Spelina!');
        setShouldNavigate(true);

      } else {
        alert('Your name does not match the given name.');
        setNotNavigate(true);
        
      }
    } else {
      alert('Please enter a name.');
    }
  };
  const divstyle ={
    backgroundImage:`url(https://th.bing.com/th/id/R.5a8bd8046bf86df6566e4320b30a68b9?rik=PLLFr8CtmDNj4w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2ff%2f1%2f739211-free-smartphone-wallpapers-1080x1920-for-iphone.jpg&ehk=Fk8qelBQLhZA2a7WS1hnAlLSKtWS4WLgW%2b5EnduZq%2bU%3d&risl=&pid=ImgRaw&r=0)`,
    backgroundPosition: 'center', 
  }
  if (shouldNavigate) {
    return <Navigate to="/start"/>;
  }
  if(notNavigate){
    return <Navigate to="/wrongperson"/>; 
  }

  return (
    <div className="  bg-slate-500 min-w-full min-h-screen flex " style={divstyle}>
      <div className=' m-auto self-center text-xl flex flex-col justify-center gap-4'>
          {/* <h1>May I know your name?</h1>
          <div>
          
          
          </div> */}
          <h1 className=' text-2xl text-center text-white'>May i know your name?</h1>
          <div className=' flex flex-col gap-2'>
            <input className=' border-r-8 rounded-2xl text-center py-1'
            type="text"
            placeholder="Enter your first name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={matchName} className=' bg-gray-950 text-white rounded-3xl w-full py-2'>Match Name</button>
          </div>
      </div>
   </div>
  )
}

export default Home
