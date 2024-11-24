"use client";
import React from "react";
import BookingForm from "../BookingForm";
import { useState } from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Link from "next/link";

const ServiceList = () => {
  const services = [
    { id: 1, name: "Cleaning Rumah", price: "Rp 50.000/jam", desc: "Membersihkan rumah Anda secara profesional." },
    { id: 2, name: "Cleaning Kantor", price: "Rp 70.000/jam", desc: "Layanan pembersihan kantor dengan tenaga ahli." },
    { id: 3, name: "Cuci Sofa", price: "Rp 100.000/unit", desc: "Cuci sofa Anda hingga bersih seperti baru." },
    { id: 4, name: "Cuci Karpet", price: "Rp 75.000/m2", desc: "Membersihkan karpet hingga bebas dari noda dan debu." },
    { id: 5, name: "Cleaning Kaca Gedung", price: "Rp 150.000/jam", desc: "Layanan pembersihan kaca gedung secara aman dan efisien." },
    { id: 6, name: "Cleaning Kolam Renang", price: "Rp 200.000/visit", desc: "Merawat dan membersihkan kolam renang Anda secara menyeluruh." },
  ];
  const [layananService,setLayananService] = useState('')
  
  return (
    <div className="p-6 bg-base-200">
      <h2 className="text-2xl font-bold text-textColor-primary text-center mb-6">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card bg-white shadow-lg p-4 rounded-md">
            <h3 className="text-xl font-semibold text-textColor-primary">{service.name}</h3>
            <p className=" text-textColor-secondary">{service.desc}</p>
            <p className="text-lg font-bold mt-2 text-textColor-primary">{service.price}</p>
            <Link href={'https://api.whatsapp.com/send?phone=6282215647042'} className="btn bg-main-primary hover:bg-main-accent">
            Pesan
            </Link>
            {/* <button onClick={()=>{
              setLayananService(service.name);
              document.getElementById("my_modal_1").showModal();
            }} className="btn bg-green-400 hover:bg-green-300">Pesan</button> */}
          </div>
        ))}
        {/* <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
          open modal
        </button> */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box m-0 p-5">
            <div className="modal-action m-0 p-0 ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn"><MdOutlineCloseFullscreen/></button>
              </form>
            </div>
            {/* <BookingForm layananService={layananService}/> */}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ServiceList;
