
export default function Mole(){
    const onClick = ()=>{
        console.log("clicked");
    }
    return (
        <main className="main">
            <div className="background">

                <div className="line">
                    <div className="hole-mole-set" onClick={onClick}>
                        <img className="mole" src="/mole.png" />
                        <img className="hole" src="/hole.png" />
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        <img className="mole" src="/mole.png" />
                        <img className="hole" src="/hole.png" />
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        <img className="mole" src="/mole.png" />
                        <img className="hole" src="/hole.png" />
                    </div>
                </div>

                <div className="line">
                    <div className="hole-mole-set" onClick={onClick}>
                        <img className="mole" src="/mole.png" />
                        <img className="hole" src="/hole.png" />
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        <img className="mole" src="/mole.png" />
                        <img className="hole" src="/hole.png" />
                    </div>
                    <div className="hole-mole-set" onClick={onClick}>
                        <img className="mole" src="/mole.png" />
                        <img className="hole" src="/hole.png" />
                    </div>
                </div>
                <div id="cursor"></div>
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
                    cursor:url(/hammer.png) -30 -30, help;
                }
                .mole{
                    position:absolute;
                    z-index:1;

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
          `}</style>
        </main>
    );
}