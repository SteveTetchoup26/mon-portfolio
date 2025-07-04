/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from 'react';
import Experience from '../Experience';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import VITE_API_URL from '../../utils/API_URL';
import { IExperience } from '../../types';

const ExperienceCatalog = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const [itemWidth, setItemWidth] = useState(400);

  const formatDate = (dt: Date) => {
    const date = new Date(dt);
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(`${VITE_API_URL}/v1/experiences/all`, { headers: { 'Cache-Control': 'no-cache' } });
      const formatted = result.data.experiences.map((experience: any) => ({
        ...experience,
        start_date: formatDate(experience.start_date),
        end_date: formatDate(experience.end_date),
      }));
      setExperiences(formatted);
    } catch (err) {
      console.log(err);
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

  const next = () => {
    scrollBy(itemWidth);
  };

  const previous = () => {
    scrollBy(-itemWidth);
  };


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
    fetchExperiences();
  }, []);


  useEffect(() => {
    if (experiences.length > 0 && containerRef.current) {
      const isMobile = window.innerWidth < 768;
      const width = isMobile ? 350 : 400;
      setItemWidth(width);

      const containerWidth = containerRef.current.offsetWidth;
      setVisibleCount(Math.floor(containerWidth / width));
    }
  }, [experiences]);

  const shouldShowControls = useMemo(() => {
    return experiences.length > visibleCount;
  }, [experiences.length, visibleCount]);

  return (
    <div className="w-full px-6 md:px-24 py-10 flex flex-col items-center gap-y-8">
      <div
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar max-w-[90vw] snap-x .no-scrollbar"
        ref={containerRef}
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="min-w-[400px] h-60 bg-gray-200 animate-pulse rounded-md" />
            ))
          : experiences.map((exp) => (
              <Experience key={exp.id} experience={exp} />
            ))}
      </div>

      {!isLoading && shouldShowControls && (
        <div className="flex gap-4">
          <button
            onClick={previous}
            className="text-center bg-white rounded-md px-4 py-2 shadow-md"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={next}
            className="text-center text-white bg-black rounded-md px-4 py-2 shadow-md"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceCatalog;
