import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

// const initialState = {
  // artist_name: "",
  // bio: "",
  // genres: [],
  // special_characteristics: [],
  // youtube: "",
  // instagram: "",
  // blog: "

const GenerateTemplate = ({ data }) => {
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
    <div className="w-4/5  mr-10 p-4">

      {/* Bio  */}

      <h2 className="text-4xl font-bold uppercase text-customPurple">{data.artist_name}</h2>
      <div className="my-4">
          <div className='text-md'>
          {data.bio}
          </div>
      </div>

      {/* Popular stream */}

      <h2 className="text-4xl font-bold uppercase text-customPurple mt-7">Popular Streams</h2>
      <div className="mt-6">
        <div className="flex items-center my-6">
            <span className="text-4xl text-customBlue mr-4 pt-2">
                <ion-icon name="play-outline"></ion-icon>
            </span>
            <div className="flex justify-between flex-1">
                <div>
                    <div className="font-bold">Please Mr Postman | THE BEATLES</div>
                    <div>TIMES SQUARE STATION</div>
                </div>
                <div className="font-bold text-gray-600">
                    <span className="mr-2">2:00 / 07:42</span>
                </div>
            </div>
        </div>
        <div className="flex items-center my-6">
            <span className="text-4xl text-customBlue mr-4 pt-2">
                <ion-icon name="play-outline"></ion-icon>
            </span>
            <div className="flex justify-between flex-1">
                <div>
                    <div className="font-bold">Please Mr Postman | THE BEATLES</div>
                    <div>TIMES SQUARE STATION</div>
                </div>
                <div className="font-bold text-gray-600">
                    <span className="mr-2">2:00 / 07:42</span>
                </div>
            </div>
        </div>
        <div className="flex items-center my-6">
            <span className="text-4xl text-customBlue mr-4 pt-2">
                <ion-icon name="play-outline"></ion-icon>
            </span>
            <div className="flex justify-between flex-1">
                <div>
                    <div className="font-bold">Please Mr Postman | THE BEATLES</div>
                    <div>TIMES SQUARE STATION</div>
                </div>
                <div className="font-bold text-gray-600">
                    <span className="mr-2">2:00 / 07:42</span>
                </div>
            </div>
        </div>
        <div className="flex items-center my-6">
            <span className="text-4xl text-customBlue mr-4 pt-2">
                <ion-icon name="play-outline"></ion-icon>
            </span>
            <div className="flex justify-between flex-1">
                <div>
                    <div className="font-bold">Please Mr Postman | THE BEATLES</div>
                    <div>TIMES SQUARE STATION</div>
                </div>
                <div className="font-bold text-gray-600">
                    <span className="mr-2">2:00 / 07:42</span>
                </div>
            </div>
        </div>

        <div class="flex gap-4">
            <button class="border-black border w-1/3 text-xs py-1 rounded-md">Download the long bio</button>
            <button class="border-black border w-1/3 text-xs py-1 rounded-md">Download the one sheet</button>
            <button class="border-black border w-1/3 text-xs py-1 rounded-md">Download the short bio</button>
        </div>
        </div>

        {/* Live Performance */}
        <h2 className="text-4xl font-bold uppercase text-customPurple mt-14">Live Performance</h2>
        <div className="flex gap-4 my-8">
        <Image src="/video1.jpg" alt="video" className="w-1/3" width={300} height={200}/>
        <Image src="/video1.jpg" alt="video" className="w-1/3" width={300} height={200}/>
        <Image src="/video1.jpg" alt="video" className="w-1/3" width={300} height={200}/>
        </div>

        {/* InPress */}
        <h2 className="text-4xl font-bold uppercase text-customPurple mt-10">In Press</h2>
        <div className='mt-8'>
            <div className='text-sm text-customBlue my-1 font-medium'>
                <span className='text-black mr-4'>11.04.16</span>
                Duane Eubanks Mini-Documentary Screening Opening Night at YoFiFest 2017
            </div>
            <div className='text-sm text-customBlue my-1 font-medium'>
                <span className='text-black mr-4'>14.04.16</span>
                Duane Eubanks sparkles on DE3: Live at Maxwell
            </div>
            <div className='text-sm text-customBlue my-1 font-medium'>
                <span className='text-black mr-4'>14.04.16</span>
                Duane Eubanks sparkles on DE3: Live at Maxwell
            </div>
            <div className='text-sm text-customBlue my-1 font-medium'>
                <span className='text-black mr-4'>14.04.16</span>
                Duane Eubanks sparkles on DE3: Live at Maxwell
            </div>
            <div className='text-sm text-customBlue my-1 font-medium'>
                <span className='text-black mr-4'>14.04.16</span>
                Duane Eubanks sparkles on DE3: Live at Maxwell
            </div>
            <div className='text-sm text-customBlue my-1 font-medium'>
                <span className='text-black mr-4'>14.04.16</span>
                Duane Eubanks sparkles on DE3: Live at Maxwell
            </div>
        </div>
        </div>

        {/* Right-Side Part */}

        <div className="w-2/5  p-4 pl-10">
        <h2 className="text-4xl font-bold uppercase text-customPurple">Follow on</h2>
        <div className='my-4 px-1 flex'>
          <Link href={data.youtube}>
            <span className='text-2xl text-customBlue mr-4 pt-2 '>
                <ion-icon name="logo-twitter"></ion-icon>
            </span>
          </Link>
          <Link href={data.youtube}>

            <span className='text-2xl text-customBlue mr-4 pt-2 '>
                <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </Link>
          <Link href={data.youtube}>

            <span className='text-2xl text-customBlue mr-4 pt-2 '>
                <ion-icon name="logo-youtube"></ion-icon>
            </span>
          </Link>
          <Link href={data.youtube}>

            <span className='inline mr-4 pt-2'>
            <Image className='h-6 w-6 ' src='https://i.ibb.co/6tC39bV/icons8-spotify-50.png' alt='spotify' width={300} height={200}/>
            </span>
          </Link>
          <Link href={data.youtube}>

            <span className='text-2xl text-customBlue mr-4 pt-2 '>
                <ion-icon name="logo-soundcloud"></ion-icon>
            </span>
          </Link>
        </div>

        <h2 className="text-4xl font-bold uppercase text-customPurple mt-10">Book Now</h2>
        <div className='my-6 px-1 flex'>
            <button className='text-xs bg-customBlue text-white px-3 py-2 rounded-md mr-3'>
                Live Show
            </button>
            <button className='text-xs bg-customBlue text-white px-3 py-2 rounded-md'>
                Upcoming Events
            </button>
        </div>

        {/* Photos */}
        <h2 className="text-4xl font-bold uppercase text-customPurple my-10">Press Photos</h2>
        <h3 className='font-bold text-gray-600 text-center mb-2 '>Right-click to download.</h3>
        <div class="grid grid-cols-2 gap-4">
            <Image src="https://picsum.photos/200" alt="photo" width={300} height={200}/>
            <Image src="https://picsum.photos/200" alt="photo" width={300} height={200}/>
            <Image src="https://picsum.photos/200" alt="photo" width={300} height={200}/>
            <Image src="https://picsum.photos/200" alt="photo" width={300} height={200}/>
            <Image src="https://picsum.photos/200" alt="photo" width={300} height={200}/>
            <Image src="https://picsum.photos/200" alt="photo" width={300} height={200}/>
        </div>
        <h3 className='text-customPurple text-lg text-center mt-4 pl-10 uppercase flex items-center'>
        <span className='text-3xl text-customPurple mr-4'>
            <ion-icon name="download-outline"></ion-icon>
        </span>
        <span>share photo gallery</span>
        </h3>
        {/* Genres */}
          <h2 className="text-4xl font-bold uppercase text-customPurple my-7">Genres</h2>
          <div className='my-8'>
              {data.genres?.map((genre, index) => (
                <button key={index} className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>{genre}</button>
            ))}
        </div>

      </div>
    </div>
    </>
  )
}

