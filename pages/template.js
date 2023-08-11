import React from 'react'
import Image from 'next/image'
import Script from 'next/script';
import generateTemplate from '../utils/generateTemplate'



function Template(example) {

    const exampleBackup = {
        artist_name: "Felipe Pavan",
        bio: "Born and raised in Brazil, Felipe Pavan developed an early fascination with music, particularly rock. His deep-rooted love for the genre became evident as he honed his skills and experimented with various instruments...",
        genres: ["Rock", "Alternative Rock", "RocknRoll", "Indie Rock", "Original Music"],
        special_characteristics: ["Performs in subways", "Dynamic stage presence", "Skillful guitar riffs", "Soul-stirring solos"],
        youtube: "https://www.youtube.com/felipepavan",
        instagram: "https://www.instagram.com/felipepavan",
        blog: "https://www.felipepavanblog.com"
    };
    console.log('example', example,  exampleBackup)

    return (
        generateTemplate(example)
    )
}

export default Template


// function Template() {
//   return (
//     <>
//     <Script
//         src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
//         strategy="lazyOnload"
//       />
//       <Script
//         src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
//         strategy="lazyOnload"
//       />

//     <div className="flex flex-col md:flex-row mx-10 mt-14 ml-10 md:mr-2 mr-15 pb-20">
//         {/* Left-side */}
//         <div className="w-full md:w-4/5 mr-10 p-4">

//             {/* Bio  */}

//             <h2 className="text-4xl font-bold uppercase text-customPurple">felipe Pavan</h2>
//             <div className="my-4">
//                 <div className='text-md'>
//                 Born and raised in Brazil" "Felipe Pavan developed an early fascination with music, particularly rock. His deep-rooted love for the genre became evident as he honed his skills and experimented with various instruments. Whether its his skillful guitar riffs, soul-stirring solos, or his dynamic stage presence, Felipes performances in the subways leave audiences in awe.

//                 <div className='mt-4 font-semibold'>his stage? the pulsating arteries of NYC - its subway. There, Felipe Pavan unleashes his musical prowess and transforms the underground tunnels into a vibrant rock arena. As he sets foot on the platform, the bustling crowd becomes his captive audience, eager to experience the electrifying performance about to unfold.</div>
//                 </div>
//                 <div className='mt-8 font-semibold text-customBlue'>
//                     Readmore
//                 </div>
//             </div>

//             {/* Popular stream */}

//             <h2 className="text-4xl font-bold uppercase text-customPurple mt-7">Popular Streams</h2>
//             <div className="mt-6">
//             <div className="flex items-center my-6">
//                 <span className="text-4xl text-customBlue mr-4 pt-2">
//                     <ion-icon name="play-outline"></ion-icon>
//                 </span>
//                 <div className="flex justify-between flex-1">
//                     <div>
//                         <div className="font-bold">Please Mr Postman | THE BEATLES</div>
//                         <div>TIMES SQUARE STATION</div>
//                     </div>
//                     <div className="font-bold text-gray-600">
//                         <span className="mr-2">2:00 / 07:42</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-center my-6">
//                 <span className="text-4xl text-customBlue mr-4 pt-2">
//                     <ion-icon name="play-outline"></ion-icon>
//                 </span>
//                 <div className="flex justify-between flex-1">
//                     <div>
//                         <div className="font-bold">Please Mr Postman | THE BEATLES</div>
//                         <div>TIMES SQUARE STATION</div>
//                     </div>
//                     <div className="font-bold text-gray-600">
//                         <span className="mr-2">2:00 / 07:42</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-center my-6">
//                 <span className="text-4xl text-customBlue mr-4 pt-2">
//                     <ion-icon name="play-outline"></ion-icon>
//                 </span>
//                 <div className="flex justify-between flex-1">
//                     <div>
//                         <div className="font-bold">Please Mr Postman | THE BEATLES</div>
//                         <div>TIMES SQUARE STATION</div>
//                     </div>
//                     <div className="font-bold text-gray-600">
//                         <span className="mr-2">2:00 / 07:42</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-center my-6">
//                 <span className="text-4xl text-customBlue mr-4 pt-2">
//                     <ion-icon name="play-outline"></ion-icon>
//                 </span>
//                 <div className="flex justify-between flex-1">
//                     <div>
//                         <div className="font-bold">Please Mr Postman | THE BEATLES</div>
//                         <div>TIMES SQUARE STATION</div>
//                     </div>
//                     <div className="font-bold text-gray-600">
//                         <span className="mr-2">2:00 / 07:42</span>
//                     </div>
//                 </div>
//             </div>

//             <div class="flex gap-4">
//                 <button class="border-black border w-1/3 text-xs py-1 rounded-md">Download the long bio</button>
//                 <button class="border-black border w-1/3 text-xs py-1 rounded-md">Download the one sheet</button>
//                 <button class="border-black border w-1/3 text-xs py-1 rounded-md">Download the short bio</button>
//             </div>
//             </div>

