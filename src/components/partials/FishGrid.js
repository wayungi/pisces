import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllFish } from '../../reducers/fishSlice';
import FishPanel from './FishPanel';

const FishGrid = () => {
  const fishArray = useSelector(selectAllFish); // useSelector(selectAll(state) => state.fish)
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const fishPaginatedList = fishArray.slice(start, end);

  const next = () => {
    if (end === fishArray.length) return;
    setStart(end);
    setEnd((prevState) => (fishArray.length > prevState + 10 ? prevState + 10 : fishArray.length));
  };

  const prev = () => {
    if (start === 0) return;
    setEnd(start);
    setStart((prevState) => (prevState - 10 > 0 ? prevState - 10 : 0));
  };

  const fishPanels = fishPaginatedList.map((fish) => <FishPanel fish={fish} key={fish['Scientific Name']} />);

  return (
    <section className="mt-8 space-y-6">
      { fishPanels }
      <div className="flex flex-row justify-between mx-7 py-8">
        <button type="button" onClick={() => prev()} className="px-4 py-1 bg-slate-900 text-white rounded-sm">Previous</button>
        <button type="button" onClick={() => next()} className="px-4 py-1 bg-slate-900 text-white rounded-sm">Next</button>
      </div>
    </section>
  );
};

export default FishGrid;
