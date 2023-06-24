import { useState } from "react";
import axios from "axios";

function ArtistForm() {
  const initialState = {
    artist_name: "",
    bio: "",
    genres: [""],
    special_characteristics: [""],
    youtube: "",
    instagram: "",
    blog: ""
  };

  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event, index, field) => {
    const values = [...formState[field]];
    values[index] = event.target.value;
    setFormState({
      ...formState,
      [field]: values
    });
  };

  const handleAddFields = (field) => {
    const values = [...formState[field]];
    values.push("");
    setFormState({
      ...formState,
      [field]: values
    });
  };

  const handleRemoveFields = (index, field) => {
    const values = [...formState[field]];
    values.splice(index, 1);
    setFormState({
      ...formState,
      [field]: values
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = formState;
    const response = await axios.post("/api/save_artist", payload);
    // handle response/error here...
  };

  return (
    <div className="container mx-auto mt-5">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Artist Name:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="artist_name" onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Bio:
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="bio" onChange={handleInputChange}></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Genres:
          </label>
          {formState.genres.map((genre, index) => (
            <div className="flex mt-2" key={index}>
              <input className="shadow appearance-none border rounded w-[82%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="genres" value={genre} onChange={(event) => handleInputChange(event, index, "genres")} />
              <button className="w-[7%] h-full ml-2 bg-[#829356] hover:bg-[#5c683d] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleAddFields("genres")}>
                +
              </button>
              {formState.genres.length > 1 && (
                <button className="w-[7%] h-full ml-2 bg-[#ad2a1a] hover:bg-[#9a2617] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleRemoveFields(index, "genres")}>
                  -
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Special Characteristics:
          </label>
          {formState.special_characteristics.map((characteristic, index) => (
            <div className="flex mt-2" key={index}>
              <input className="shadow appearance-none border rounded w-[82%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="special_characteristics" value={characteristic} onChange={(event) => handleInputChange(event, index, "special_characteristics")} />
              <button className="w-[7%] h-full w-[7%] h-full ml-2 bg-[#829356] hover:bg-[#5c683d] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleAddFields("special_characteristics")}>
                +
              </button>
              {formState.special_characteristics.length > 1 && (
                <button className="w-[7%] h-full ml-2 bg-[#ad2a1a] hover:bg-[#9a2617] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleRemoveFields(index, "special_characteristics")}>
                  -
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Youtube Channel:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="youtube" onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Instagram:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="instagram" onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Blog:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="blog" onChange={handleInputChange} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArtistForm;

