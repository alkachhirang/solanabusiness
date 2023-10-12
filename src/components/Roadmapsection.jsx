import React from 'react';
import cheesburger from '../assets/images/png/chees-burger.png';
import humburger from '../assets/images/png/hamburger.png';

const Roadmapsection = () => {
    return (
        <div>
            <div>
                <div class="box overflow-hidden">
                    <img src={cheesburger} alt="cheese-burger"
                        class=" position-absolute top_10 left_10 d-none d-lg-block" />
                    <img src={cheesburger} alt="cheese-burger"
                        class=" position-absolute top_35 left_2 d-none d-lg-block" />
                    <img src={humburger} alt="hamburger-img"
                        class=" position-absolute top_65 left_1 d-none d-lg-block" />
                    <img src={cheesburger} alt="hamburger-img"
                        class=" position-absolute top_50 left_30 d-none d-sm-block" />
                    <img src={cheesburger} alt="cheese-burger"
                        class=" position-absolute top_25 left_60 d-none d-sm-block" />
                    <img src={humburger} alt="hamburger-img"
                        class=" position-absolute top_70 left_70 right_0 d-none d-sm-block" />
                    <img src={humburger} alt="hamburger-img"
                        class=" position-absolute top_10 left_70 d-none d-sm-block" />
                    <img src={humburger} alt="hamburger-img"
                        class=" position-absolute top_65 left_55 d-none d-sm-block" />
                    <div class="d-flex justify-content-center pt_73">
                        <h1 class="fw_700 fs_48 ff_poppins">ROADMAP 1.0</h1>
                    </div>
                    <div class="container mt-5 pt-5">
                        <div class="timeline ">
                            <div class="timelineContainer left">
                                <div class="content">
                                    <div class="ff_poppins">
                                        <h2 class="fs_24 fw_700">Q4 <span class="ml-10">2021</span></h2>
                                        <p class="fw_400 fs_20 mt-3">1. Launch SFFB</p>
                                        <p class="fw_400 fs_20">2. SELL OUT</p>
                                        <p class="fw_400 fs_20">3. Apply for secondary marketplace listings</p>
                                    </div>
                                </div>
                            </div>
                            <div class="timelineContainer right">
                                <div class="content">
                                    <div class="ff_poppins">
                                        <h2 class="fs_24 fw_700">Q1 <span class="ml-10">2022</span></h2>
                                        <p class="fw_400 fs_20 mt-3">1. Charity Giveaway</p>
                                        <p class="fw_400 fs_20">2. Launch Adopt-A-Penguin Program</p>
                                        <p class="fw_400 fs_20">3. Secure Partnerships</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="timelineContainer left pb_20">
                            <div class="content">
                                <div class="ff_poppins">
                                    <h2 class="fs_24 fw_700">Q2<span class="ml-10">2022</span></h2>
                                    <p class="fw_400 fs_20 mt-3">
                                        1. SFFB Merch Release</p>
                                    <p class="fw_400 fs_20">2. Stay tune for Roadmap 2.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmapsection
