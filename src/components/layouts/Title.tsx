export default function Title ({ title }: { title: string }) {

  return (
    <div className="w-full mt-auto mb-12">
        <h1 className="text-center title title-h1">
            <span className="text-orange ">.</span>{title}
        </h1>
        <div className="w-24 mx-auto h-px bg-orange"></div>
    </div>
  );
}
