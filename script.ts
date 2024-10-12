
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

  // Get references to form elements using their IDs

  
    
    const firstnameElement = document.getElementById('firtsname') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const mobilphonenumberElement = document.getElementById('mobilephonenumber') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;



   if (
    
     firstnameElement &&
      emailElement &&
       mobilphonenumberElement && 
       educationElement && 
       experienceElement && 
       skillsElement 

       ){

    const firstname = firstnameElement.value;
    const email = emailElement.value;
    const mobilephonenumber = mobilphonenumberElement.value;
    const address = addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;


    


    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong> First Name:</strong> ${firstname}</p> 
    <p><strong>Email:</strong> ${email}</p>
     <p><strong> Mobile Phone Number:</strong> ${mobilephonenumber} </p>
     <p><strong>Address:</strong> ${address} </p>
     <h3>Education</h3>
     <p>${education}</p>
    <h3>Experience</h3>
     <p>${experience}</p>
       <h3>Skills</h3>
     <p>${skills}</p>

    `;

    // Display the resume in the output container
    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){

        resumeOutputElement.innerHTML = resumeOutput
        resumeOutputElement.classList.remove("hidden");

        // create container for buttons
       const buttonsContainer = document.createElement("div");
       buttonsContainer.id = "buttonsContainer";
       resumeOutputElement.appendChild(buttonsContainer);

       // Add Download PDF button
     const downloadButton = document.createElement("button");
     downloadButton.textContent = "Download as PDF";
     downloadButton.addEventListener("click" , () => {
      window.print(); // open the print dialog, allowing the user to saver as PDF
     });
      buttonsContainer.appendChild(downloadButton);

      // Add shareable Link button
      const shareLinkButton = document.createElement("button");
      shareLinkButton.textContent = "Copy Shareable Link";
      shareLinkButton.addEventListener("click", async () => {
        try {
          // create a unique shareable link (simulate it in this case)
           const shareableLink = `https://yourdomain.com/resumes/${firstname.replace(
            /\s+/g,
            "_"
      )}_cv.html`;

           // use clipboard API to copy the shareable link
           await navigator.clipboard.writeText(shareableLink);
           alert("shareable link copied to clipboard!");
        } catch (error) {
          console.error("Failed to copy link ", error);
          alert("Failed to copy link to clipboard. please try again.");
        }
      });
      buttonsContainer.appendChild(shareLinkButton); 
   } else {
     console.error("Resume output container not found");
   }

 } else {
    console.error('form elements are missing')
 }

});







          
      
