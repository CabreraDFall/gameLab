import { useState } from "react";
import useFetchdata from "../../hook/useFetchdata";
import ImageDisplay from "../../components/imageDisplay/ImageDisplay";
import { getPokemonUrl } from "../../API/api";

function Pokemon() {
  // Hacer datos aleatorios - Pokemon principal
  const getRandomPokemonId = () => Math.floor(Math.random() * 151) + 1;
  const [pokemonId, setPokemonId] = useState(getRandomPokemonId);
  const URL = getPokemonUrl(pokemonId);

  const [hidden, setHidden] = useState(true);

  const { data, loading, error } = useFetchdata(URL);

  // Traer datos.✅✅

  /// Declaracion de variables (estados)

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}...</p>;

  // Mostrar datos.✅✅

  // Hacer multiple opciones

  return (
    <div>
      {data && data.sprites.front_default ? (
        <div>
          <ImageDisplay
            image={data.sprites.front_default}
            alt={"Sprite"}
            dimension="medium"
            hidden={hidden ? "hidden" : ""}
          />
        </div>
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

export default Pokemon;
