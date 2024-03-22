
// nút tăng
document.querySelector('.input-group-prepend').addEventListener('click', function() {
    var input = this.parentNode.querySelector('input');
    var currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
});

document.querySelector('.input-group-append').addEventListener('click', function() {
    var input = this.parentNode.querySelector('input');
    input.value = parseInt(input.value, 10) + 1;
});


// nút bấm shopee
// Lấy thẻ div bằng class
const shopee = document.getElementsByClassName("shopee")[0];

// Gán sự kiện click cho thẻ div
shopee.addEventListener("click", load);
function load() {
    window.location.href = "../index.html";
}



// đăng nhập người dùng
let email = JSON.parse(localStorage.getItem("login"))||[];
let relog = document.getElementById("relog");

let user = JSON.parse(localStorage.getItem("users"))||[];
for (let i = 0; i < user.length; i++) {
    if(email==user[i].email){
        document.getElementById("renderUser").innerHTML = 
        `
        <div class="userInfor">
        <div><i class="fa-regular fa-user"></i></div>
            <div>${user[i].userName}</div>
            <div class="userDown">
                <a href="#">Tài khoản của tôi</a>
                <a href="#">Đơn mua</a>
                <a href="#" onclick="logOut()">Đăng xuất</a>
            </div>
        </div>

        `
        ;
        relog.style.display= "none";
    } else{
        relog.style.display= "block";
    }
}

function logOut(){
    localStorage.removeItem("login");
    relog.style.display = "block";
    document.getElementById("renderUser").innerHTML = "";
}
