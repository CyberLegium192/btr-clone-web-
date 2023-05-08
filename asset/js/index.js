// NAVBAR CLICKED FUNCTION
const menu = document.querySelector('.bx-menu');
menu.onclick = () =>{
  document.querySelector('.nav-link').classList.toggle('active')
}

// DROPDOWN CLICK NAVBAR
const dropdownBtn = document.querySelector('.dropdown-click')

dropdownBtn.onclick = (e) =>{
  document.querySelector('.dropdown').classList.toggle('active1')
  document.querySelector('.dropdown ul').classList.toggle('active1')
  e.preventDefault()
}




// TABS COMPONENT
const tabs = document.querySelectorAll('.tabs')
const all_content = document.querySelectorAll('.container-tab')
tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) =>{
    tabs.forEach(tab=>{tab.classList.remove('active_tab')});
    tab.classList.add('active_tab')
    
    all_content.forEach(content=>{content.classList.remove('tab_active')});
    all_content[index].classList.add('tab_active')
    e.preventDefault();
    return;
  });
});

const tabs1 = document.querySelectorAll('.tabs1')
const all_content1 = document.querySelectorAll('.container-tab1')
tabs1.forEach((tab1, index) => {
  tab1.addEventListener('click', (e) =>{
    tabs1.forEach(tab1=>{tab1.classList.remove('active_tab1')});
    tab1.classList.add('active_tab1')
    
    all_content1.forEach(content1=>{content1.classList.remove('tab_active1')});
    all_content1[index].classList.add('tab_active1');
    
    e.preventDefault()
  })
})
