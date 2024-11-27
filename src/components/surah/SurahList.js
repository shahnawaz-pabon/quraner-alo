// src/components/surah/SurahList.js

import React from 'react';
import { Link } from 'gatsby';
import surahList from '../../data/surah-list.json';

const SurahList = () => {
    return (
        <div className="surah-list">
            {surahList.map((surah) => (
                <div key={surah.number} className="surah-card">
                    <h3>{surah.name}</h3>
                    <p>English Name: {surah.englishName}</p>
                    <p>Total Ayahs: {surah.numberOfAyahs}</p>
                    <p>Revelation Type: {surah.revelationType}</p>
                    <Link to={`/surah/${surah.id}`}>Read Surah</Link>
                </div>
            ))}
        </div>
    );
};

export default SurahList;
