import React from 'react'

const FireStaff = () => {
  return (
    
<main>
     
     <section className="staff-section">
       <h2 className="fire-staff-heading">Fire Staff</h2>
       <img
         src="/assets/pictures/fire_staff.png"
         alt="Fire Staff"
         className="fire-staff-image"
       />
     </section>

     <aside>
       <h2>Sign Up For News-Letters</h2>
       <form>
         <input type="text" placeholder="Richtofen935@Gmail.Com" />
         <button>Submit</button>
       </form>
       <article>
         <h3>Steps</h3>
         <p>
           <li>Collect Gem through Fire Tunnel</li>
           <li>Fill the candles with souls in Agatha</li>
           <li><em> Decypher the code </em></li>
           <li id="firecode"><strong> 11-5-9-7-6-3-4 </strong></li>
         </p>
       </article>
     </aside>
 
 </main>

  )
}

export default FireStaff