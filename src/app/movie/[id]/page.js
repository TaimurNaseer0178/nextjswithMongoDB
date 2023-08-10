import Image from 'next/image';
import React from 'react'
import styles from '@/app/styles/common.module.css'
const Page = async({params}) => {
  const id=params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e108c16b2msh574aea4a3f38e1dp13cb36jsn92845c21deb9',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res=await fetch(url,options);
  const data=await res.json();
  const main_data=data[0].details;
  return (
    <>

         <div className={styles.container}>
          {/* {console.log("SDFSDFSDFSDF")} */}
            <h2 className={styles.movie_title}>NetFlex \ <span> {main_data.type}</span></h2>
            <div className={styles.card_section}>
                <Image src={main_data.backgroundImage.url} alt={main_data.title}  height={300} width={600}/>
            </div>
            {console.log('main_data--------?????-', main_data)}
            <div className={styles.card_data}>
                <h1>{main_data.title}</h1>
                <p>
                    {main_data.synopsis}
                </p>
                
            </div>
          </div>
    </>
  )
}

export default Page
