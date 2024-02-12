import Footer from "./Footer";
import Headers from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
