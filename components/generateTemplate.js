import React from 'react';
import Image from 'next/image';
import Script from 'next/script';


// const data = {
//   name: 'Felipe Pavan',
//   videos: ['uecGBt4JjJY', 'anotherVideoId', 'thirdVideoId'],
//   photos: ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200'],
//   genres: ['Rock', 'Alternative Rock', 'RocknRoll', 'Indie Rock', 'Original Music']
// };

const Template = ({ data }) => {
  return (
    <>
    <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
      
    <div className="flex mx-10 mt-14 ml-24 pb-20">
        {/* The rest of the template, but replace hard-coded values with values from `data` object */}

        {/* Bio */}
        <h2 className="text-4xl font-bold uppercase text-customPurple">{data.name}</h2>

        {/* Live Performance */}
        <h2 className="text-4xl font-bold uppercase text-customPurple mt-14">Live Performance</h2>
        <div className="flex gap-4 my-8">
            {data.videos.map((video, index) => (
                <iframe
                    key={index}
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${video}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ))}
        </div>

        {/* Press Photos */}
        <h2 className="text-4xl font-bold uppercase text-customPurple my-10">Press Photos</h2>
        <div class="grid grid-cols-2 gap-4">
            {data.photos.map((photo, index) => (
                <Image key={index} src={photo} alt="photo" width={300} height={200}/>
            ))}
        </div>

        {/* Genres */}
        <h2 className="text-4xl font-bold uppercase text-customPurple my-7">Genres</h2>
        <div className='my-8'>
            {data.genres.map((genre, index) => (
                <button key={index} className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>{genre}</button>
            ))}
        </div>
    </div>
    </>
  )
}

export default Template;
