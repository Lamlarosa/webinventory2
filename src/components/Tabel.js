import React, { useState } from "react";

function Tabel() {
  const [barangList, setBarangList] = useState([
    { id: 1, nama: "Kursi", deskripsi: "Kursi kayu", stock: 10 },
    { id: 2, nama: "Meja", deskripsi: "Meja kantor", stock: 5 },
    { id: 3, nama: "Lemari", deskripsi: "Lemari arsip", stock: 2 },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    nama: "",
    deskripsi: "",
    stock: "",
  });

  function handleDelete(index) {
    const newList = barangList.filter((_, i) => i !== index);
    setBarangList(newList);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setEditData(barangList[index]);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newList = [...barangList];
    newList[editIndex] = editData;
    setBarangList(newList);
    setEditIndex(null); // keluar dari mode edit
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Daftar Stock Anda</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
            <th style={{ padding: "10px" }}>No</th>
            <th style={{ padding: "10px" }}>Nama Barang</th>
            <th style={{ padding: "10px" }}>Deskripsi</th>
            <th style={{ padding: "10px" }}>Stock</th>
            <th style={{ padding: "10px" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {barangList.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px" }}>{index + 1}</td>
              <td style={{ padding: "10px" }}>
                {editIndex === index ? (
                  <input
                    name="nama"
                    value={editData.nama}
                    onChange={handleChange}
                  />
                ) : (
                  item.nama
                )}
              </td>
              <td style={{ padding: "10px" }}>
                {editIndex === index ? (
                  <input
                    name="deskripsi"
                    value={editData.deskripsi}
                    onChange={handleChange}
                  />
                ) : (
                  item.deskripsi
                )}
              </td>
              <td style={{ padding: "10px" }}>
                {editIndex === index ? (
                  <input
                    name="stock"
                    value={editData.stock}
                    onChange={handleChange}
                  />
                ) : (
                  item.stock
                )}
              </td>
              <td style={{ padding: "10px" }}>
                {editIndex === index ? (
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      marginRight: "5px",
                      padding: "5px 10px",
                    }}
                    onClick={handleSubmit}
                  >
                    Simpan
                  </button>
                ) : (
                  <button
                    style={{
                      backgroundColor: "#f1c40f",
                      color: "black",
                      marginRight: "5px",
                      padding: "5px 10px",
                    }}
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                )}
                <button
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    padding: "5px 10px",
                  }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabel;
