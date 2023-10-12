import React from 'react';
import nav from '../assets/images/png/solana-img.png';
import heroimg from '../assets/images/png/hero-section.png';
import cheesburger from '../assets/images/png/chees-burger.png';
import humburger from '../assets/images/png/hamburger.png';
import solanaheader from '../assets/images/png/solana-header-img.png';
import openimg from '../assets/images/png/open-img.png';
const Header = () => {
  return (
      <div>
          <div class="bg-color">
              <nav class="position-fixed bg-color w-100 z-index-2 right-lg-0 w-100-lg">
                  <div class="container pt_11 pb-3">
                      <div class="d-flex align-items-center justify-content-between">
                          <a href=''><img src={nav} alt="navbar-img" /></a>
                              <input type="checkbox" id="menu_box" hidden />
                                  <label for="menu_box" class="checkbtn d-flex align-items-center z-index-1 ">
                                      <span class="line"></span>
                                      <span class="line"></span>
                                      <span class="line"></span>
                                  </label>
                                  <ul class="d-flex align-items-center small_screen ff_poppins fs_18 fw_600 gap_38 pt-3">
                                      <li><a href="" class="text_black">Home</a></li>
                                      <li><a href="" class="text_black">About Us</a></li>
                                      <li><a href="" class="text_black">Tokenomics</a></li>
                                      <li><a href="" class="text_black">Roadmap</a></li>
                                      <li><a href="" class="text_black">Contact</a></li>
                                      <li><a href="" class="button fs_20 fw_500 text-red">Connect Wallet</a>
                                      </li>
                                  </ul>
                              </div>
                      </div>
              </nav>
              <div class="pt_100">
                  <img src={heroimg} alt="herosection img" class="w-100"/>
              </div>
              <div class="background-img w-100 position-relative">
                  <img src={cheesburger} alt="cheese-burger"
                      class=" position-absolute top_50 left_10 d-none d-lg-block" />
                  <img src={humburger} alt="hamburger-img"
                      class=" position-absolute top_7 left_28 d-none d-lg-block" />
                  <img src={cheesburger} alt="cheese-burger"
                      class=" position-absolute top_10 left_70 d-none d-sm-block" />
                  <img src={cheesburger} alt="cheese-burger"
                      class=" position-absolute top_4 left_6 d-none d-sm-block" />
                  <img src={humburger} alt="hamburger-img"
                      class=" position-absolute top_50 left_1 d-none d-sm-block" />
                  <img src={cheesburger} alt="cheese-burger"
                      class=" position-absolute top_50 left_85 d-none d-lg-block" />
                  <img src={humburger} alt="hamburger-img"
                      class=" position-absolute top_62 left_74 d-none d-sm-block" />
                  <div class="container d-flex align-items-center justify-content-center mb-2">
                      <h2 class="ff_poppins fs_36 fw_700 text_black mb-4 mt-5 pt-4">WELCOME TO</h2>
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                      <img src={solanaheader} alt="header-img" class="w-100 max-width-806"/>
                  </div>
                  <div class="d-flex align-items-center justify-content-center transform-translate">
                      <div class="d-fle
                x justify-content-center pt_73">
                          <img src={openimg} alt="open-img" class="w-100 max-width-345"/>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Header
