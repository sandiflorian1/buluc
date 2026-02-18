import { useRef, useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const useMeasuredMaxHeight = (open: boolean) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>('0px');

  useEffect(() => {
    if (open) {
      const contentHeight = ref.current?.scrollHeight ?? 0;
      setMaxHeight(`${contentHeight}px`);
      // Recalculate in case of late-loading fonts or images
      const id = requestAnimationFrame(() => {
        if (ref.current) setMaxHeight(`${ref.current.scrollHeight}px`);
      });
      return () => cancelAnimationFrame(id);
    } else {
      setMaxHeight('0px');
    }
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (open && ref.current) {
        setMaxHeight(`${ref.current.scrollHeight}px`);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return { ref, style: { maxHeight } };
};

const FaqItemRow = ({ question, answer }: any) => {
  const [open, setOpen] = useState(false);
  const { ref, style } = useMeasuredMaxHeight(open);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between text-left gap-4 py-4 bg-transparent border-0 font-inherit cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-lg md:text-xl font-semibold text-gray-800">{question}</span>
        <FaChevronDown
          className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={style}
      >
        <div ref={ref} className="pb-4 text-gray-700 text-base md:text-lg">
          {typeof answer === 'string' ? <p className="mb-2">{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItemRow;