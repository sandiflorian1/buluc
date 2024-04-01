export default function Title ({ title }: { title: string }) {

  return (
    <div className="w-full mt-auto mb-12 flex justify-center">
        <h1 className="title title-h1">
          <span className="text-orange ">.</span>{title}
          {/* <div className="w-full mx-auto h-px bg-orange"></div> */}
        </h1>
    </div>
  );
}
