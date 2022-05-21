import { useState } from "react";

export default function Cursor() {
    const [left, setLeft] = useState("");
    const [top, setTop] = useState("");
    const onMouseMove=(e)=>{
        const tempL = e.pageX-30;
        const tempT = e.pageY-30;
        setLeft(`${tempL}px`);
        setTop(`${tempT}px`)
    }
    return (
        <div id="cursor" onMouseMove={onMouseMove}>
            <style jsx>{`
                #cursor{
                    position:absolute;
                    width:60px;
                    height:60px;
                    background:url(/hammer.png);
                    left:${left};
                    top:${top};
                    z-index:2;
                }
            `}</style>
        </div>
    );
}