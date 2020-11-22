import { NextPage } from 'next'

const Page: NextPage = () => (
  <main className="container mx-auto h-screen">
    <div className="flex justify-center py-24">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://source.unsplash.com/random"
          alt="A cool pic from unsplash.com"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Next.js meets Tailwind CSS
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #nextjs
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #tailwindcss
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #typescript
          </span>
        </div>
      </div>
    </div>
  </main>
)

export default Page
