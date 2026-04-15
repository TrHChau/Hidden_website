import SelectBox from "../../../OurShop/components/SelectBox";
import styles from "../../styles.module.scss";
function CartTable() {
  const { product, cartTable } = styles;
  const cartItems = [
    {
      id: 1,
      name: "jdsiajdsiodklamlkdmsam",
      price: 10,
      sku: 9832,
      size: "M",
      quantity: 2,
      image:
        "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
    },
    {
      id: 2,
      name: "jdsiajdsiodklamlkdmsam",
      price: 20,
      sku: 9832,
      size: "M",
      quantity: 1,
      image:
        "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
    },
    {
      id: 3,
      name: "jdsiajdsiodklamlkdmsam",
      price: 15,
      sku: 9832,
      size: "M",
      quantity: 3,
      image:
        "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
    },
  ];
  const handleDelete = (id) => {
    console.log("Delete item with id:", id);
  };
  const handleQuantityChange = (id, newQuantity) => {
    console.log(
      "Update quantity for item with id:",
      id,
      "New Quantity:",
      newQuantity,
    );
  };
  const showOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
  ];
  const getValueSelect = (value, type) => {
    console.log("Selected value:", value, "Type:", type);
  };
  return (
    <div className={cartTable}>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th />
            <th>Price</th>
            <th>SKU</th>

            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className={product}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                </div>
              </td>
              <td>
                <div onClick={() => handleDelete(item.id)}>&#128465;</div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.sku}</td>
              <td>
                <SelectBox
                  options={showOptions}
                  getValue={getValueSelect}
                  type="show"
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
