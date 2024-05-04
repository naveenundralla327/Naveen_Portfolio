let openNavbar = document.getElementById("openNav");
let closeNavbar = document.getElementById("closeNav");
let sidebarList = document.getElementById("sidebarList");

let autoTyped = document.querySelector(".auto-type");
console.log(autoTyped.textContent);

openNavbar.addEventListener('click', ()=>{
closeNavbar.classList.toggle("display");
openNavbar.classList.toggle("display");
sidebarList.classList.toggle("display");

})
closeNavbar.addEventListener('click', ()=>{
    closeNavbar.classList.toggle("display");
    openNavbar.classList.toggle("display");
    sidebarList.classList.toggle("display");
    
})
const sidebarListItems = document.querySelector('.sidebar-list-items');
sidebarListItems.addEventListener("click", () => {
    closeNavbar.classList.toggle("display");
    openNavbar.classList.toggle("display");
    sidebarList.classList.toggle("display");
})

let typed = new Typed(autoTyped, {
        strings: ['Backend Developer', 'MERN Full Stack Developer'],
        typeSpeed: 80,
        backSpeed:50,
        loop:true
});
const containers = document.querySelectorAll('.college-container');

containers.forEach( container =>{


container.addEventListener('mousemove', (e) => {
    const boundingRect = container.getBoundingClientRect();
    const containerCenterX = boundingRect.left + boundingRect.width / 2;
    const containerCenterY = boundingRect.top + boundingRect.height / 2;
    
    // Calculate the angle of rotation based on cursor position
    const angleX = (e.clientY - containerCenterY) / 50;
    const angleY = (e.clientX - containerCenterX) / 50;
    
    // Apply the rotation to the container
    container.style.transform = `perspective(400px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
});

container.addEventListener('mouseleave', () => {
    // Reset the container's rotation when the cursor leaves
    container.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
});

})

