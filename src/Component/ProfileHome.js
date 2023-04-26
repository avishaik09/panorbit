import "./profile.css";


import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      const user = data.users.find((u) => u.id === parseInt(id));
      setUser(user);
    }

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>User Not Found</div>;
  }


  return (
    <div className="main">
      <div className="sidebar-div">
        <div className="sidebar">
          <Link to={`/user/${user.id}/profile`}>
            <ul className="sidebar-link">profile</ul>
          </Link>

          <Link to={`/user/${user.id}/posts`}>
            <ul className="sidebar-link">Posts</ul>
          </Link>
          <Link to={`/user/${user.id}/Gallery`}>
            <ul className="sidebar-link">Gallery</ul>
          </Link>
          <Link to={`/user/${user.id}/todo`}>
            <ul className="sidebar-link">ToDo</ul>
          </Link>
        </div>
      </div>

      <div className="header-div">
        <div className="header-right">
          <div className="user-card" style={{borderBottom:"none"}}>
            <div className="profile-pic">
              <img src={user.profilepicture} alt={user.name} />
            </div>
            
          </div>
        </div>
        <div className="header-left"></div>
      </div>

      <div className="content-div">
        <div className="col-left">
          <table>
            <tr>
              <th>
                <td className="profile-pic">
                  {" "}
                  <img src={user.profilepicture} alt={user.name} />
                </td>
                <tr>
                  <td style={{ textAlign: "center" }}>{user.name}</td>
                </tr>
                <tr>

                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.username}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>Phone:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.phone}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>Email:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.email}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>Website:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.website}
                  </td>
                </tr>
              </th>
              <th>
                <td style={{ textAlign: "center" }}>Address</td>
                <tr>
                  <td style={{ textAlign: "right" }}>Street:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.address.street}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>Suite:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.address.suite}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>City:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.address.city}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>Zipcode:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.address.zipcode}
                  </td>
                </tr>
              </th>
            </tr>
            <tr>
              <th>
                <td style={{ textAlign: "center" }}>Company</td>
                <tr>
                  <td style={{ textAlign: "right" }}>name:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.company.name}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>catchphrase:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.company.catchPhrase}
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>bs:</td>
                  <td style={{ textAlign: "left", paddingLeft: "15%" }}>
                    {user.company.bs}
                  </td>
                </tr>
              </th>
              <td>
                <iframe title={" "}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4324.981658961071!2d13.381277548859856!3d52.527755151786415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sin!4v1682408934622!5m2!1sen!2sin"
                ></iframe>
              </td>
            </tr>
            <tr></tr>
            <tr><td>Lat: {user.address.geo.lat}  </td>
              <td>Long: {user.address.geo.lng}  </td></tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


