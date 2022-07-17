import React, { useState, useEffect } from 'react';
import CircleLoader from 'react-spinners/ClipLoader';
import { COLORS } from '../../constants/colors';
import style from './loader.module.css';

export const LoaderScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className={style.loader}>
      {loading ? (
        <CircleLoader loading={loading} color={COLORS.SUNGLO} size={300} />
      ) : null}
    </div>
  );
};
