import {products} from '@/data/products';
export default function ProductGrid(){
return <section><h2>Produk Unggulan</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:20}}>
{products.map(p=><div className="glass" style={{padding:25}} key={p.name}>
<h3>{p.name}</h3><small>{p.cat}</small><p>{p.desc}</p><b>{p.price}</b>
</div>)}
</div></section>
}