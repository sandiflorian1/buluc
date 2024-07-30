import MainLayout from "../components/layouts/MainLayout";
import { Link } from 'react-router-dom';
import { ScaleAnimation } from "../components/animations/Animations";
import "../css/sustine.css";
export interface ISustineProps {
}

export default function Sustine(props: ISustineProps) {
  return (
    <MainLayout>
      <div className="flex mt-10 mb:inline">
        <ScaleAnimation className="m-10">
          <Link className="circle1" to={'/sustine-form35page'} >
            <div className="sustine-text  bg-orange">
              <h1 className="text-white">3,5%</h1>
              <h5 className="text-white px-8 text-center">Redirecționează 3,5% din impozitul pe venit către Asociația ”Buluc”</h5>
            </div>
          </Link>
        </ScaleAnimation>
        <ScaleAnimation className="m-10">
          <Link className="circle2" to={'/sustine-donatie'}>
            <div className="sustine-text bg-red">
              <h3 className="text-white">Donație libera</h3>
              <h5 className="text-white px-8 mb:px-4 text-center">Toate ideile si inițiativele noastre pot fi sustinute printr-o donație directă in contul bancar al asociatiei noastre</h5>
            </div>
          </Link>
        </ScaleAnimation>
      </div>
    </MainLayout>
  );
}
