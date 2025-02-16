import btrmerge from "../assets/btrmerge.jpg";
import ticketreservation from "../assets/ticketreservation.png";
import votingsys from "../assets/votingsys.png";
import qr from "../assets/qr.png";
import librarymgmt from "../assets/librarymgmt.png";
import multip from "../assets/multip.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5 spacing" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold text-gray-400">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Project Card */}
        {[
          { src: btrmerge, title: "BTR Merge Application" },
          { src: ticketreservation, title: "Cinema Ticket Reservation System" },
          { src: votingsys, title: "Restaurant Management System" },
          { src: qr, title: "QR-Based Academic Registration System" },
          { src: librarymgmt, title: "Library Management System" },
          { src: multip, title: "Multiplication Table Application" },
        ].map((project, idx) => (
          <div
            key={idx}
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                       shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                       h-[200px] bg-cover relative"
          >
            <img src={project.src} alt={project.title} className="object-cover w-full h-full" />
            <div
              className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                              justify-center items-center"
            >
              <span className="text-2xl font-bold text-white tracking-wider">{project.title}</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">View Project</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
