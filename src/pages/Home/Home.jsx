import useTitle from "../../hook/useTitle";
import Banner from "./Banner";
import BeginnerPlants from "./BeginnerPlants";
import CategorySection from "./CategorySection";
import NewPlants from "./NewPlants";
import Newsletter from "./Newsletter";
import TopMistakes from "./TopMistakes";


const Home = () => {
    useTitle("Plants - Home");
    return (
        <div>
            <Banner></Banner>
            <NewPlants></NewPlants>
            <CategorySection></CategorySection>
            <TopMistakes></TopMistakes>
            <BeginnerPlants></BeginnerPlants>
            <Newsletter></Newsletter>
            

        </div>
    );
};

export default Home;