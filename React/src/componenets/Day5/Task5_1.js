import React from 'react';
import './styles.css'
function Task5_1(props) {
  if (props.quality >= 10) {
    return (
      <>
        <div class="card mb-3 shadow-lg" id='cardd'>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={props.image} class="img-fluid rounded-start" alt="smartwatch" id="watch_1" />
            </div>
            <div class="col-md-8 " >
              <div class="card-body"  id='boddy'>
                <h3 class="card-title ">{props.name} </h3>
                <p class="card-text fw-light fs-5">{'₹'}{props.pri}</p>
                <p class="card-text text-success fs-4 fw-light">Available</p>
              </div>
            </div>
          </div>
        </div>


      </>
    );
  }
  else if (props.quality <= 10 && props.quality >= 1) {
    return (
      <div class="card mb-3 shadow-lg" id='cardd'>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={props.image} class="img-fluid rounded-start" alt="smartwatch" id="watch_1" />
          </div>
          <div class="col-md-8 ">
            <div class="card-body"  id='boddy'>
              <h3 class="card-title">{props.name} </h3>
              <p class="card-text fw-light fs-5">{'₹'}{props.pri}</p>
              <p class="card-text text-warning fs-4 fw-light">Almost out of stock</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
  else {
    return (
      <div class="card mb-3 shadow-lg" id='cardd'>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={props.image} class="img-fluid rounded-start" alt="smartwatch" id="watch_1" />
          </div>
          <div class="col-md-8 ">
            <div class="card-body "  id='boddy'>
              <h3 class="card-title ">{props.name} </h3>
              <p class="card-text fw-light fs-5">{'₹'}{props.pri}</p>
              <p class="card-text text-danger fs-4 fw-light"> Out of stock</p>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Task5_1;