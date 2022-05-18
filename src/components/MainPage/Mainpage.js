import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faUserTie,
  faBox,
  faArrowRightFromBracket,
  faBell,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import hand from "../../images/hand.png";
import male from "../../images/img1.jpg";
import cart from "../../images/cart.jpg";
import { Link, Outlet } from "react-router-dom";


const Mainpage = () => {
  let data = JSON.parse(sessionStorage.getItem("loginData"));
  const [recentSales,setSales] = useState([])


  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/products?_quantity=5&_taxes=12&_categories_type=uuid')
    .then(response => response.json())
    .then(data => setSales(data.data))
}, [])


const slide =()=>{
    let main = document.querySelector('.left-nav')
    let right = document.querySelector('.right-page')
    let button = document.querySelector('.menubutton')

    if(main.style.width == '40%' ){
        main.style.width='0%'
        button.style.display='flex'
        document.body.style.overflow='scroll'
        right.removeEventListener('click',slide)
    }
    else {
        main.style.width='40%'
        button.style.display='none'
        document.body.style.overflow='hidden'
        right.addEventListener('click',slide)
    }
}


  return (
    <div className="homepage">
      <section className="left-nav">
        <p className="tit">
          <span><img src={cart} alt='cart' /></span> Damax Hub
        </p>
        <ul>
          <li onClick={window.innerWidth<800 ?slide:null}>
            <Link to="home">
              {" "}
              <FontAwesomeIcon icon={faHouse} />
              <p>Dashboard</p>
            </Link>
          </li>
          <li onClick={window.innerWidth<800 ?slide:null}>
          <Link to="team">
            {" "}
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p>Team</p>
          </Link>
          </li>
          <li onClick={window.innerWidth<800 ?slide:null}>
          <Link to="client">
            {" "}
            <FontAwesomeIcon icon={faUserTie} />
            <p>Clients</p>
            </Link>
          </li>
          <li onClick={window.innerWidth<800 ?slide:null}>
          <Link to="product">
            {" "}
            <FontAwesomeIcon icon={faBox} />
            <p>Products</p>
            </Link>
          </li>
          <li onClick={window.innerWidth<800 ?slide:null} >
          <Link to="/">
            {" "}
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <p>logout</p>
            </Link>
          </li>
        </ul>
        <div className="check">
          <img src={hand} alt="hand" />
          <p>check on your clients everyday</p>
           <Link to='client'><button>check clients</button></Link>
        </div>
      </section>
      <section className="right-page" >
        <div className="top">
            <div className="menubutton" onClick={slide}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          <span>
            <h2>hello {data.username} </h2>{" "}
            <p>Here you can manage your online store</p>
          </span>
          <input type="search" placeholder="Search"></input>
        </div>
        <Outlet />
      </section>

      <section className="notification">
        <div className="profile">
          {" "}
          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>{" "}
          <span>
            Comrade {data.username}
            <img src={male} alt="male" />{" "}
          </span>
         </div>
         <div className="wallet">
          <div>
            <p>Wallet</p>
            <span>${Math.floor(Math.random() * 2000)}</span>
            <button>Top Up</button>
          </div>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="transactions">
            <h4>Recent Transactions</h4>
            {
               recentSales.map((item,index)=>{             
                 return  <span key={index} className='hor'> <img src={item.image} alt='line'></img><span><h5>{item.tags[0]}</h5><p>May {Math.floor(Math.random()*30)} 2022</p></span> +${item.taxes}</span>
               }) 
            }
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
