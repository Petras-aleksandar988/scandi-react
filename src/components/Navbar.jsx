import { Link } from "react-router-dom";
import MassDeleteButton from "../components/MassDeleteButton";

function Navbar({ selectedProducts, fetchProducts }) {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="title">Product List</h1>
          <div className="btns">
            <Link to="add-product">
              <button type="submit" name="add" id="add-product-btn">
                ADD
              </button>
            </Link>

            <MassDeleteButton selectedProducts={selectedProducts} fetchProducts={fetchProducts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
