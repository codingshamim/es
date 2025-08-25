import CommonProviders from "@/app/src/providers/CommonProviders";
import "../../globals.css";
import TopHeader from "./_components/Header/TopHeader";
import Sidebar from "./_components/Sidebar/Sidebar";
import ConfirmationModal from "./_components/ConfirmationModal";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="  text-white bg-[#000] ">
        <CommonProviders>
          <ConfirmationModal />
          <Sidebar />

          <div className="lg:ml-64">
            <TopHeader />

            {children}
          </div>
        </CommonProviders>
      </body>
    </html>
  );
}
