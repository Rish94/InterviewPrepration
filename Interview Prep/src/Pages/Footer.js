import React from 'react'
import Company from "../Images/companies.png"

import '../CSS/Footer.css';

import playstore from '../Images/miniplay.png';
import insta from '../Images/insta.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';
import facebook from '../Images/facebook.png';
import map from '../Images/map.png';
import ios from '../Images/iosdownload.png';


export default function Footer() {


  // const [email,setEmail] = React.useState({});


  // function EmailData(e){

  //   setEmail({
  //     ...email,
  //     [e.target.email]:e.target.value,
  //   })

  // }

  // const InputEmail = async (e)=> {
  //   e.preventDefault();
  //   let res = await fetch('http://localhost:8080/subscribers',{
  //     method:'POST',
  //     body:JSON.stringify(email),
  //     headers:{
  //       'content-type':'application/json'
  //     }
  //   })

  //   //console.log(email.target.value);

  // }




  return (
    <>

      <div id="fotter-up-image">
        <img id="companies" src={Company}></img>
      </div>

      <br></br>
    <footer id="footer-main">

    <div id="footer">
            <div id="marginwala">
                <div id="directions">
                <h3 id="headingfoot">Direction</h3>
                <span id="add">NH 2 Mathura Highway, <br></br>UP 281406 </span><br></br><br></br>
                <img id="directionimg" src={map}></img>
                </div>
                <div id="leftfooter">
                    <div className='footer_contentrightlinks_title'>
                        <h3 id="headingfoot">About Us</h3>
                    </div>
                    <div className='footer_contentrightlinks_list'>
                        <ul>
                            <li id="li" ><a  id="ul" href='https://www.gla.ac.in/'>GLA Web</a></li>
                            <li id="li" ><a  id="ul" href='/contact'>Contact Us</a></li>
                            <li id="li" ><a  id="ul" href='#'>Privacy Policy</a></li>
                            <li id="li" ><a  id="ul" href='#'>Terms & Conditions</a></li>
                            <li id="li" ><a  id="ul" href='https://www.google.com/maps'>Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div id="centrefooter">
                    <h3 id="headingfoot">Explore More</h3>
                    <div className='footer_contentrightlinks_list'>
                        <ul >
                            <li id="li"><a id="ul" href="https://www.w3schools.com/">W3 School</a></li>
                            <li id="li"><a id="ul" href="https://www.interviewbit.com/">Interview Bit</a></li>
                            <li id="li"><a id="ul" href="https://www.javatpoint.com/">JavatPoint</a></li>
                            <li id="li"><a id="ul" href="https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions&source=google&medium=cpc&device=c&keyword=practice%20geeksforgeeks&matchtype=b&campaignid=19552155281&adgroup=145127760237&gad=1&gclid=CjwKCAjw__ihBhADEiwAXEazJnELYnUGPD34sbnJ9vchOvTS1TcO0gDsAiSZUNatyvNLVHfDlg-T_xoC6_AQAvD_BwE">Geeks for Geeks</a></li>
                        </ul>
                    </div>
                </div>
                <div id="rightfooter">

                    <div>
                        <span id="footbutton">Download Our Application</span><br></br><br></br>
                        <a href="https://play.google.com/store/apps?utm_source=apac_med&utm_medium=hasem&utm_content=Feb0221&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-ap-Evergreen-Feb0221-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=Cj0KCQiAveebBhD_ARIsAFaAvrElwkDXns3t26zEydm0q-n-_Vq8qgyHnkQ7wm3OcJkaxxGfw56kTDcaAjd_EALw_wcB&gclsrc=aw.ds"><img id="footplay" src={playstore}></img></a>
                        <a href="https://www.apple.com/in/app-store/"><img id="footplay" src={ios}></img></a>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
    <hr id="hr"></hr>
    <div class="col-auto">
          <div id="subscribe">
          <p class="pt-2">
            <strong>Subscribe Us More Updates: </strong>
          </p>
          <input class="Email" name="email" type="email" placeholder="Enter Email" aria-label="Search" />
          <button class="Submit" type="submit">Submit</button>
          </div>
          <div id="theme">
            <label>Themes :</label>
              <button id="light-yellow"></button>
              <button id="light-green"></button>
              <button id="light-sky"></button>
              <button id="light-red"></button>
          </div>
        </div>
        
        <p id="copyright">
      © 2023 Copyright :<a class="link-my-port" href=""> Rishabh Agarwal (GLA UNIVERSITY, MATHURA)</a>
      </p>
        
      

    </footer>
      

    </>
  )
}



{/* <footer class="bg-dark text-center text-white">

<div class="container p-4 pb-0">

  <section class="">
    <form action="">

      <div class="row d-flex justify-content-center">

        <div class="col-auto">
          <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>



        <div class="col-md-5 col-12">

          <div class="form-outline form-white mb-4">
            <input type="email" id="form5Example29" class="form-control" />
            <label class="form-label" for="form5Example29">Email address</label>
          </div>
        </div>



        <div class="col-auto">

          <button type="submit" class="btn btn-outline-light mb-4">
            Subscribe
          </button>
        </div>

      </div>

    </form>
  </section>

</div>



<div class="text-center p-3" style={"background-color: rgba(0, 0, 0, 0.2);">
  © 2020 Copyright:
  <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>

</footer> */}
