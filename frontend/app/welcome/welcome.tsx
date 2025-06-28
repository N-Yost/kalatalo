export function Welcome() {
  return (
    <div className="container ms-5 my-4 pe-5">
      <div className="row mb-5">
        <div className="row mb-2">
          <h2>Dr. Katherine Alatalo</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <img className="cBorder" src="images/katey.png" height="192" width="212" />
          </div>
          <div className="col-8">
            <p>
              I am currently a postdoctoral fellow living in Pasadena and working at the Infrared Processing and Analysis Center at the California Institute of Technology working on mapping shock conditions within compact groups of galaxies with Dr. Phil Appleton.<br /><br />
              I graduated with my Ph.D. in astrophysics in 2012 from UC - Berkeley with Prof. Carl Heiles as my advisor. I graduated from the University of Michigan in 2004 with a double major of astronomy and physics under the supervision of Prof. Carl Akerlof and Prof. Tim McKay.
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="row mb-2">
          <h2 className="title">Research Interests</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <img className="cBorder" src="images/ngc1266.png" height="192" width="212" />
          </div>
          <div className="col-8">
            <p>
              My current interests mostly focus on using CARMA and ALMA to map cold molecular gas in candidates from AGN feedback and using Herschel to map the conditions in shocked molecular gas in compact, interacting groups of galaxies.
              I have also spent time working on mapping of molecular gas in early-type galaxies with the ATLAS3D team.
              Previously I worked a bit on optical follow-up to gamma-ray bursts primarily with <a className="sLink" href="http://www.rotse.net/">ROTSE</a>, but also with <a className="sLink" href="http://www.pairitel.org/">PAIRITEL</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row mb-2">
          <h2>Other Interests</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <img className="cBorder" src="images/vlapeople.jpg" height="192" width="212" />
          </div>
          <div className="col-8">
            <p>
              In a quest for "epic" adventures, I have skydived in Hawaii, roadtripped in a Fiat Panda through the north shore of Tenerife (Canary Islands), picked up hitchhikers in Yellowstone National Park, chased down Calfire guys to make sure I didn't need to evacuate our science facility, introduced a dozen Europeans to karaoke and many more. I get scared easily, but love pushing myself through that fear. I am a competitive fun-haver, meaning that when people come visit me here, I will do everything in my power to ensure they have had a better time than they can possibly show me in their hometown. It is (in my opinion) a competition that everyone wins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
