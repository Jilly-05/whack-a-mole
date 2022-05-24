import { useEffect, useState } from "react";

export default function Mole(){
    let timer=0;
    let ssyang;
    const[time, setTime] = useState(10);
    // count down
    const main=()=>{
        if(time==0){
            console.log("stop");
            cancelAnimationFrame(ssyang);
            setTime(5);
        } else {
            ssyang = requestAnimationFrame(main);
            timer= timer+1;
            if(timer%60==0){
                time = time-1;
                setTime(time);
                console.log(timer);
            }
        }
        
    }
    // 두더지 등장
    const [rand,setRandom] = useState(0);
    useEffect(()=>{
        setRandom(Math.floor(Math.random()*6)+1);
    },[time])
    // 두더지 잡기
    const onClick = (e)=>{
        if(e.target.classList[1] == "mole"){
            console.log("got the mole");
            e.target.style.cursor = "/hammer copy.png";
            console.dir(e.target);
        } else {
            console.log("none");
        }
    }
    return (
        <main className="main">
            <p onClick={main}>start</p>
            {/* 배경 이미지 */}
            <div className="background">
                <p>{time}</p>
                {/* 두더지 첫번째 줄 */}
                <div className="line">
                    <div className="hole-mole-set" onClick={onClick}>
                        {rand === 1 ? <img className="mole" src="/mole.png" style={{animationDuration:"3s",animationName:"slidein",}}/> : <img className="hole" src="/hole.png" />}
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
                    position:reletive;
                }
                .mole {
                    transition: ease-in-out 2s;
                }
          `}</style>
        </main>
    );
}