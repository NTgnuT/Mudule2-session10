import {
  ACT_ADD_CART,
  ACT_DELETE,
  ACT_DOWN,
  ACT_UP,
} from "../constrains/actionType";

const initialState = JSON.parse(localStorage.getItem("carts")) || [];

/**
 * Hàm lấy ra vị trí của product trong list product
 * @param {*} id id cần kiểm tra
 * @param {*} array  mảng dùng để kiểm tra
 * @returns Nếu tìm thấy bản ghi thì trả ra index, nếu không trả ra -1
 */
const findIndexProduct = (id, array) => {
  const productIndex = array.findIndex((pr) => pr.product_id === id);
  return productIndex;
};

// Lưu dữ liệu lên local
const saveDataLocal = (array) => {
  localStorage.setItem("carts", JSON.stringify(array));
};

export const listCart = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ACT_ADD_CART:
      // Vị trí cần lấy
      const indexProduct = findIndexProduct(action.payload.product_id, state);
      // 2.Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
      if (indexProduct !== -1) {
        // 1.Clone lại mảng cũ
        const newCart = [...state];
        // Nếu đã tồn tại thì tăng số lượng
        newCart[indexProduct].quantity += 1;
        // 3. Lưu dữ liệu lên local
        // localStorage.setItem("carts", JSON.stringify(newCart));
        saveDataLocal(newCart);

        // 4. return ra mảng mới
        return newCart;
      } else {
        // Nếu chưa thì thêm vào giỏ hàng
        // 1.Clone lại mảng cũ
        const newAddCart = [...state, { ...action.payload, quantity: 1 }];
        // 3. Lưu dữ liệu lên local
        // localStorage.setItem("carts", JSON.stringify(newAddCart));
        saveDataLocal(newAddCart);
        // 4. return ra mảng mới
        return newAddCart;
      }

    case ACT_UP:
      // Clone mảng cũ
      const upCart = [...state];
      // Tìm vị trí sản phẩm cần tăng
      const updateIndex = findIndexProduct(action.payload, upCart);
      // Cập nhật lại quantity
      upCart[updateIndex].quantity += 1;
      // 3. Lưu dữ liệu lên local
      // localStorage.setItem("carts", JSON.stringify(upCart));
      saveDataLocal(upCart);
      // 4. return ra mảng mới
      return upCart;

    case ACT_DOWN:
      // Clone mảng cũ
      const downCart = [...state];
      // Tìm vị trí sản phẩm cần giảm
      const updateIndexs = findIndexProduct(action.payload, downCart);
      // Kiểm tra nếu như quantity > 0 thì giảm đi
      if (downCart[updateIndexs].quantity > 1) {
        // Cập nhật lại quantity
        downCart[updateIndexs].quantity -= 1;
        // 3. Lưu dữ liệu lên local
        // localStorage.setItem("carts", JSON.stringify(downCart));
        saveDataLocal(downCart);
        // 4. return ra mảng mới
        return downCart;
      } else {
        // Nếu số lượng bằng 0 thì xóa khỏi giỏ hàng
        // Cách 1:
        // downCart.splice(updateIndexs, 1);
        // saveDataLocal(downCart);
        // return downCart;

        // Cách 2:
        const productFilter = downCart.filter(
          (e) => e.product_id !== action.payload
        );
        // Lưu dữ liệu lên local
        saveDataLocal(productFilter);
        // return ra mảng mới
        return productFilter;
      }

    case ACT_DELETE:
      // Clone mảng cũ
      const deleteCart = [...state];
      // Tìm vị trí cần xóa
      const indexDelete = deleteCart.filter(
        (index) => index.product_id !== action.payload
      );
      // Lưu dữ liệu lên local
      saveDataLocal(indexDelete);
      // return ra mảng mới
      return indexDelete;

    default:
      return state;
  }
};
