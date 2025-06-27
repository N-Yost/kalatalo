import type { Route } from "./+types/home";
import { Link, NavLink, Outlet } from "react-router";
import  Sidebar  from "../sidebar/sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dr. Katherine Alatalo" },
    { name: "description", content: "Dr. Katherine Alatalo's website" },
  ];
}

export default function Dashboard() {
    return (
        <div className="container app">
            <nav className="navbar navbar-expand-lg bg-body-tertiary row mb-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Katey's Website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="me">Me</NavLink>
                            <NavLink className="nav-link" to="research">Research</NavLink>
                            <NavLink className="nav-link" to="papers">Papers</NavLink>
                            <NavLink className="nav-link" to="cv">CV</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-8">
                    <Outlet />
                </div>
                <div className="col-4">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
