import React from 'react'
import team1 from '../assets/images/png/team1.png';
import team2 from '../assets/images/png/team2.png';
import team3 from '../assets/images/png/team3.png';
import team4 from '../assets/images/png/team4.png';

const Team = () => {
  return (
    <div>
          <div class="background-color-yellow">
              <div class="container pb_68">
                  <div class="d-flex justify-content-center align-items-center">
                      <h2 class="fs_48 fw_700 ff_poppins mt-4 pt-3 mb-4 pb-2">Team</h2>
                  </div>
                  <div class="row">
                      <div class="col-lg-3 col-sm-6 col-12">
                          <img src={team1} alt="team-1" class="mr_10 w-100" />
                          <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt-4">Jhone Doe</h3>
                          <p class="ff_poppins fs_18 d-flex justify-content-center mb-3 pb-1">Manager</p>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                          <img src={team2} alt="team-2" class="mr_10 w-100" />
                          <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt-4">Jhone Doe</h3>
                          <p class="ff_poppins fs_18 d-flex justify-content-center mb-3 pb-1">Manager</p>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                          <img src={team3} alt="team-3" class="mr_10 w-100" />
                          <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt-4">Jhone Doe</h3>
                          <p class="ff_poppins fs_18 d-flex justify-content-center mb-3 pb-1">Manager</p>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                          <img src={team4} alt="team-4" class="w-100" />
                          <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt-4">Jhone Doe</h3>
                          <p class="ff_poppins fs_18 d-flex justify-content-center mb-3 pb-1">Manager</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Team
