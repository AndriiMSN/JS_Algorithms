let file = evt.target.files;
let f = file[0];
if (!f.type.match('image.*')) {
    alert("Image only please");
    return false
} else if (f.size > 10000000) {
    alert('Up to 10 MB')
    return false
}
let reader = new FileReader();

reader.onload = (function (theFile) {
    return function (e) {
        // Render thumbnail.
        let currImg = document.createElement('img')
        currImg.className = 'loaded'
        currImg.title = escape(theFile.name)
        currImg.src = URL.createObjectURL(theFile)
        currImg.className = 'dashboard-settings__image-logo'
        let wrapper = imageForm.querySelector('.has-image')
        wrapper.innerText = ""
        wrapper.appendChild(currImg)
        document.querySelector('.header-user__logo').style.background =
            `url(${URL.createObjectURL(theFile)})`
    };
})(f);
// Read in the image file as a data URL.
reader.readAsDataURL(f);