//             {/* Live Performance */}
//             <h2 className="text-4xl font-bold uppercase text-customPurple mt-14">Live Performance</h2>
//             <div className="flex gap-4 my-8">
//             <Image src="/video1.jpg" alt="video" className="w-1/3" width={300} height={200}/>
//             <Image src="/video1.jpg" alt="video" className="w-1/3" width={300} height={200}/>
//             <Image src="/video1.jpg" alt="video" className="w-1/3" width={300} height={200}/>
//             </div>

//             {/* InPress */}
//             <h2 className="text-4xl font-bold uppercase text-customPurple mt-10">In Press</h2>
//             <div className='mt-8'>
//                 <div className='text-sm text-customBlue my-1 font-medium'>
//                     <span className='text-black mr-4'>11.04.16</span>
//                     Duane Eubanks Mini-Documentary Screening Opening Night at YoFiFest 2017
//                 </div>
//                 <div className='text-sm text-customBlue my-1 font-medium'>
//                     <span className='text-black mr-4'>14.04.16</span>
//                     Duane Eubanks sparkles on DE3: Live at Maxwell
//                 </div>
//                 <div className='text-sm text-customBlue my-1 font-medium'>
//                     <span className='text-black mr-4'>14.04.16</span>
//                     Duane Eubanks sparkles on DE3: Live at Maxwell
//                 </div>
//                 <div className='text-sm text-customBlue my-1 font-medium'>
//                     <span className='text-black mr-4'>14.04.16</span>
//                     Duane Eubanks sparkles on DE3: Live at Maxwell
//                 </div>
//                 <div className='text-sm text-customBlue my-1 font-medium'>
//                     <span className='text-black mr-4'>14.04.16</span>
//                     Duane Eubanks sparkles on DE3: Live at Maxwell
//                 </div>
//                 <div className='text-sm text-customBlue my-1 font-medium'>
//                     <span className='text-black mr-4'>14.04.16</span>
//                     Duane Eubanks sparkles on DE3: Live at Maxwell
//                 </div>
//             </div>
//         </div>

//         {/* Right-Side Part */}

//         <div className="w-full md:w-2/5 p-4 pl-10">
//             <h2 className="text-4xl font-bold uppercase text-customPurple">Follow on</h2>
//             <div className='my-4 px-1 flex'>
//                 <span className='text-2xl text-customBlue mr-4 pt-2 '>
//                     <ion-icon name="logo-twitter"></ion-icon>
//                 </span>
//                 <span className='text-2xl text-customBlue mr-4 pt-2 '>
//                     <ion-icon name="logo-instagram"></ion-icon>
//                 </span>
//                 <span className='text-2xl text-customBlue mr-4 pt-2 '>
//                     <ion-icon name="logo-youtube"></ion-icon>
//                 </span>
//                 <span className='inline mr-4 pt-2'>
//                 <Image className='h-6 w-6 ' src='https://i.ibb.co/6tC39bV/icons8-spotify-50.png' alt='spotify' width={300} height={200}/>
//                 </span>
//                 <span className='text-2xl text-customBlue mr-4 pt-2 '>
//                     <ion-icon name="logo-soundcloud"></ion-icon>
//                 </span>
//             </div>

//             <h2 className="text-4xl font-bold uppercase text-customPurple mt-10">Book Now</h2>
//             <div className='my-6 px-1 flex'>
//                 <button className='text-xs bg-customBlue text-white px-3 py-2 rounded-md mr-3'>
//                     Live Show
//                 </button>
//                 <button className='text-xs bg-customBlue text-white px-3 py-2 rounded-md'>
//                     Upcoming Events
//                 </button>
//             </div>

//             {/* Photos */}
//             <h2 className="text-4xl font-bold uppercase text-customPurple my-10">Press Photos</h2>
//             <h3 className='font-bold text-gray-600 text-center mb-2 '>Right-click to download.</h3>
//             <div class="grid grid-cols-2 gap-4">
//                 <Image src="/photo1.jpg" alt="photo" width={300} height={200}/>
//                 <Image src="/photo2.jpg" alt="photo" width={300} height={200}/>
//                 <Image src="/photo1.jpg" alt="photo" width={300} height={200}/>
//                 <Image src="/photo2.jpg" alt="photo" width={300} height={200}/>
//                 <Image src="/photo1.jpg" alt="photo" width={300} height={200}/>
//                 <Image src="/photo2.jpg" alt="photo" width={300} height={200}/>
//             </div>
//             <h3 className='text-customPurple text-lg text-center mt-4 pl-10 uppercase flex items-center'>
//             <span className='text-3xl text-customPurple mr-4'>
//                 <ion-icon name="download-outline"></ion-icon>
//             </span>
//             <span>share photo gallery</span>
//             </h3>

//             {/* Genres */}
//             <h2 className="text-4xl font-bold uppercase text-customPurple my-7">Genres</h2>
//             <div className='my-8'>
//                 <button className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>Rock</button>
//                 <button className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>Alternative Rock</button>
//                 <button className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>RocknRoll</button>
//                 <button className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>Indie Rock</button>
//                 <button className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>Original Music</button>
                
//             </div>

//         </div>
//     </div>
//     </>
    
//   )
// }

// export default Template