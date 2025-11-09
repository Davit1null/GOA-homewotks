import React from "react";
function MainVro() {
  const userRole = "Killer";
  const isAvailable = false;
  const isDaytime = true;
  const hasNotification = true;
  const email = "idkSomeoneMaybe@gmail.com";
  const discount = 15;

  return (
    <div>
      <p>{userRole === "Killer" ? "Killer Panel" : "User Dashboard"}</p>
      <p>{isAvailable ? "$49.99" : "Out of stock"}</p>
      <img 
        src={isDaytime ? "/images/sun.png" : "/images/moon.png"} 
        alt={isDaytime ? "Sun" : "Moon"} 
        width="80"
      />
      {hasNotification && <p>New Notification</p>}
      {email && <p>User Email: {email}</p>}
      {discount > 0 && <p>Discount Available!</p>}
    </div>
  );
}

export default MainVro;
