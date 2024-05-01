import Tejas from "../assets/Tejas.jpg";
const people = [
  {
    name: "Tejas Sankhla",
    role: "UI-Designer",
    imageUrl: Tejas,
  },
  {
    name: "Yuvraj Byale",
    role: "Backend-Developer",
    imageUrl: Tejas,
  },
  {
    name: "Varad Jadhav",
    role: "ML Expert",
    imageUrl: Tejas,
  },
  {
    name: "Khush Makwana",
    role: "Integration Associate",
    imageUrl: Tejas,
  },
  {
    name: "Ritesh Mohan",
    role: "Nigga",
    imageUrl: Tejas,
  },
  // More people...
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The MedInsight team is a passionate group of individuals dedicated
            to empowering people to understand their medical information with
            ease.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
