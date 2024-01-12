//scroll section active link
let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset =sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id =sec.getAttribute('id');

        if (top >= offset && top<offset+height)
        {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        }
    })
// sticky navbar

/* 
Define: 
    window.onscroll=()=>{...} khi trang được cuộn đoạn mã bên trong sẽ được thực thi
    let header=document.querySelector('.header');  lấy ra đối tượng có class=header
    nếu giá trị scrollY (vị trí cuộn theo chiều dọc của trang) lớn hơn 100, lớp 'sticky'
    sẽ được thêm vào phần tử header; ngược lại, nếu không, lớp 'sticky' sẽ 
    được loại bỏ.
*/

    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100);
}

// swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween:50,// khoảng cách giữa các slide
    loop: true,
    grapCursor:true,// cho phép nhấn chuột và kéo
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // dark light mode
  let darkModeIcon=document.querySelector('#darkMode-icon');
  darkModeIcon.onclick =()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  }