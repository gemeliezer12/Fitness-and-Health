import Header from "./Header"
import Plans from "./Plans"
import { ReactComponent as SVG } from "./Assets/undraw_education_f8ru.svg"
import { ReactComponent as SG } from "./Assets/undraw_meditation_re_gll0.svg"

const Index = () => {
    return (
        <>
            <Header/>
            <div className="HPNXA06qJ7">
                <div className="column gap-120 margin-top-120">
                    <div className="CgaRRAc6to padding-x-32">
                        <div className="oq0sHQbGE1 svg align-center justify-center flex">
                            <SVG/>
                        </div>
                        <div className="column justify-center oq0sHQbGE1">
                            <p className="ff-title fs-32">Grow & Experience</p>
                            <p className="fs-20">
                                Experienced or not, we believe there is always room to grow and we made that easier than ever. Experience a straightforward platform designed to help you and your business grow
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Plans/>
        </>
    )
}

export default Index
