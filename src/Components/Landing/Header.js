import { ReactComponent as YourSvg1 } from './Assets/undraw_junior_soccer_6sop.svg';
import { ReactComponent as YourSvg2 } from './Assets/undraw_personal_training_0dqn.svg';

const Header = () => {
    return (
        <>
            <div className="column padding-x-32 padding-top-80 HPNXA06qJ7 align-center color-inherit" style={{
                color: "var(--text-color-2)",
                zIndex: "1"
            }}>
                <p className="ff-title fs-40 text-center">
                    AIO Fitness Platform Made for Everyone
                </p>
                
            </div>
            <div className="flex align-end justify-center gap-20 margin-top-80" style={{
                width: "100%",
                overflow: "hidden",
                gap: "200px",
                height: "400px"
            }}>
                <div style={{
                    height: "100%"
                }}>
                    <YourSvg1/>
                </div>
                <div style={{
                    transform: "rotateY(-180deg)",
                    height: "100%"
                }}>
                    <YourSvg2/>
                </div>
            </div>
        </>
    )
}

export default Header
