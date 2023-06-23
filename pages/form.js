import { useState } from "react";
import axios from "axios";

function ArtistForm() {
  const initialState = {
    artist_id: "",
    artist_name: "",
    gender: "",
    profile_image: null,
    description: "",
    // and so on for all your fields...
    talents: [],
    genres: [],
    media_links: []
  };

  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormState({
      ...formState,
      profile_image: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // transform formState into desired payload
    const payload = {
      artist_name: formState.artist_name,
      bio: formState.description,
      photos: [URL.createObjectURL(formState.profile_image)],
      music_links: [formState.website, formState.spotify, formState.applemusic, formState.soundcloud],
      social_links: [formState.facebook, formState.instagram, formState.twitter, formState.linkedin, formState.tiktok],
      // add other fields as required
    };

    // POST request to your Python endpoint
    const response = await axios.post("/api/save_artist_epk", payload);

    // handle response/error here...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Artist ID:
        <input type="text" name="artist_id" onChange={handleInputChange} />
      </label>
      {/* render your other form fields here... */}
      <label>
        Artist Name:
        <input type="text" name="artist_name" onChange={handleInputChange} />
      </label>
      {/* ... */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ArtistForm;

