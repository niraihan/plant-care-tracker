import Banner from "./Banner";
import BeginnerPlants from "./BeginnerPlants";
import NewPlants from "./NewPlants";
import TopMistakes from "./TopMistakes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewPlants></NewPlants>
            <TopMistakes></TopMistakes>
            <BeginnerPlants></BeginnerPlants>

        </div>
    );
};

export default Home;