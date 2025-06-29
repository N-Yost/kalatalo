import a3dgals from "../../images/a3dgals.png";
import n1226 from "../../images/n1266r_out.jpg";

export function Research() {
    return (
        <div className="container ms-5 my-4 pe-5">
            <div className="row mb-5">
                <div className="row mb-2">
                    <h2>Mapping shock conditions in compact groups</h2>
                </div>
                <div className="row">
                    <div className="col-5">
                        <img className="cBorder" src="http://upload.wikimedia.org/wikipedia/commons/1/15/Stephan%27s_Quintet_X-ray_%2B_Optical.jpg" height="224" width="309" />
                    </div>
                    <div className="col-7">
                        <p>
                            Hickson Compact Groups (HCGs) are sets of galaxies that are spatially related, but not yet dense or sufficiently numerous to be a part of a cluster, where the presence of hot intracluster gas is has a profound impact on the galaxies. The galaxies in these systems tend to undergo evolution rapidly, and therefore they make a wonderful testbed for the evolution of galaxies. I am studying 11 HCGs that showed boosted hot molecular hydrogen emission using the Herschel Space telescope, to determine their shock conditions through studying their [C II] emission. We aim to show that [C II] can be produced (and strongly enhanced) in shocks.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="row mb-2">
                    <h2>The CARMA CO-imaging survey of nearby early-type galaxies</h2>
                </div>
                <div className="row">
                    <div className="row mb-2">
                        <div className="col-9">
                            <img className="cBorder" src={a3dgals} height="362" width="591" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <p>
                                I used CARMA to observe 30 early-type galaxies that are a part of the ATLAS3D survey, which were originally detected in CO with the IRAM 30m single dish in Pico Veleta, Spain. A total of 266 on-source hours were completed for the survey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="row mb-2">
                    <h2>NGC 1266: host to a compact, mass-loaded molecular outflow</h2>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img className="cBorder" src={n1226} height="334" width="369" />
                    </div>
                    <div className="col-5">
                        <p>
                            NGC1266 was serendipitously discovered during the ATLAS3D survey. Although it appears to be a normal, non-interacting early-type galaxy, appearances deceive. In the galactic nucleus, a larger outflow of molecular gas is taking place, through the action of an AGN. NGC1266 might be the first local example of secular (or non-major merger) quenching of star formation. With little to no evidence that it has undergone any recent major interaction, it is possible that the molecular gas was driven to the center by a minor merger, and the AGN is able to drive the gas out.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
