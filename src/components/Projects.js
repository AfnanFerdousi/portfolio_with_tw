import React from "react";

const Projects = () => {
  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-center">My Best Projects</h1>
      <div className="px-20 pt-6 grid grid-cols-3 gap-[15px]">
        {/* 1 */}
        <div className="card bg-base-200 shadow-xl">
          <figure className="p-4">
            <img
              src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg"
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div className="py-4 px-6">
            <h2 className="card-title">Brush Hour</h2>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
            <div className="card-actions justify-end mt-6">
              <a className="btn btn-outline btn-primary">GitHub</a>
              <a className="btn btn-primary">Live</a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card bg-base-200 shadow-xl">
          <figure className="p-4">
            <img
              src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg"
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div className="py-4 px-6">
            <h2 className="card-title">Brush Hour</h2>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
            <div className="card-actions justify-end mt-6">
              <a className="btn btn-outline btn-primary">GitHub</a>
              <a className="btn btn-primary">Live</a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card bg-base-200 shadow-xl">
          <figure className="p-4">
            <img
              src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg"
              alt="Shoes"
              className="rounded-lg"
            />
          </figure>
          <div className="py-4 px-6">
            <h2 className="card-title">Brush Hour</h2>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
            <div className="card-actions justify-end mt-6">
              <a className="btn btn-outline btn-primary">GitHub</a>
              <a className="btn btn-primary">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
