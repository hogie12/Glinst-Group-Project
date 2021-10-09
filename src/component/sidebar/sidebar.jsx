import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Icon,
  Menu,
  Segment,
  Sidebar,
  Checkbox,
  Container,
} from "semantic-ui-react";
import "./sidebar.css";

export default function SidebarPage({ children }) {
  const [open, setOpen] = useState(false);
  const [tittle, setTittle] = useState("Talent");
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          direction="left"
          icon="labeled"
          inverted
          vertical
          visible={open}
          width="thin"
          onHide={() => setOpen(false)}
        >
          <div style={{ marginTop: "2rem" }}>
            <NavLink to="/" onClick={() => setTittle("Talent")}>
              <Menu.Item as="h2">
                <p>Talent</p>
              </Menu.Item>
            </NavLink>
            <NavLink to="/company" onClick={() => setTittle("Company")}>
              <Menu.Item as="h2">
                <p>Company</p>
              </Menu.Item>
            </NavLink>
            <NavLink to="/pic" onClick={() => setTittle("PIC")}>
              <Menu.Item as="h2">
                <p>PIC</p>
              </Menu.Item>
            </NavLink>
            <NavLink to="/tracker" onClick={() => setTittle("Tracker")}>
              <Menu.Item as="h2">
                <p>Tracker</p>
              </Menu.Item>
            </NavLink>
          </div>
        </Sidebar>
        <Sidebar.Pusher style={{ backgroundColor: "whitesmoke" }}>
          <div>
            <header className="shadow">
              <div className="header">
                <h1 className="menu">
                  <Icon name="bars" onClick={toggle} />
                  <Checkbox
                    label="Check this box"
                    onChange={toggle}
                    checked={open}
                    style={{ display: "none" }}
                  />
                </h1>
                <div className="tittle">
                  <h1>{tittle}</h1>
                </div>
              </div>
            </header>
            <Container>
              <div
                style={{
                  background: "white",
                  border: "solid 1px #E1E1E1",
                  marginTop: "5rem",
                  marginBottom: "10rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    margin: "1.7rem",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            </Container>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
