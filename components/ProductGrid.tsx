'use client';

import { motion } from 'framer-motion';
import { products } from '@/data/products';

const icons:any = {
  "ChatGPT Plus":"🤖",
  "Netflix Premium":"🎬",
  "CapCut Pro":"🎥",
  "Canva Premium":"🎨",
  "Spotify Premium":"🎵",
  "Gemini AI":"✨",
  "Perplexity":"🔎"
};

export default function ProductGrid(){

return (
<section style={{
padding:"80px 8%"
}}>

<h2 style={{
fontSize:"3rem",
marginBottom:"40px"
}}>
Produk Unggulan
</h2>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"30px"
}}>


{products.map((p)=>(

<motion.div

key={p.name}

whileHover={{
y:-12,
scale:1.03
}}

transition={{
duration:.3
}}

style={{
background:"linear-gradient(145deg,#111827,#050816)",
border:"1px solid rgba(255,255,255,.12)",
borderRadius:"24px",
padding:"30px",
boxShadow:"0 20px 60px rgba(0,0,0,.4)"
}}

>


<div style={{
fontSize:"45px",
marginBottom:"20px"
}}>
{icons[p.name] || "⭐"}
</div>


<h3 style={{
fontSize:"1.5rem"
}}>
{p.name}
</h3>


<p style={{
color:"#39a8ff",
fontWeight:600
}}>
{p.cat}
</p>


<p style={{
color:"#cbd5e1",
lineHeight:1.6
}}>
{p.desc}
</p>


<h3 style={{
marginTop:"20px"
}}>
{p.price}
</h3>


<a
href="https://wa.me/62895320797199"
style={{
display:"inline-block",
marginTop:"20px",
padding:"12px 22px",
borderRadius:"999px",
background:"#2563eb",
color:"white",
textDecoration:"none",
fontWeight:700
}}
>
Order Sekarang
</a>


</motion.div>


))}


</div>

</section>
)

}