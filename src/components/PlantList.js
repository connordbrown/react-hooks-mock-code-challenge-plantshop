import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, searchVal}) {

    function handleDelete(plantID) {
      fetch(`http://localhost:6001/plants/${plantID}`, {
        method: "DELETE"
      })
      .then(() => {
        const newPlantList = plants.filter(plant => {
          return plant.id !== plantID;
        })
        setPlants(newPlantList);
      })
    }

    let plantList;
    if (searchVal) {
      plantList = plants.filter(plant => {
        return plant.name.toLowerCase().includes(searchVal.toLowerCase());
      })
    } else {
      plantList = plants;
    }

    const plantsToView = plantList.map(plant => {
      return <PlantCard key={plant.id}
                        id={plant.id}
                        image={plant.image}
                        name={plant.name}
                        price={plant.price}
                        onDeleteClick={handleDelete}
             />
    })

  return (
    <ul className="cards">{plantsToView}</ul>
  );
}

export default PlantList;
