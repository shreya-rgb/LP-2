import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get(`http://${window.location.hostname}:3000/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    await axios.post(`http://${window.location.hostname}:3000/add-product`, { name, price });
    alert("Product added!");
    setName("");
    setPrice("");
    fetchProducts();
  };

  const buyProduct = async (id, productName) => {
    const res = await axios.post(`http://${window.location.hostname}:3000/buy/${id}`);
    alert(`Success! You just bought: ${productName}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>🛒 Cloud E-Commerce Store</h1>
      
      <div style={{ marginBottom: "30px", padding: "20px", background: "#f9f9f9", display: "inline-block", borderRadius: "10px" }}>
        <h3>Admin: Add a Product</h3>
        <input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: "5px", padding: "5px" }} />
        <input type="number" placeholder="Price ($)" value={price} onChange={(e) => setPrice(e.target.value)} style={{ margin: "5px", padding: "5px" }} />
        <button onClick={addProduct} style={{ padding: "5px 10px", cursor: "pointer", background: "#28a745", color: "white", border: "none" }}>Add to Store</button>
      </div>

      <h3>Browse Products</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", margin: "0 auto", maxWidth: "800px" }}>
        {products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "200px" }}>
            <h2>{p.name}</h2>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#007bff" }}>${p.price}</p>
            <button onClick={() => buyProduct(p._id, p.name)} style={{ padding: "10px 20px", cursor: "pointer", background: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;