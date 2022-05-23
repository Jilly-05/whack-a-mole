import { useEffect, useState } from "react";

export default function Mole(){
    const onClick = ()=>{
        console.log("clicked");
    }
    const[time, setTime] = useState(0);
    useEffect(()=>{
        // const count = setInterval(()=>{
        //     time=time+1;
        //     setTime(parseInt(time))
        //     clearInterval(count);
        // },1000);
    },[time])
    const [rand,setRandom] = useState(0);
    useEffect(()=>{
        setRandom(Math.floor(Math.random()*6)+1);
    },[time])
    console.log(rand);
    return (
        <main className="main">
            <p>{time}</p>
            {/* 배경 이미지 */}
            <div className="background">
                {/* 두더지 첫번째 줄 */}
                <div className="line">
                    <div className="hole-mole-set" onClick={onClick}>
                        {rand === 1 ? <img className="mole" src="/mole.png" /> : <img className="hole" src="/hole.png" />}
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        {rand === 2 ? <img className="mole" src="/mole.png" /> : <img className="hole" src="/hole.png" />}
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        {rand === 3 ? <img className="mole" src="/mole.png" /> : <img className="hole" src="/hole.png" />}
                    </div>
                </div>
                {/* 두더지 두번째 줄 */}
                <div className="line">
                <div className="hole-mole-set" onClick={onClick}>
                        {rand === 4 ? <img className="mole" src="/mole.png" /> : <img className="hole" src="/hole.png" />}
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        {rand === 5 ? <img className="mole" src="/mole.png" /> : <img className="hole" src="/hole.png" />}
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        {rand === 6 ? <img className="mole" src="/mole.png" /> : <img className="hole" src="/hole.png" />}
                    </div>
                </div>
            </div>
            
            {/* css style */}
            <style jsx>{`
                .main{
                    display:flex;
                    justify-content:center;
                }
                .background{
                    background-image: url(/background.png);
                    height:400px;
                    width:500px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    cursor:url(/hammer.png), help;
                }
                .hole-mole-set{
                    margin:30px
                }
                .line{
                    display:flex;
                    width:100%;
                    justify-content:center;
                    margin:10px;
                }

                p{
                    display:none;
                }
          `}</style>
        </main>
    );
}