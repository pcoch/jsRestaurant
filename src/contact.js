function createContact() {
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');

    //removing existin DOM elements
    if (content.lastElementChild != footer) {
        content.removeChild(content.lastElementChild);
    };

    //creating contact box (same as about)
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    content.appendChild(contactContainer);

    const contactHeader = document.createElement('h2');
    contactHeader.innerHTML = 'Contact Us 👋';
    contactContainer.appendChild(contactHeader);

    const phoneDetails = document.createElement('p');
    phoneDetails.innerHTML = '📞 123 456 789';
    contactContainer.appendChild(phoneDetails);


    const emailDetails = document.createElement('p');
    emailDetails.innerHTML = '📧 hello@ramenbar.com';
    contactContainer.appendChild(emailDetails);

    const contactImg = document.createElement('img');
    contactImg.src = 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/02/Mob-Psycho-100-Arataka.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5';
    contactContainer.appendChild(contactImg);


}

export default createContact;