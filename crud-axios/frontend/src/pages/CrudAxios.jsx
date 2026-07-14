import axios from "axios";
import { useEffect, useState } from "react";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({movieTitle:"", movieYear:0});

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movies").then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  try{
    await axios.post("http://localhost:3000/api/movies", {
      title: input.movieTitle,
      year: input.movieYear,
    });
  fetchData();
  setInput(useState)
  }catch (err) {
    alert(err);
  }
  };

  const handleChange = (event) => {
    let {value, name} = event.target;
    setInput({...input, [name]:value})
  };

   const handleDelete = async (id) => {
     try {
       await axios.delete(`http://localhost:3000/api/movies/${id}`);
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
          <label htmlFor="movieTitle">Title Movie</label>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            placeholder="Title Movie..."
            required
            onChange={handleChange}
          ></input>

          <label htmlFor="movieYear">Year Movie</label>
          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Year Movie..."
            required
            onChange={handleChange}
            ></input>

          <input type="submit" value="Submit"></input>
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
                    <button>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CrudAxios;
