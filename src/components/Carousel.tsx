import { useState, useId } from "react";
interface CarouselProps {

}

export default function Carousel({ }: CarouselProps) {
    const imgArr = ["https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255635/jzeh72nmymbbwlapd2ib.webp",
        "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255653/slhcqfaobiwxdnwi2fjb.png",
        "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255677/c6jfvp6suz6lh5jxsrak.jpg",
        "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255678/kekbspbfrzkndrozemci.jpg",
        "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255679/ar83tuk6uqlsesfo3wkj.jpg",
        "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682256476/jdklp7ldnmijfz36gzwu.png",
        "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682259104/zxnlhfskid5ywvkzg7h1.jpg",
        "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682102352/bsuao4rnyksaim7xz0pz.jpg"];

    const [imgIndex, setImgIndex] = useState<number>(0);
    console.log(imgIndex);
    const DevImgsId = useId();
    
    return <div className="flex justify-center h-screen items-center flex-col p-5">
        <div className="w-[500px] h-[500px] bg-slate-200 border">
            <img className="w-full h-[500px] p-5 object-contain" src={ imgArr[imgIndex] } alt="" />


                <div className="flex items-center">

                <svg onClick={ () => document.getElementById(DevImgsId)!.scrollLeft -= 100 } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className={ `w-12 h-12 cursor-pointer select-none ${imgArr.length < 3 && "pointer-events-none opacity-50"}` }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                <div id={DevImgsId} className="flex w-full overflow-auto scrollbar-hide gap-3">
                { imgArr.map((img: string, index: number) => (<img src={ img } onClick={ () => setImgIndex(index) } className="w-32 h-32 object-cover rounded-sm" alt="" />)) }
                </div>


                <svg onClick={ () => document.getElementById(DevImgsId)!.scrollLeft += 100} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className={ `w-12 h-12 cursor-pointer select-none ${imgArr.length < 3 && "pointer-events-none opacity-50"}` }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>
        </div>
    </div>;
}


// (getThis(document) as Document).getElementById(DevImgsId)!.scrollLeft += 100 