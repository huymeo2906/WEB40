console.log(window);//global this
console.log(document);//đại diện cho cấu trúc nội dung
console.log(document.head);
console.log(document.body);
document.designMode = "on";
document.designMode = "off";
document.title = "Tiêu đề trang web";
//Tìm kiếm nội dung
const headingElement = document.querySelector("h1");
console.log(headingElement);
//chỉnh sửa nội dung
//xử lý các sự kiện
//Inline css
//tên thuộc tính viết dạng camelCase
headingElement.style.backgroundColor = "yellow";
headingElement.style.cssText = `border: 1px solid red;
border-radius : 5px;
padding : 10px;
`;
//<h1 id="heading">Bài tập thực hành DOM</h1>
//<p class="para para-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//<p class="para para-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//<p class="para para-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//<div class="content">
    //<h2 id="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    //<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus sint molestias sit odit quia labore alias! Accusamus magnam aperiam officiis? Laboriosam numquam at eum dicta quos temporibus in aliquid?</p>
//</div>

//Yêu cầu
//Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.getElementById('heading');
heading.style.color = 'red';
heading.textContent = heading.textContent.toUpperCase();
//Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paraElements = document.querySelectorAll('.para');
paraElements.forEach(para => {
  para.style.color = 'blue';
  para.style.fontSize = '20px';
});
//Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const para3 = document.querySelector('.para-3');
const link = document.createElement('a');
link.href = 'https://www.facebook.com';
link.textContent = 'Facebook';
para3.appendChild(link);
//Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.getElementById('title');
title.textContent = 'Đây là thẻ tiêu đề';
// 6. Thay thế thẻ có class="para-3" thành thẻ button có nội dung là “Click me”
const description = document.querySelector('.description');
description.classList.add('text-bold');
const button = document.createElement('button');
button.textContent = 'Click me';
para3.parentNode.replaceChild(button, para3);

// 7. Copy thẻ có class="para-2" và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector('.para-2');
const para2Copy = para2.cloneNode(true);
para2.parentNode.insertBefore(para2Copy, para2.nextSibling);

// 8. Xóa thẻ có class="para-1"
const para1 = document.querySelector('.para-1');
para1.remove();