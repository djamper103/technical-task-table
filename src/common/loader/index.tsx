import React, { useState, useEffect } from 'react';
import CircleLoader from 'react-spinners/ClipLoader';
import style from './loader.module.css';

export const LoaderScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className={style.loader}>
      {loading ? (
        <CircleLoader loading={loading} color={'#E66570'} size={300} />
      ) : null}
    </div>
  );
};
