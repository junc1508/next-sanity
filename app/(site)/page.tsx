import { getProjects } from "@/sanity/sanity-utils"
import Link from 'next/link';
import Image from 'next/image';

//we use await, so must be async
export default async function Home() {
  const projects = await getProjects();
  return (
  <div>
    <h1 className="text-7xl font-extrabold">Hello I&apos;m&nbsp;
    <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 
    bg-clip-text text-transparent">
       Jun
    </span>
    !
    </h1>
    <p className="mt-3 text-xl text-gray-600">Aloha everyone! Check out my projects!</p>


    <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
    {/* responsive: large screen grid-col-3, medium 2, default 1  */}
  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        // each project will link to its own page
        <Link 
        href={`/projects/${ project.slug }`}
          key = { project._id } 
          // mouse hover makes it bigger (105) with blue border
          className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500
          transition"
        >
          {/* if there is image, use the format */}
          { project.image &&(
            <Image
              src={ project.image }
              alt={ project.name }
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
              />
          )} 
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 
      bg-clip-text text-transparent">
            { project.name }
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
}
