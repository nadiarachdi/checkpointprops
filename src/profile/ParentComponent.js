import React from 'react';
 import ChildComponent from './ChildComponent';




const ParentComponent = () => {
    const handleAlert = (fullName) => alert(`${fullName}`);

    const firstStyle={ background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(217,177,209,0.6702031154258579) 23%, rgba(195,180,216,0.6001751042213761) 47%, rgba(151,187,232,0.7150210425967262) 78%, rgba(148,187,233,0.7458333675266982) 100%)", textAlign:"center",height:"700px"}
    return (
      <div style={firstStyle}>
        <ChildComponent 
          
          fullName="Hi! My name is Nadia RACHDI"
          
          Biographie="I am Nadia RACHDI researcher in hydrogeological sciences"
          
          profession="I am a Geoscience Teacher"
          
          handleAlert={handleAlert}>
            
        <div>
           
        <img  style={{borderRadius: "5%",
  border:"solid 5px ",
  width: "200px",
  height: "200px"}} src='/emoji-femme.png' alt="Nadia"></img>
      </div>
    </ChildComponent >
  </div>
);
}

export default ParentComponent;
