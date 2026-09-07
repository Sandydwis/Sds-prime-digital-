'use client';
import {motion} from 'framer-motion';
export default function Hero(){
return <section>
<motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>
<p style={{color:'#39a8ff'}}>Premium Digital Services</p>
<h1 style={{fontSize:'clamp(3rem,8vw,6rem)'}}>SDS PRIME DIGITAL</h1>
<h2>Premium Apps For Your Digital Lifestyle</h2>
<p>Streaming • AI • Editing • Productivity</p>
<a href="https://wa.me/62895320797199">Order Sekarang</a>
</motion.div>
</section>
}