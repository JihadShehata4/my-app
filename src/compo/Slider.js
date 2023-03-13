import './Slider.css';
function Slider () {
return(
    <>
    <div id="carouselExample" className ="carousel slide">
  <div className ="carousel-inner">
    <div className ="carousel-item active">
      <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/14190804/e-commerce-.jpg" className ="d-block w-100" alt="..."/>
    </div>
    <div className ="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/001/220/568/small/golden-shiny-online-shopping-landing-page.jpg" className ="d-block w-100" alt="..."/>
    </div>
    <div className ="carousel-item">
      <img src="https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?s=612x612&w=0&k=20&c=qG_9JB9ll4P5to97_HVxzMqhhzF0Gi1nWM_hNeiotbk=" className ="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Previous</span>
  </button>
  <button className ="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Next</span>
  </button>
</div>
    
    
    </>
);

}
export default Slider;