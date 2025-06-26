export function Welcome() {
  return (
    <div className="container ms-5 pe-5 text-start">
      <div className="row mb-3">
        <div className="row">
          <h2>Dr. Katherine Alatalo</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <img className="border" src="images/katey.png" height="192" width="212" />
          </div>
          <div className="col-6">
            I am currently a postdoctoral fellow living in Pasadena and working at the Infrared Processing and Analysis Center at the California Institute of Technology working on mapping shock conditions within compact groups of galaxies with Dr. Phil Appleton.

I graduated with my Ph.D. in astrophysics in 2012 from UC - Berkeley with Prof. Carl Heiles as my advisor. I graduated from the University of Michigan in 2004 with a double major of astronomy and physics under the supervision of Prof. Carl Akerlof and Prof. Tim McKay.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <h2 className="title">Research Interests</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <img className="border" src="images/ngc1266.png" height="192" width="212" />
          </div>
          <div className="col-6">
            My current interests mostly focus on using CARMA and ALMA to map cold molecular gas in candidates from AGN feedback and using Herschel to map the conditions in shocked molecular gas in compact, interacting groups of galaxies.

I have also spent time working on mapping of molecular gas in early-type galaxies with the ATLAS3D team.

Previously I worked a bit on optical follow-up to gamma-ray bursts primarily with ROTSE, but also with PAIRITEL.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <h2>Other Interests</h2>
        </div>
        <div className="row">
          <p>text</p>
        </div>
      </div>
    </div>
  );
}
