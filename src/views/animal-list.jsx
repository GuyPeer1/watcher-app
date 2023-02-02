import { AnimalPreview } from '../cmps/animal-preview.jsx'

export function AnimalList({ animalInfos }) {

    return (
        <section className="animal-list">
            <h2>Rare Animals</h2>
            <ul className='animals'>{animalInfos.map((animalInfo, index) => (
                <AnimalPreview key={index} animal={animalInfo} />
            ))}
            </ul>
        </section>
    )
}

