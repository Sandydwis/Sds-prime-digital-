import './globals.css';

export const metadata={
 title:'SDS PRIME DIGITAL',
 description:'Premium Digital Services Marketplace'
};

export default function Layout({children}:{children:React.ReactNode}){
 return <html lang="id"><body>{children}</body></html>
}