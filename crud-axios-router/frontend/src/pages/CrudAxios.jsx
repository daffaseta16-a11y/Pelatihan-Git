import axios from "axios";
import { useEffect, useState } from "react";
import baseLink from "../config/utils";
import "../../src/style.css";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ movieTitle: "", movieYear: 0 });

  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseLink}/api/movies`).then((res) => {
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
      await axios.delete(`${baseLink}/api/movies/${id}`);
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
      <h1>CRUD AXIOS</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <h3>{editId ? "Edit Film" : "Tambah Film"}</h3>

          <label htmlFor="movieTitle">Title Movie</label>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            placeholder="Title Movie..."
            required
            value={input.movieTitle}
            onChange={handleChange}
          ></input>

          <label htmlFor="movieYear">Year Movie</label>
          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Year Movie..."
            required
            value={input.movieYear}
            onChange={handleChange}
          ></input>

          <input type="submit" value={editId ? "Update" : "Submit"}></input>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setInput(useState);
              }}
              style={{ marginLeft: "10px" }}
            >
              Batal
            </button>
          )}
        </form>
      </div>

      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movie.title_tb_movie}</td>
                  <td>{movie.year_tb_movie}</td>
                  <td>
                    <button
                      onClick={() => {
                        if (confirm("Anda Yakin Menghapus Film Ini?")) {
                          handleDelete(movie.id_tb_movie);
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

export default CrudAxios;
