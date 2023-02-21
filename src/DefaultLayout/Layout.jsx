import NavBar from "../NavBar/NavBar";
import Footer from "../components/Footer/Footer";
;

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    
    </>
  );
}
