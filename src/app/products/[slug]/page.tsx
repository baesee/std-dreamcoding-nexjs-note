type Props = {
    params: {
        slug:String;
    }
}

export function generateMetadata({params}: Props){
    return {
        title : `제품의 이름 : ${params.slug}`,
        description : `상품의 상세정보를 확인하세요`
    }
}
  
export default function PantsPage({params}: Props){
    return <h1>{params.slug} 상품 페이지@@</h1>
}