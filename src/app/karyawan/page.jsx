"use client";
import Image from "next/image";
import Link from "next/link";

const employees = [
  { id: 1, name: "Roy Priman", position: "Ceo", image: "/images/roy.jpg", detail: "" },
  { id: 2, name: "Novita", position: "Manager", image: "/images/novita.jpg", detail: "" },
  { id: 3, name: "Kang Andre", position: "Duda", image: "/images/andre.jpg", detail: "" },
  { id: 4, name: "bg kael", position: "Hanya Penikmat Bukan Pecandu", image: "/images/mikael.jpg", detail: "" },
];

const EmployeePage = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Daftar Karyawan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {employees.map((employee) => (
          <div key={employee.id} className="bg-white grid grid-rows-1 rounded-lg shadow-md hover:shadow-lg transition-all">
            <Image width={200} height={200} src={employee.image} alt={employee.name} className="w-55 h-50 rounded-full mx-auto" />
            <h2 className="text-xl font-semibold mt-3 text-center">{employee.name}</h2>
            <p className="text-center text-gray-600">{employee.position}</p>
            <Link href={employee.detail} className="text-center block mt-3 text-blue-500 hover:underline">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;