export default function Title ({ title, position }: { title: string, position?: string }) {

  return (
    <div className={`w-full mt-auto mb-12 flex justify-${position || 'center'}`}>
        <h1 className="title title-h1">
          <span className="text-orange text-3xl mb:text-[2rem]">.</span>{title}
          {/* <div className="w-full mx-auto h-px bg-orange"></div> */}
        </h1>
    </div>
  );
}
