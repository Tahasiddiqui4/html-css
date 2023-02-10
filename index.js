document.querySelectorAll('.image-slider img').forEach(images =>{
    image.onclick= () =>{
        var src = images.getAtttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});