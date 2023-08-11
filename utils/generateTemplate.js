import React, { useState, useEffect }  from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-sY6edZISImjEbAwKeEBD5lLZ",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const GenerateTemplate = ({ data }) => {
    const [response, setResponse] = useState(null);
    const {
        artist_name= "",
        bio = "",
        genres = [],
        special_characteristics = [],
        youtube = "",
        instagram = "",
        blog = ""
    } = data || {};

    useEffect(() => {
        const prompt = `Generate a compelling artist bio for a ${data.genres[0]} musician named ${data.artist_name}, who is known for their ${data.special_characteristics[0]}.`
        const fetchData = async () => {
          // your OpenAI API call logic here
        //   const result = await openai.createCompletion("text-davinci-002", {
        //     prompt: prompt ,
        //     temperature: 0.5,
        //     max_tokens: 60,
        //     top_p: 1.0,
        //     frequency_penalty: 0.5,
        //     presence_penalty: 0.0,
        //    });
           const result = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:  prompt,
            temperature: 0.7
          });
          setResponse(result);
        };
        fetchData();
      }, [data]);

    // const response = await openai.createCompletion("text-davinci-002", {
    //     prompt: `Generate a compelling artist bio for a ${genres[0]} musician named ${artist_name}, who is known for their ${special_characteristics[0]}.` ,
    //     temperature: 0.5,
    //     max_tokens: 60,
    //     top_p: 1.0,
    //     frequency_penalty: 0.5,
    //     presence_penalty: 0.0,
    // });
    // use data to generate content (bio)  <- OpenAI
    // incorporate webscrape into the prompt
    //


    // {
    //     "warning": "This model version is deprecated. Migrate before January 4, 2024 to avoid disruption of service. Learn more https://platform.openai.com/docs/deprecations",
    //     "id": "cmpl-7mC97hMs9H5rah1kF58UVB86yWREy",
    //     "object": "text_completion",
    //     "created": 1691720789,
    //     "model": "text-davinci-003",
    //     "choices": [
    //       {
    //         "text": "\n\nfasdfa is a musician from the small town of asdf",
    //         "index": 0,
    //         "logprobs": null,
    //         "finish_reason": "length"
    //       }
    //     ],
    //     "usage": {
    //       "prompt_tokens": 29,
    //       "completion_tokens": 16,
    //       "total_tokens": 45
    //     }
    //   }
      
    console.log('response: ', response)

    return response ? (
    <>
    <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
      
    <div className="flex flex-col md:flex-row mx-10 mt-14 ml-10 md:mr-2 mr-15 pb-20">
    
    {/* Left-side */}
        <div className="w-full md:w-4/5 mr-10 p-4">

        {/* Bio  */}

        <h2 className="text-4xl font-bold uppercase text-customPurple">{artist_name}</h2>
        <div className="my-4">
            <div className='text-md'>
            {response.data?.choices[0]?.text}
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

            <div className="flex gap-4">
                <button className="border-black border w-1/3 text-xs py-1 rounded-md">Download the long bio</button>
                <button className="border-black border w-1/3 text-xs py-1 rounded-md">Download the one sheet</button>
                <button className="border-black border w-1/3 text-xs py-1 rounded-md">Download the short bio</button>
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

        <div className="w-full md:w-2/5 p-4 pl-2">
        <h2 className="text-4xl font-bold uppercase text-customPurple">Follow on</h2>
        <div className='my-4 px-1 flex'>
          <Link href={youtube}>
            <span className='text-2xl text-customBlue mr-4 pt-2 '>
                <ion-icon name="logo-twitter"></ion-icon>
            </span>
          </Link>
          <Link href={youtube}>

            <span className='text-2xl text-customBlue mr-4 pt-2 '>
                <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </Link>
          <Link href={youtube}>

            <span className='text-2xl text-customBlue mr-4 pt-2 '>
                <ion-icon name="logo-youtube"></ion-icon>
            </span>
          </Link>
          <Link href={youtube}>

            <span className='inline mr-4 pt-2'>
            <Image className='h-6 w-6 ' src='https://i.ibb.co/6tC39bV/icons8-spotify-50.png' alt='spotify' width={300} height={200}/>
            </span>
          </Link>
          <Link href={youtube}>

            <span className='text-2xl text-customBlue ml-2 mr-4 pt-2 '>
                <ion-icon name="logo-soundcloud"></ion-icon>
            </span>
          </Link>
        </div>

        <h2 className="text-4xl font-bold uppercase text-customPurple mt-10">Book Now</h2>
        <div className='my-6 px-1 flex '>
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
        <div className="grid grid-cols-2 gap-4">
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
              {genres?.map((genre, index) => (
                <button key={index} className='text-black rounded-full text-xs bg-slate-200 mx-2 py-2 px-3 mb-3'>{genre}</button>
            ))}
        </div>

      </div>
    </div>
    </>
  ) :
  (
      <div>
          Template
      </div>
  )
}

export default GenerateTemplate;

