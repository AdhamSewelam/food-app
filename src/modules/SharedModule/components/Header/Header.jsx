// eslint-disable-next-line no-unused-vars
import React from "react"
// import headerimg from "../../../../assets/img/header-bg-svg.svg"
// eslint-disable-next-line react/prop-types
export default function Header({title,description,imgUrl}) {
  return <>
  <div className="container-fluid p-2 ps-5 header-container">
<div className="row align-items-center">
  <div className="col-md-8">
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

  </div>
<div className="col-md-4">
  <div className="img text-center">
<img src={imgUrl} alt=""  />
  </div>
</div>
</div>
  </div>
  </>
}

