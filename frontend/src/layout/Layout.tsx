import Footer from "../components/Footer/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