export default GenerateTemplate;


        // {/* The rest of the template, but replace hard-coded values with values from `data` object */}

        // {/* Bio */}
        // <h2 className="text-4xl font-bold uppercase text-customPurple">{data.name}</h2>

        // {/* Live Performance */}
        // <h2 className="text-4xl font-bold uppercase text-customPurple mt-14">Live Performance</h2>
        // <div className="flex gap-4 my-8">
        //     {data.videos?.map((video, index) => (
        //         <iframe
        //             key={index}
        //             width="300"
        //             height="200"
        //             src={`https://www.youtube.com/embed/${video}`}
        //             frameBorder="0"
        //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //             allowFullScreen
        //         ></iframe>
        //     ))}
        // </div>

        // {/* Press Photos */}
        // <h2 className="text-4xl font-bold uppercase text-customPurple my-10">Press Photos</h2>
        // <div class="grid grid-cols-2 gap-4">
        //     {data.photos?.map((photo, index) => (
        //         <Image key={index} src={photo} alt="photo" width={300} height={200}/>
        //     ))}
        // </div>
        // {/* Instagram */}
        // <h2 className="text-4xl font-bold uppercase text-customPurple my-10">Instagram</h2>
        // <a href={data.instagram}>{data.instagram}</a>

        // {/* Blog */}
        // <h2 className="text-4xl font-bold uppercase text-customPurple my-10">Blog</h2>
        // <a href={data.blog}>{data.blog}</a>

        // // {/* Genres */}
        // // <h2 className="text-4xl font-bold uppercase text-customPurple my-7">Genres</h2>
        // // <div className='my-8'>
        // //     {data.genres?.map((genre, index) => (
        // //         <button key={index} className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>{genre}</button>
        // //     ))}
        // // </div>

        // // {/* Special Characteristics */}
        // // <h2 className="text-4xl font-bold uppercase text-customPurple my-7">Special Characteristics</h2>
        // // <div className='my-8'>
        // //     {data.special_characteristics?.map((characteristic, index) => (
        // //         <button key={index} className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>{characteristic}</button>
        // //     ))}
        // // </div>
      