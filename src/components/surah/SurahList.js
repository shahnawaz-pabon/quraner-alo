// src/components/surah/SurahList.js

import React from 'react';
import surahList from '../../data/surah-list.json';

const SurahList = () => {
  return (
    <div className="surah-list">
      {surahList.map((surah) => (
        <div key={surah.number} className="surah-list-item">
          <div className="circle">{surah.number}</div>
          <div className="surah-details">
            <div className="left">
              <p className="english-name">{surah.englishName}</p>
              <p className="translation">{surah.englishNameTranslation}</p>
            </div>
            <div className="right">
              <h3 className="arabic-text">{surah.name}</h3>
              <p className="ayah-count">{surah.numberOfAyahs} Ayahs</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurahList;