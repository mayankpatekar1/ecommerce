import React,{useState,useEffect} from 'react';
import Image from "next/image";
import useStyles from '../utils/styles';
import data from '../utils/data';
import styles from "../styles/Curosel.module.css";


export const Curosel = () => {
  const classes = useStyles();

  const [current, setCurrent] = useState(0);
  const length = data.CuroselItems.length;
  useEffect(()=>{
    // setTimeout(()=>{
    //   setCurrent((current === (length - 1)) ? 0 : (current+1))
    //   },6000);
    
            
  })

  const nextSlide =() =>{
    setCurrent((current === (length - 1)) ? 0 : (current+1))
  }
  const prevSlide =() =>{
    setCurrent((current === 0) ? (length - 1) : (current - 1))
  }
  


  return (

    <div className={styles.slideshowContainer}>
    {data.CuroselItems.map((image,index)=>{
      return(
        <div className={index ===current ? 'styles.fade' :'styles.mySlides'} key={index} >
        { index === current && (
          <Image className={styles.img} priority src={image.src} alt="thumb-1" height={120} width={250} layout="responsive" ></Image>
        )}
    </div>
      );
    })}
    <a className={styles.prev} onClick={prevSlide} >{'<'} </a>
    <a className={styles.next} onClick={nextSlide} >{'>'} </a>
    
    </div>
   
  );
}
