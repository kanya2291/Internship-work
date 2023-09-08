import React from 'react';
import './Styles.css';


function BasicExample(props) {  
  return (
    <div>
      <div className="card" >
        <img id={props.id} src={props.src} className="card-img-top" alt="Paris" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#para" className="btn btn-secondary" data-toggle="collapse">ReadMore</a>
          <p class="collapse" id="para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      {/* <div class="card">
  <img  id={props.id} src={props.srce} className="card-img-top" alt="Bangkok" />
  <div className="card-body">
    <h5 className="card-title">Bangkok</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-secondary">ReadMore</a>
  </div>
</div>
<div class="card">
  <img id={props.id} src={props.srce} className="card-img-top" alt="Malasiya" />
  <div className="card-body">
    <h5 className="card-title">Malasiya</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-secondary">ReadMore</a>
  </div>
</div>
<div class="card">
  <img  id={props.id} src={props.srce} className="card-img-top" alt="indonesia" />
  <div className="card-body">
    <h5 className="card-title">Indonesia</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-secondary">ReadMore</a>
  </div>
</div> */}
    </div>
  );
}

export default BasicExample;