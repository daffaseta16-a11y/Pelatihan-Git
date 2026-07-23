import { use, useEffect, useState } from "react";
import baseLink from "../../config/utils";
import axios from "axios";

const TableCategory = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ movieTitle: "", movieYear: 0 });

  const [editId, setEditId] = useState(null);

  const fetchData =  () => {
   axios.get(`${baseLink}/api/category`).then((res)=>{
   setData(res.data);
   });
      
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await axios.put(`${baseLink}/api/movies/${editId}`, {
          title: input.movieTitle,
          year: Number(input.movieYear),
        });
        setEditId(null);
      } else {
        await axios.post(`${baseLink}/api/movies`, {
          title: input.movieTitle,
          year: input.movieYear,
        });
      }
      fetchData();
      setInput(useState);
    } catch (err) {
      alert(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleEdit = (movie) => {
    setEditId(movie.id_tb_movie);
    setInput({
      movieTitle: movie.title_tb_movie,
      movieYear: movie.year_tb_movie,
    });
    fetchData();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseLink}/api/category/${id}`);
      fetchData();
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Table Category</h1>

      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name_tb_category}</td>
                  <td>{item.des_tb_category}</td>
                  <td>
                    <button
                      onClick={() => {
                        if (confirm("Anda Yakin Menghapus Film Ini?")) {
                          handleDelete(item.id_tb_category);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button onClick={() => handleEdit(movie)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableCategory;
