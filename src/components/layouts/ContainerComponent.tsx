export default function MainLayout ({ children, noPadding }: any) {

  return (
    <div className='w-screen flex justify-center'>
        <div className={`${noPadding ? '' : 'px-[13%]'} pb-10`}>
        {children}
        </div>
    </div>
  );
}
