// import React from 'react'
// import { start } from 'repl';

// const ScrollToSection = (id:string) => {
//   const element = document.getElementById(id);
//   if(element) {
//     element.scrollIntoView({behavior: 'smooth', block: 'start'})
//   }
  
// };

// export default ScrollToSection;

import React from 'react';

const ScrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    console.log(`Scrolling to section with ID: ${id}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.error(`Element with ID ${id} not found.`);
  }
};

export default ScrollToSection;
