import React from "react";

const Contact = () => {
  return (
    <div className="hero mb-12">
      <div className="flex hero-content bg-[#449ec1] p-12 rounded-lg">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#fff]">Contact Me</h1>
          <p className="py-6 text-[#000] font-medium">
          Keep your face always toward the sunshine, and shadows will fall behind you
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Message</span>
              </label>
            <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
