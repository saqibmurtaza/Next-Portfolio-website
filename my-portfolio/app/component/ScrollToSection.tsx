const ScrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
    
  };
  
  export default ScrollToSection;
  