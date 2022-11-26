import React from 'react'

function DetailAdmin() {
  return (
    <div>
        <div class="card border-success mb-3 shadow p-3 mb-5 bg-body rounded" id="detail">
            <div class="card-header bg-transparent border-success">
            <div className="user">
                <img src="https://i.mydramalist.com/eJNje_5f.jpg" alt="" />
                <div className="user-meta">
                    <div className="name">Salsa</div>
                    <div className="time">3 hours ago</div>
                </div>
            </div>
        </div>
             <div class="card-body text-brand text-start">
             <img id= "img-detail" src="https://cdn1-production-images-kly.akamaized.net/K_QoLXta5zvrFge5sTn-mOuleWw=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3010437/original/079120000_1577866352-20200101-Ciliwung-Meluap_-Banjir-Rendam-Kawasan-Rawajati-6.jpg" className="card-img-top" alt="..."/>
                <h3 class="card-title">Success card title</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <i class="fa-solid fa-thumbs-up fa-1x"></i>
            </div>
            <div class="card-footer bg-transparent border-success">
               <div className="form-check form-switch text-start">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                <label className="form-check-label" for="flexSwitchCheckChecked">Show/Hide Threads</label>
                </div>
            </div>
        </div>
                {/* <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                <label className="form-check-label" for="flexSwitchCheckChecked">Show/Hide Threads</label>
                </div> */}
    </div>
  )
}

export default DetailAdmin