import React from 'react'
import solsnafooter from '../assets/images/png/solana-footerimg.png';
import discord from '../assets/images/png/discord.png';
import twitter from '../assets/images/png/twittwe-img.png';

const Accordiansection = () => {
  return (
    <div>
          <div class="background-light-yellow min-vh-100">
              <div class="container pb_44">
                  <div class="row justify-content-center">
                      <div class="col-lg-8 col-12">
                          <div class="d-flex justify-content-center">
                              <h4 class="fs_48 ff_poppins fw_700 mt-5 pt-2 mb-4">FAQ</h4>
                          </div>
                          <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingOne">
                                      <button class="accordion-button text-black ff_poppins fs_22 fw_600" type="button"
                                          data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                          aria-controls="collapseOne">
                                          Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                      </button>
                                  </h2>
                                  <div id="collapseOne" class="accordion-collapse collapse show text-black"
                                      aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div class="accordion-body ff_poppins fs_18 fw_400">
                                          Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed
                                          at sodales aliquam. Amet fermentum,
                                          lectus nulla tincidunt egestas.
                                      </div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h2 class="accordion-header text-black" id="headingTwo">
                                      <button class="accordion-button collapsed text-black ff_poppins fs_22 fw_600"
                                          type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                          aria-expanded="false" aria-controls="collapseTwo">
                                          Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" class="accordion-collapse collapse text-black"
                                      aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div class="accordion-body ff_poppins fs_18 fw_400">
                                          Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed
                                          at sodales aliquam. Amet fermentum,
                                          lectus nulla tincidunt egestas.
                                      </div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingThree">
                                      <button class="accordion-button collapsed text-black ff_poppins fs_22 fw_600"
                                          type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                          aria-expanded="false" aria-controls="collapseThree">
                                          Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                      </button>
                                  </h2>
                                  <div id="collapseThree" class="accordion-collapse collapse text-black"
                                      aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div class="accordion-body ff_poppins fs_18 fw_400">
                                          Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed
                                          at sodales aliquam. Amet fermentum,
                                          lectus nulla tincidunt egestas.
                                      </div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingFour">
                                      <button class="accordion-button collapsed text-black ff_poppins fs_22 fw_600"
                                          type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                          aria-expanded="false" aria-controls="collapseFour">
                                          Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                      </button>
                                  </h2>
                                  <div id="collapseFour" class="accordion-collapse collapse text-black"
                                      aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                      <div class="accordion-body ff_poppins fs_18 fw_400">
                                          Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed
                                          at sodales aliquam. Amet fermentum,
                                          lectus nulla tincidunt egestas.
                                      </div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                  <h3 class="accordion-header" id="headingFive">
                                      <button class="accordion-button collapsed text-black ff_poppins fs_22 fw_600"
                                          type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                          aria-expanded="false" aria-controls="collapseFive">
                                          Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                      </button>
                                  </h3>
                                  <div id="collapseFive" class="accordion-collapse collapse text-black"
                                      aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                      <div class="accordion-body ff_poppins fs_18 fw_400">
                                          Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed
                                          at sodales aliquam. Amet fermentum,
                                          lectus nulla tincidunt egestas.
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="d-flex justify-content-center mb-4 mt-5 pt-3">
                              <img src={solsnafooter} alt="logo-2-img" class="w-100 max-width-524" />
                          </div>
                          <div class="d-flex justify-content-center mb-5 pb-1 w-100">
                              <img src={discord} alt="discord-img" class="mr_46 max-width_71 w-100" />
                              <img src={twitter} alt="twitter-img" class="max-width_71 w-100" />
                          </div>
                          <div class="d-flex justify-content-center">
                              <p class="ff_poppins fs_18 fw_400">@Copyright 2021</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Accordiansection
