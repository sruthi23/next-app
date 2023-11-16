import Image from 'next/image'
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <Image
          src="/kayan-baby-04ZMnFOPRdQ-unsplash.jpg" // Path to your image inside the "public" folder
          alt="Description of your image"
          width={800}
          height={700}
        />
      </div>

      <div className="flex-1 flex-col lg:flex-row ml-24 flex-wrap">
        <div className="flex-1 lg:pl-20 pl-10 py-20 text-5xl font-light text-left font-serif">
          <p>Coming Soon</p>
        </div>
        <div className="flex flex-col md:flex-row py-4 mr-28 flex-wrap">
          <div className="flex-1 py-10">
            <Image
              src="/danie-franco-NV_IPwv0Saw-unsplash.jpg" // Path to your image inside the "public" folder
              alt="Description of your image"
              width={200}
              height={100}
              className="max-w-sm mx-auto"
            />
          </div>
          <div className="mr-28">
            <Image
              src="/annie-spratt-aRJGeiWYxX8-unsplash.jpg" // Path to your image inside the "public" folder
              alt="Description of your image"
              width={200}
              height={100}
              className="max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
