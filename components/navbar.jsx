import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    // <nav class="navbar fixed-top navbar-light bg-light "  style={{ height: 90 }}>
    //   <div class="container-fluid">
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <button
    //           class="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarNavDropdown"
    //           aria-controls="navbarNavDropdown"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span class="navbar-toggler-icon"></span>
    //         </button>
    //       <div class="container-fluid">
    //         <a class="navbar-brand" href="#">

    //         </a>

    //         <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //           <ul class="navbar-nav">
    //             <li class="nav-item">
    //               <a class="nav-link active" aria-current="page" href="#">
    //                 Home
    //               </a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link" href="#">
    //                 Features
    //               </a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link" href="#">
    //                 Pricing
    //               </a>
    //             </li>
    //             <li class="nav-item dropdown">
    //               <a
    //                 class="nav-link dropdown-toggle"
    //                 href="#"
    //                 id="navbarDropdownMenuLink"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 Dropdown link
    //               </a>
    //               <ul
    //                 class="dropdown-menu"
    //                 aria-labelledby="navbarDropdownMenuLink"
    //               >
    //                 <li>
    //                   <a class="dropdown-item" href="#">
    //                     Action
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a class="dropdown-item" href="#">
    //                     Another action
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a class="dropdown-item" href="#">
    //                     Something else here
    //                   </a>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>{" "}
    //   </div>
    // </nav>

    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="index.html"
        class="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <div className="">
        <Image class="img-fluid" src="/codingtowers.jpg" alt="" width={125} height={50} />
        </div>
        {/* <h2 class="m-0 text-primary">
          <i class="fa fa-book me-3"></i>CODING
          <span className="text-danger">TOWERS</span>
        </h2> */}
      </a>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0 py-8">
          <a href="index.html" class="nav-item nav-link text-lg">
            <h5>COURSES</h5>
          </a>
          <a href="about.html" class="nav-item nav-link">
            <h5>CODE COMPILERS</h5>
          </a>
          <a href="courses.html" class="nav-item nav-link">
            <h5>CAREER SUPPORT</h5>
          </a>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <h5>TEAM</h5>
            </a>
            <div class="dropdown-menu fade-down m-0">
              <a href="team.html" class="dropdown-item">
                <h5>OUR TEAM</h5>
              </a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link">
            <h5>CONTACT</h5>
          </a>
          
          <a href="contact.html" class="nav-item nav-link">
          <button class="btn btn-primary rounded-3" type="submit">
        SIGN IN
        </button>
          </a>
          <a href="contact.html" class="nav-item nav-link">
          <button class="btn btn-primary rounded-3" type="submit">
        SIGN UP
        </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
