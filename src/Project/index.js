import Signin from "./users/signin";
import Account from "./users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import SubNav from "./subNav"
import UserTable from "./users/table";

function Project() {
  return (
      <div className="row">
        <Nav />
        <SubNav/>

        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>

      </div>
  );
}
export default Project;