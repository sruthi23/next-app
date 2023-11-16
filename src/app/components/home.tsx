import Image from 'next/image'
export default function Home() {
  return (
    <>
      <div className="grid grid-rows-2 lg:grid-cols-2 bg-gray-100">
        <div>
          <Image
            src="/kayan-baby-04ZMnFOPRdQ-unsplash.jpg" // Path to your image inside the "public" folder
            alt="Description of your image"
            width={900}
            height={800}
          />
        </div>
        <div className="py-16 md:content-center lg:py-10">
          <p className="text-center text-lg py-10">Coming Soon</p>
          <div className="flex gap-2 lg:py-18 lg:gap-8">
            <div className="py-8 pl-2 lg:pl-32 lg:py-14">
              <Image
                src="/danie-franco-NV_IPwv0Saw-unsplash.jpg" // Path to your image inside the "public" folder
                alt="Description of your image"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/annie-spratt-aRJGeiWYxX8-unsplash.jpg" // Path to your image inside the "public" folder
                alt="Description of your image"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
