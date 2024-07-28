let qrBox = document.getElementById('qrBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let p = document.querySelector("p");

function generateQR() {
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        setTimeout(()=>{
            imgBox.classList.remove("show-img");
        },10000);
        p.innerHTML = "QRCode Created Successfully !!";
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
        p.innerHTML = "Something Went Wrong !!";
    }
}