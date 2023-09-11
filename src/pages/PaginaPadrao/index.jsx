import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <>
      <Header>Novo Video</Header>
      <Outlet />
      <Footer />
    </>
  );
}
