"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const navbar_1 = require("./_components/navbar");
const sidebar_1 = require("./_components/sidebar");
const DashboardLayout = ({ children }) => {
    return (<div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <navbar_1.Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <sidebar_1.Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>);
};
exports.default = DashboardLayout;
