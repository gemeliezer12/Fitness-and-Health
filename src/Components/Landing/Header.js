const Header = () => {
    return (
        <>
            <div className="color-inherit dark" style={{
                background: "linear-gradient(0deg, var(--rose) 0%, var(--indigo) 100%)",
                color: "white"
            }}>
                <div className="column padding-x-32 padding-top-80 gap-20 HPNXA06qJ7" style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "auto"
                }}>
                    <p className="ff-cubano fs-40">
                        Astra
                    </p>
                    <p className="fs-20">
                        Personal Training Made Personal
                    </p>
                    <div className="flex gap-10 flex-wrap">
                        <a href="/contact" className="solid-btn" style={{
                            backgroundColor: "var(--bg-comp-color-2)",
                            borderColor: "var(--bg-comp-color-2)",
                            borderRadius: "200px"
                        }}>
                            <p style={{
                                color: "var(--text-comp-color-2)"
                            }}>Become A Trainer</p>
                        </a>
                        <a href="resume.pdf" target="_blank" className="solid-btn" style={{
                            backgroundColor: "var(--bg-color-2)",
                            borderColor: "var(--bg-color-2)",
                            borderRadius: "200px"
                        }}>
                            <p>Hire A Trainer</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="light column align-center" style={{
                width: "100%",
                overflow: 'hidden',
            }}>
                <svg id="wave" style={{
                    height: "200px",
                    backgroundColor: "var(--rose)",
                    
                }} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: "translate(0, 0px)", opacity:"1", fill: "var(--bg-color-2)"}} d="M0,50L18.5,50C36.9,50,74,50,111,55C147.7,60,185,70,222,63.3C258.5,57,295,33,332,28.3C369.2,23,406,37,443,41.7C480,47,517,43,554,36.7C590.8,30,628,20,665,21.7C701.5,23,738,37,775,45C812.3,53,849,57,886,53.3C923.1,50,960,40,997,43.3C1033.8,47,1071,63,1108,65C1144.6,67,1182,53,1218,41.7C1255.4,30,1292,20,1329,23.3C1366.2,27,1403,43,1440,41.7C1476.9,40,1514,20,1551,25C1587.7,30,1625,60,1662,68.3C1698.5,77,1735,63,1772,55C1809.2,47,1846,43,1883,38.3C1920,33,1957,27,1994,20C2030.8,13,2068,7,2105,16.7C2141.5,27,2178,53,2215,65C2252.3,77,2289,73,2326,66.7C2363.1,60,2400,50,2437,46.7C2473.8,43,2511,47,2548,41.7C2584.6,37,2622,23,2640,16.7L2658.5,10L2658.5,100L2640,100C2621.5,100,2585,100,2548,100C2510.8,100,2474,100,2437,100C2400,100,2363,100,2326,100C2289.2,100,2252,100,2215,100C2178.5,100,2142,100,2105,100C2067.7,100,2031,100,1994,100C1956.9,100,1920,100,1883,100C1846.2,100,1809,100,1772,100C1735.4,100,1698,100,1662,100C1624.6,100,1588,100,1551,100C1513.8,100,1477,100,1440,100C1403.1,100,1366,100,1329,100C1292.3,100,1255,100,1218,100C1181.5,100,1145,100,1108,100C1070.8,100,1034,100,997,100C960,100,923,100,886,100C849.2,100,812,100,775,100C738.5,100,702,100,665,100C627.7,100,591,100,554,100C516.9,100,480,100,443,100C406.2,100,369,100,332,100C295.4,100,258,100,222,100C184.6,100,148,100,111,100C73.8,100,37,100,18,100L0,100Z"></path></svg>
            </div>
        </>
    )
}

export default Header
