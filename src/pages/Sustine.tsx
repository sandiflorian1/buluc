import MainLayout from "../components/layouts/MainLayout";
import { Link } from 'react-router-dom';
import { ScaleAnimation } from "../components/animations/Animations";
export interface ISustineProps {
}

export default function Sustine(props: ISustineProps) {
  return (
    <MainLayout>
      <div className="flex mb:inline">
        <ScaleAnimation className="m-10">
          <Link className="relative circle1" to={'/sustine-form35page'} >
            <div className="circle-sustine bg-orange" />
            <div className="absolute sustine-text">
              <h1 className="text-white text-[5rem] mb:text-[2rem]">3,5%</h1>
              <p className="text-white px-8 text-center text-[1.75rem] mb:text-[0.85rem]">Redirecționează 3,5% din impozitul pe venit către Asociația ”Buluc”</p>
            </div>
          </Link>
        </ScaleAnimation>
        <ScaleAnimation className="m-10">
          <Link className="relative circle2" to={'/sustine-donatie'}>
            <div className="circle-sustine bg-red" />
            <div className="absolute sustine-text">
              <h1 className="text-white text-[2.5rem] mb:text-[1.25rem]">Donație libera</h1>
              <p className="text-white px-8 mb:px-4 text-center text-[1.75rem] mb:text-[0.85rem]">Toate ideile si inițiativele noastre pot fi sustinute printr-o donație directă in contul bancar al asociatiei noastre</p>
            </div>
          </Link>
        </ScaleAnimation>
      </div>
    </MainLayout>
  );
}
