import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { updateKelass } from "../../../Backend/controllers/KelasController";

const editKelass = () => {
  const [kelas, setKelas] = useState("");
  const [jam, setJam] = useState("");
  const [matakuliah, setMatakuliah] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getKelasById = async () => {
      const response = await axios.get(`http://localhost:5000/Kelass/${id}`);
      setKelas(response.data.kelas);
      setJam(response.data.jam);
      setMatakuliah(response.data.matakuliah);
    };
    getKelasById();
  }, [id]);

  const updateKelas = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/Kelass/${id}`, {
      kelas: kelas,
      jam: parseInt(jam),
      matakuliah: matakuliah,
    });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={updateKelas} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Kelas</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Jam</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Jam"
              value={jam}
              onChange={(e) => setJam(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Matakuliah</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Matakuliah"
              value={matakuliah}
              onChange={(e) => setMatakuliah(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditKelas;
