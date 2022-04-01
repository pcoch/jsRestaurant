let menuData = [{
        title: 'Ramen <span>$14</span>',
        image: 'https://vignette.wikia.nocookie.net/f7d023cd-9df6-4df2-b529-4eac12917881/scale-to-width-down/1200',
        description: 'This is very yummy. Oh yes it is.',
    },
    {
        title: 'Tonkotsu Ramen <span>$15</span>',
        image: 'https://i.pinimg.com/originals/15/29/48/152948d88bf1ab5934db9722f0e21d9b.jpg',
        description: 'This is very tasty. Oh yes it is.',
    },
    {
        title: 'Spicy Miso Ramen <span>$17</span>',
        image: 'https://data.whicdn.com/images/333506357/original.jpg',
        description: 'This is very tasty. Oh yes it is.',
    },
    {
        title: 'Shio Ramen <span>$15</span>',
        image: 'https://i.pinimg.com/550x/91/18/37/9118379bce043a434c76ba2094aab827.jpg',
        description: 'This is very tasty. Oh yes it is.',
    },
    {
        title: 'Shoyu Ramen <span>$16</span>',
        image: 'https://i.pinimg.com/originals/c2/4e/cc/c24ecc58033268bb9977d27e2247df68.jpg',
        description: 'This is very tasty. Oh yes it is.',
    },
    {
        title: 'Super Spicy Ramen <span>$18</span>',
        image: 'https://i.pinimg.com/originals/ce/a4/99/cea499dd897b81cf2773a47d9d1500fa.jpg',
        description: 'This is very tasty. Oh yes it is.',
    },
];

function createMenu() {

    const content = document.getElementById('content');
    const footer = document.getElementById('footer');

    //removing existin DOM elements
    if (content.lastElementChild != footer) {
        content.removeChild(content.lastElementChild);
    };

    //creating menu box
    const menu = document.createElement('div');
    menu.classList.add('menu-container');
    content.appendChild(menu);

    //creating menu items
    for (let i = 0; i < menuData.length; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menu.appendChild(menuItem);

        const menuImg = document.createElement('img');
        menuImg.src = `${menuData[i].image}`;
        menuItem.appendChild(menuImg);

        const menuTitle = document.createElement('h3');
        menuTitle.innerHTML = menuData[i].title;
        menuItem.appendChild(menuTitle);

        const menuDesc = document.createElement('h5');
        menuDesc.innerHTML = menuData[i].description;
        menuItem.appendChild(menuDesc);
    };
};

export default createMenu;