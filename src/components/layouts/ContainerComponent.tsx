export default function MainLayout ({ children, noPadding }: any) {

  return (
    <div className='w-screen flex justify-center mb:w-full mb:px-4'>
        <div className={`${noPadding ? '' : 'px-[13%]'} pb-10`}>
        {children}
        </div>
    </div>
  );
}
