import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import SimpleCard from "../components/cards/SimpleCard";
import IMAGES from "../assets/Images";

export interface IConfidentialitateProps { }


const Confidentialitate: React.FC = () => {
  return (
    <MainLayout>
      <div className="container pt-10">
        <div className="mx-[15%] mb:mx-0">
          <SimpleCard>
           <h5>Politica de confidentialitate</h5>
           <p></p>
          </SimpleCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default Confidentialitate;