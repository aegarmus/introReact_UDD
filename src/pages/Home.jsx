import { Header } from "../components/Header/Header";
import { DuckCard } from "../components/DuckCard/DuckCard";
import './Home.css'


import data from '../assets/data/dataImg.json'
 

export const HomePage = () => {
    return (
        <>
            <Header
                name="Alan"
                felicitaciones="Les Deseo unas muy felices, reponedoras y sin tanta distorsion Fiestas Patrias"
            />
            <section className="duck-card">
                {
                    data.map((duck, index) => (
                        <div key={index}>
                            <DuckCard  
                                img={duck.img}
                                title={duck.name}
                                alt={duck.alt}
                                description={duck.description}
                            />
                        </div>
                    ))
                }
            </section>
        </>
    );
}