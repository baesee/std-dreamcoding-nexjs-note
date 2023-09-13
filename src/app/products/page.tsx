import Link from 'next/link'
const products = ['Skirt','Pants','Onoion','Banana','Sleep']

export default function productsIndexPage(){
    return <>
        <h1>제품 소개 페이지</h1>
        <ul>
            {products.map((product, index) => (
                <li key ={index}>
                    <Link href={`/products/${product}`}>{product}</Link>
                </li>
            ))}
            <li><Link href = '/products/shirt'>Shirt</Link></li>
            <li><Link href = '/products/pants'>pants</Link></li>
            <li><Link href = '/products/Onion'>Onion</Link></li>
            <li><Link href = '/products/banana'>banana</Link></li>
        </ul>
    </>

}