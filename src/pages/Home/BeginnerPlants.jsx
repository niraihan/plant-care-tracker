const beginnerPlants = [
    {
        id: 1,
        name: "Pothos",
        image: "https://i.ibb.co/LdSRXJ8g/Mq-Sfwpf-L9-Xy-Gy7i-Yj-G4-Ps-K-1200-80.jpg",
        careLevel: "Easy",
        description: "Thrives in low light and requires little care.",
    },
    {
        id: 2,
        name: "ZZ Plant",
        image: "https://i.ibb.co/Y42Z2cbS/shutterstock-2371995629.jpg",
        careLevel: "Easy",
        description: "Drought-tolerant and great for beginners.",
    },
    {
        id: 3,
        name: "Spider Plant",
        image: "https://i.ibb.co/27CBzf7H/ss.jpg",
        careLevel: "Easy",
        description: "Cleans air and grows well in hanging pots.",
    },
];

const BeginnerPlants = () => {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
                    🌿 Beginner-Friendly Plants
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {beginnerPlants.map((plant) => (
                        <div key={plant.id} className="card bg-base-100 shadow-md">
                            <figure>
                                <img
                                    src={plant.image}
                                    alt={plant.name}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-green-700">{plant.name}</h3>
                                <p className="text-sm text-gray-500 mb-1">
                                    Care Level: <span className="font-semibold">{plant.careLevel}</span>
                                </p>
                                <p className="text-sm">{plant.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeginnerPlants;
