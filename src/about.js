function createAbout() {
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');

    //removing existin DOM elements
    if (content.lastElementChild != footer) {
        content.removeChild(content.lastElementChild);
    };

    //creating about box
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);

    //creating about content
    const aboutHeader = document.createElement('h2');
    aboutHeader.innerHTML = "Brisbane's Best Ramen 🍜";
    aboutContainer.appendChild(aboutHeader);

    const aboutImg = document.createElement('img');
    aboutImg.src = 'https://i.pinimg.com/originals/ce/a4/99/cea499dd897b81cf2773a47d9d1500fa.jpg';
    aboutContainer.appendChild(aboutImg);

    const aboutPara = document.createElement('h5');
    aboutPara.innerHTML = "Welcome👋 We believe happiness is a warm bowl of a ramen and a beer with friends. Come join us sometime.";
    aboutContainer.appendChild(aboutPara);
};

export default createAbout;