/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import VITE_API_URL from '../../utils/API_URL';
import { IWork } from '../../types';
import Work from '../Work';
import WorkLoader from '../loader/WorkLoader';

const WorkCatalog = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [works, setWorks] = useState<IWork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const [itemWidth, setItemWidth] = useState(400);
  const [canScroll, setCanScroll] = useState(false);

  const fetchWorks = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(`${VITE_API_URL}/v1/works/all`);

      const formattedWorks = result.data.works?.map((work: any) => ({
        ...work,
        publication_date: new Date(work.publication_date).toISOString().split('T')[0].slice(0, 4),
      }));

      setWorks(formattedWorks);
    } catch (err) {
      console.error('Erreur lors du chargement des works :', err);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollBy = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  const next = () => scrollBy(itemWidth);
  const previous = () => scrollBy(-itemWidth);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (containerRef.current) {
        const isMobile = window.innerWidth < 768;
        const width = isMobile ? 350 : 400;
        setItemWidth(width);

        const containerWidth = containerRef.current.offsetWidth;
        setVisibleCount(Math.floor(containerWidth / width));
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    fetchWorks();
  }, []);


  useEffect(() => {
    const checkScrollability = () => {
      if (containerRef.current) {
        const el = containerRef.current;
        setCanScroll(el.scrollWidth > el.clientWidth);
      }
    };

    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [works]);


  return (
    <div className="w-full px-0 md:px-24 py-10 flex flex-col items-center gap-y-8">
      <div
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar max-w-[90vw] snap-x"
        ref={containerRef}
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <WorkLoader key={i} />)
          : works.map((work) => <Work key={work.id} work={work} />)}
      </div>

      {!isLoading && canScroll && (
        <div className="flex gap-4 mt-4">
          <button
            onClick={previous}
            className="text-center bg-white rounded-md px-4 py-2 shadow-md hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={next}
            className="text-center text-white bg-black rounded-md px-4 py-2 shadow-md hover:bg-gray-800"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkCatalog;
