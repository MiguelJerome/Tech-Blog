 
  
  async function buttonDashboard(event) {
    event.preventDefault();
    var headTitle = document.querySelector("#head-title");

    
   
    document.location.replace('/dashboard');
    headTitle.textContent = "Your Dashboard"; 
   
  }
  

  
  document.querySelector("#dashboard").addEventListener("click", buttonDashboard);