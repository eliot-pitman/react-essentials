import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>|<Link to="events">Event</Link>|<Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}
export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}
export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}
export function Services() {
  return (
    <div>
      <h2> our services</h2>
    </div>
  );
}
export function CompanyHistory() {
  return (
    <div>
      <h2> our comapny history</h2>
    </div>
  );
}
export function Location() {
  return (
    <div>
      <h2> our location</h2>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}
export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1> resource not found at {location.pathname} </h1>
    </div>
  );
}
