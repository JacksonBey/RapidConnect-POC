import { useState } from "react";
import axios from "axios";
import GenerateTemplate from "../utils/generateTemplate";
import ScrapeUrlContent from "../utils/scrapeUrlContent";

import SelectionRow from "../components/form/selectionRow";


function ArtistForm() {
  const initialState = {
    artist_name: "",
    bio: "",
    genres: [],
    special_characteristics: [],
    youtube: "",
    instagram: "",
    blog: ""
  };
  const [formState, setFormState] = useState(initialState);
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentChar, setCurrentChar] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleInputChange = (event, field) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleBubbleInput = (event, field) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const values = [...formState[field]];
      if (field === "genres") {
        values.push(currentGenre);
        setCurrentGenre("");
      } else if (field === "special_characteristics") {
        values.push(currentChar);
        setCurrentChar("");
      }
      setFormState({
        ...formState,
        [field]: values
      });
    }
  };

  const handleRemoveBubble = (index, field) => {
    const values = [...formState[field]];
    values.splice(index, 1);
    setFormState({
      ...formState,
      [field]: values
    });
  };

  const images = [
    {title: "Funny", url: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'},
    {title: "Orange", url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg'},
    {title: "Silly", url: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='},
  ]

  const handleImageSelect = (title) => {
    setSelectedImage(title);
    setFormState({
      ...formState,
      selectedImage: title,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = formState;
    // const response = await axios.post("/api/save_artist", payload);
    // handle response/error here...
    // generateTemplate(payload);
    setHasSubmitted(true);
    // scrapeUrlContent(formState.instagram)

  };

  console.log('SelectionRow: ', SelectionRow)

  return (
    <div className="container mx-auto mt-5 max-h-[80%] flex ">
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
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Genres:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" type="text" name="genres" value={currentGenre} onChange={(e) => setCurrentGenre(e.target.value)} onKeyPress={(e) => handleBubbleInput(e, "genres")} />
          {formState.genres.map((genre, index) => (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-[#3C6478] rounded-full m-1" key={index}>
              {genre}
              <button className="ml-1" type="button" onClick={() => handleRemoveBubble(index, "genres")}>
                X
              </button>
            </span>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Special Characteristics:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" type="text" name="special_characteristics" value={currentChar} onChange={(e) => setCurrentChar(e.target.value)} onKeyPress={(e) => handleBubbleInput(e, "special_characteristics")} />
          {formState.special_characteristics.map((characteristic, index) => (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-[#3C6478] rounded-full m-1" key={index}>
              {characteristic}
              <button className="ml-1" type="button" onClick={() => handleRemoveBubble(index, "special_characteristics")}>
                X
              </button>
            </span>
          ))}
        </div> */}
               <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Genres:
            <span className="text-gray-600 text-xs ml-2">(Press Enter to submit a genre)</span>
          </label>
          <div className="relative">
            <input className="shadow appearance-none border rounded w-full pb-0 mb-0 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" type="text" name="genres" value={currentGenre} onChange={(e) => setCurrentGenre(e.target.value)} onKeyPress={(e) => handleBubbleInput(e, "genres")} />
            <span className="absolute inset-y-0 right-0 mr-3 my-auto h-4" > &#9166;</span>
          </div>
          {formState.genres.map((genre, index) => (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-[#0d3d56] hover:bg-[#3c6478] rounded-full m-1" key={index}>
              
              <button type="button" onClick={() => handleRemoveBubble(index, "genres")}>
              {genre} <span className="ml-1" >X</span>
              </button>
            </span>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Special Characteristics:
            <span className="text-gray-600 text-xs ml-2">(Press Enter to submit a characteristic)</span>
          </label>
          <div className="relative">
            <input className="shadow appearance-none border rounded w-full pb-0 mb-0 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" type="text" name="special_characteristics" value={currentChar} onChange={(e) => setCurrentChar(e.target.value)} onKeyPress={(e) => handleBubbleInput(e, "special_characteristics")} />
            <span className="absolute inset-y-0 right-0 mr-3 my-auto h-4" > &#9166;</span> 
          </div>
          {formState.special_characteristics.map((characteristic, index) => (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-[#0d3d56] hover:bg-[#3c6478] rounded-full m-1" key={index}>
              <button type="button" onClick={() => handleRemoveBubble(index, "special_characteristics")}>
              {characteristic}  <span className="ml-1">X</span>
              </button>
            </span>
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Template Selection:
          </label>
          {SelectionRow && <SelectionRow onSelect={handleImageSelect} images={images} />}
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-[#0d3d56] hover:bg-[#3c6478] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>

      </form>
      <div className="">
        {hasSubmitted &&  
          <div className="bg-white w-full h-screen p-10 m-5 rounded shadow-lg overflow-auto">
            <GenerateTemplate data={formState}/>
          </div>
        }
      </div>
    </div>
  );
}

export default ArtistForm;

