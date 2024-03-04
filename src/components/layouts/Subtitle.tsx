export default function Subtitle ({ title }: { title: string }) {

  return (
    <div className="w-full mt-auto mb-12">
        <h5 className="title title-h5">
            <span className="text-orange ">.</span>{title}
        </h5>
        {/* <div className="w-24 mx-auto h-px bg-orange"></div> */}
    </div>
  );
}

