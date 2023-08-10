import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css"
import { resolve } from 'styled-jsx/css';


const Movie =async() => {
  await new Promise(resolve=>setTimeout(resolve,1000));
  const url = process.env.RAPID_KEY;
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e108c16b2msh574aea4a3f38e1dp13cb36jsn92845c21deb9',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res=await fetch(url,options);
  const data=await res.json();
  const main_data=data.titles;
  
  return (
    <>
      <section className={styles.movieSection}>
          <div className={styles.container}>
            <h1>Series & Movie</h1>
              <div className={styles.card_section}>
              {
                main_data.map((curElem)=>{
                    return(
                      <MovieCard key={curElem.id} {...curElem}/>
                    )
                })
              }
              </div>
          </div>
        </section>
    </>
  )
}

export default Movie
