import MainLayout from "../components/layouts/MainLayout";
import { Link } from 'react-router-dom';
import { ScaleAnimation } from "../components/animations/Animations";
export interface ISustineProps {
}

export default function Sustine(props: ISustineProps) {
  return (
    <MainLayout>
      <div className="flex mt-10 mb:inline">
        <ScaleAnimation className="m-10">
          <Link className="relative circle1" to={'/sustine-form35page'} >
            <div className="circle-sustine bg-orange" />
            <div className="absolute sustine-text">
              <h1 className="text-white">3,5%</h1>
              <h5 className="text-white px-8 text-center">Redirecționează 3,5% din impozitul pe venit către Asociația ”Buluc”</h5>
            </div>
          </Link>
        </ScaleAnimation>
        <ScaleAnimation className="m-10">
          <Link className="relative circle2" to={'/sustine-donatie'}>
            <div className="circle-sustine bg-red" />
            <div className="absolute sustine-text">
              <h3 className="text-white">Donație libera</h3>
              <h5 className="text-white px-8 mb:px-4 text-center">Toate ideile si inițiativele noastre pot fi sustinute printr-o donație directă in contul bancar al asociatiei noastre</h5>
            </div>
          </Link>
        </ScaleAnimation>
      </div>
    </MainLayout>
  );
}
