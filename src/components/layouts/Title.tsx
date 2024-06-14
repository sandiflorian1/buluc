export default function Title ({ title, position, className }: { title: string, position?: string, className?: string  }) {

  return (
    <div className={`${className} w-full mt-auto mb-4 flex justify-${position || 'center'}`}>
        <h1 className="title title-h1">
          {title}
        </h1>
    </div>
  );
}
