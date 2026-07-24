import axios from "axios";
import { useEffect, useState } from "react";
import baseLink from "../../config/utils";
import { Link, useNavigate, useParams } from "react-router";

const FormCategory = () => {
 let {id} = useParams();
 let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [input, setInput] = useState({ categoryName: "", categoryDes: "", categoryId: null });

  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseLink}/api/category/${id}`).then((res) => {
      let { 
        des_tb_category: categoryDes, 
        id_tb_category: categoryId, 
        name_tb_category: categoryName
      } = res.data[0];

    setInput({categoryDes, categoryId, categoryName});
      console.log(res.data[0])

    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (input.categoryId) {
        await axios.put(`${baseLink}/api/category/${input.categoryId}`, {
          name: input.categoryName,
          des: input.categoryDes,
        });
        setEditId(null);
        navigate("/category")
      } else {
        await axios.post(`${baseLink}/api/category`, {
          name: input.categoryName,
          des: input.categoryDes,
        });
      }
      // fetchData();
      setInput({categoryName: "", categoryDes: "", categoryId: null});
    } catch (err) {
      alert(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleEdit = (category) => {
    setEditId(category.id);
    setInput({
      categoryName: category.name,
      categoryDes: category.des,
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
      <h1>{id}</h1>
      <h1>CRUD AXIOS</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="CategoryName">Category Name</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="Input Your Category Name..."
            required
            value={input.categoryName}
            onChange={handleChange}
          ></input>

          <label htmlFor="categoryDes">Category Description</label>
          <textarea
            name="categoryDes"
            id="categoryDes"
            value={input.categoryDes}
            onChange={handleChange}
          ></textarea>

          <input type="submit" value={editId ? "Update" : "Submit"}></input>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setInput({categoryName: "", categoryDes: ""});
              }}
              style={{ marginLeft: "10px" }}
            >
              Batal
            </button>
          )}

          <Link to="/Category">Cancel</Link>
        </form>
      </div>
    </>
  );
};

export default FormCategory;
