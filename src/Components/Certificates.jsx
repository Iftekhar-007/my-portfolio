export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Complete Web Development",
      institute: "Programming Hero",
      issue: "27th August 2025",
      creId: "WEB11-1922",
      img: "/cert.webp",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black font-bold fontcormorand mb-4">
          Certificates and Achievement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="card bg-base-100 shadow-sm p-4">
              <figure>
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="h-auto w-full object-cover rounded-[20px]"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title fontcormorand lg:text-2xl">
                  {cert.title}
                </h3>
                <p className="fontcormorand">
                  {" "}
                  <span className="font-bold">Institute:</span> {cert.institute}
                </p>
                <p className="fontcormorand">
                  {" "}
                  <span className="font-bold">Issue Date:</span> {cert.issue}
                </p>
                <p className="fontcormorand">
                  {" "}
                  <span className="font-bold">Credential id:</span> {cert.creId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
