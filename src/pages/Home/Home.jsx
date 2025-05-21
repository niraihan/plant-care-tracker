import useTitle from "../../hook/useTitle";
import Banner from "./Banner";
import BeginnerPlants from "./BeginnerPlants";
import NewPlants from "./NewPlants";
import TopMistakes from "./TopMistakes";


const Home = () => {
    useTitle("Plants - Home");
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