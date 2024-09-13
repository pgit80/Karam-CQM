import React from 'react'
import s1 from '../component/img/home-slide.jpg';
import s2 from '../component/img/home-slide-02_02.jpg';
import s3 from '../component/img/home-slide-042028129.jpg';
import s4 from '../component/img/home-slide-02_0.jpg';
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <>
    <div className='row bg-dark text-light p-2'>
        <div className='col-sm-5'>
          <div className='banner-text py-5'>
            <h1>Saving<br/>millions of<br/> <span className=''> lives</span> globally</h1>
            <p>KARAM is a leading global PPE & Fall Protection solutions brand.</p>
            <a className='' to={'/karam.in/'}>Learn More</a>
          </div>
          <div className='banner-gride'>
            <div className='new-product-content'>
              <a className='' to={'/'}>kara online</a>
            </div>
          </div>
          <div className='gride'></div>
          <Link className='btn btn-danger text-light align-right' to={'/'}>News & Events</Link>
        </div>
        <div className='col-sm-6'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={s1} class="d-block w-100" alt="..." />
      <div className='s bg-danger w-50 position-absolute'>Hello1</div>
    </div>
    <div class="carousel-item">
      <img src={s2} class="d-block w-100" alt="..." />
      <div className='s bg-danger w-50 position-absolute'>Hello2</div>
    </div>
    <div class="carousel-item">
      <img src={s3} class="d-block w-100" alt="..." />
      <div className='s bg-danger w-50 position-absolute'>Hello3</div>
    </div>
    <div class="carousel-item">
      <img src={s4} class="d-block w-100" alt="..." />
      <div className='s bg-danger w-50 position-absolute'>Hello3</div>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className='col-sm-1 my-auto'>
            <p  className='fa-brands fs-4 fa-facebook border p-3 rounded-circle'></p><br/>
            <p  className='fa-brands fs-4 fa-instagram border p-3 rounded-circle'></p><br/>
            <p  className='fa-brands fs-4 fa-youtube border p-3 rounded-circle'></p><br/>
            <p  className='fa-brands fs-4 fa-twitter border p-3 rounded-circle'></p><br/>
        </div>
    </div>
    
    </>
  )
}

export default Slider