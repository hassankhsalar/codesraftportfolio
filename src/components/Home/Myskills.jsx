
import reactlogo from "/react.png";
import htmllogo from "/html.png";
import jslogo from "/js.png";
import mongodb from "/mongodb.png";
import express from "/express.png";
import node from "/node.png";

const Myskills = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="py-6 text-slate-400 text-xl px-4">
          I am a dedicated Full Stack Developer with expertise in building
          dynamic, responsive, and user-friendly web applications. With
          proficiency in modern technologies like React, Tailwind CSS, Node.js,
          jwt and Firebase, I thrive on crafting seamless user experiences and
          efficient backend systems. Constantly learning and adapting, I aim to
          combine creativity and technical skills to solve real-world problems
          and deliver high-quality digital solutions. Let's create something
          amazing together!
        </p>
        <h1 className="text-5xl font-bold text-slate-500 mt-10">SKILLS</h1>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center px-2">
          <img
            className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
            src={reactlogo}
            alt="React Logo"
          />
          <img
            className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
            src={htmllogo}
            alt="HTML Logo"
          />
          <img
            className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
            src={jslogo}
            alt="JavaScript Logo"
          />
          <img
            className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
            src={mongodb}
            alt="MongoDB Logo"
          />
          <img
            className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
            src={express}
            alt="Express Logo"
          />
          <img
            className="w-24 h-16 border-2 rounded-xl border-slate-500 object-contain"
            src={node}
            alt="Node.js Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Myskills;
