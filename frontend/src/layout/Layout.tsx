import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center min-h-screen bg-slate-500 relative">
      <div className="flex flex-col items-center max-w-[1600px] w-full  bg-white">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
