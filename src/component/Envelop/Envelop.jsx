import React, { useEffect, useState } from 'react'
import './Envelope.css'
const Envelop = () => {
    const [backgroundImage, setBackgroundImage] = useState('https://tse1.mm.bing.net/th/id/OIP.rE0uuA4fzSsOM1O_FoxeQQHaNK?rs=1&pid=ImgDetMain');
    const [change, setChange] = useState(false)

    // useEffect(() => {
    //     // Set the background image dynamically, e.g., from an API or based on a condition
    //     setBackgroundImage('https://static.vecteezy.com/system/resources/previews/004/548/332/original/glossy-happy-birthday-balloons-background-illustration-free-vector.jpg');
    //   }, []);
    
      
      function Changes(){
        const envelope = document.querySelector('.envelope-wrapper');   
                    
                            envelope.classList.toggle('flap');
                            if(change === false){
                              setChange(true);
                              setBackgroundImage('https://tse4.mm.bing.net/th/id/OIP.USOWJoCy_MXmoc5RoOuJBAHaNK?rs=1&pid=ImgDetMain');
                            }else{
                              setChange(false);
                              setTimeout(() => setBackgroundImage('https://tse1.mm.bing.net/th/id/OIP.rE0uuA4fzSsOM1O_FoxeQQHaNK?rs=1&pid=ImgDetMain'), 1000);
                              

                            }
                      //       if (backgroundImage === null) {
                      //   // setBackgroundImage('https://static.vecteezy.com/system/resources/previews/004/548/332/original/glossy-happy-birthday-balloons-background-illustration-free-vector.jpg');
                      //   setBackgroundImage('https://tse4.mm.bing.net/th/id/OIP.USOWJoCy_MXmoc5RoOuJBAHaNK?rs=1&pid=ImgDetMain');
                      //   console.log("Image appeared")
                      // } else {
                      //   setTimeout(() => setBackgroundImage(null), 1000);
                      //   console.log("Image removed")
                      // };
                    
      }
      const divStyle = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'backgroundImage 2s ease-in-out 0.5s', 
      };
  return (
    <div style={divStyle} className=' body m-0 p-0 box-border bg-emerald-900 flex align-middle justify-center w-screen h-screen'>
    <div className='container h-screen grid content-center justify-center'>
        <div className=' envelope-wrapper bg-slate-100 content-center'>
            <div className=' envelope relative'onClick={()=>Changes()}>
                <div className=' letter'>
                    <div className=' text'><strong>Dear User</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto sit alias quidem necessitatibus illo officia temporibus iusto labore pariatur quibusdam minima, excepturi repudiandae possimus, saepe corrupti sed molestiae. Architecto!</p></div>
                </div>
            </div>
            <div className=' heart' onClick={()=>Changes()}>

            </div>
        </div>
    </div></div>
    
  )
}   

export default Envelop
