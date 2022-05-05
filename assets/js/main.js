const hieu_ung_danh_chu = function(the_html_chua_chu, chu, thoiGianDoi) {
    this.the_html_chua_chu = the_html_chua_chu;
    this.chu = chu;
    this.tu = '';
    this.vi_tri_index_chu = 0;
    this.thoiGianDoi = parseInt(thoiGianDoi, 10);
    this.ham_danh_chu();
    this.dang_xoa_chu = false;
}


hieu_ung_danh_chu.prototype.ham_danh_chu = function() {
    
    const index_chu_hien_tai = this.vi_tri_index_chu % this.chu.length;
   
    const chu_hien_tai = this.chu[index_chu_hien_tai]

    
    if(this.dang_xoa_chu) {
       
        this.tu = chu_hien_tai.substring(0, this.tu.length - 1)
    } else {
      
        this.tu = chu_hien_tai.substring(0, this.tu.length + 1)
    }

   
    this.the_html_chua_chu.innerHTML = `<span class="tu">${this.tu}</span>`

   
    let toc_do_danh_chu = 300;
    if(this.dang_xoa_chu) {
        toc_do_danh_chu = toc_do_danh_chu /2
    }

   
    if(!this.dang_xoa_chu && this.tu === chu_hien_tai) {
        toc_do_danh_chu = this.thoiGianDoi;
        console.log(this.thoiGianDoi)
        this.dang_xoa_chu = true;
    } else if (this.dang_xoa_chu && this.tu === ''){
        this.dang_xoa_chu = false;
        this.vi_tri_index_chu++;
        toc_do_danh_chu = 300
    }

    setTimeout(() => this.ham_danh_chu(), toc_do_danh_chu)
}

document.addEventListener('DOMContentLoaded', chay_ham);

function chay_ham() {
    const the_html_chua_chu = document.querySelector('.danh_chu');
    const chu = JSON.parse(the_html_chua_chu.getAttribute('data-chu'));
    const thoiGianDoi = the_html_chua_chu.getAttribute('data-thoiGianDoi');

   
    new hieu_ung_danh_chu(the_html_chua_chu, chu, thoiGianDoi)
}
	
	var a = new Date();
var b = a.getHours();
if(b >= 6 && b < 11) {
    document.getElementById('content').innerHTML = 'Chào Buổi Sáng ❤️';

    
} else if(b >= 11 && b < 13) {
    document.getElementById('content').innerHTML = 'Ăn Trưa Ngon Miệng ❤️';
} else if(b >= 13 & b < 18) {
    document.getElementById('content').innerHTML = 'Chào buổi chiều ❤️';
    
} else if(b >= 18 & b < 23) {
    document.getElementById('content').innerHTML = 'Chào buổi tối❤️';
  
} else if(b>=3 & b <6) {
		  document.getElementById('content').innerHTML = 'Sáng sớm tốt lành❤️';
		  } else{
        document.getElementById('content').innerHTML = 'Chúc ngủ ngon ❤️';
     
    }



    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

