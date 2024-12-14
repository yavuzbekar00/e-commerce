import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      productName: "Product 1",
      productDetail: "High-quality product for daily use.",
      productStock: 15,
      productPrice: 120.5,
      productImage:
        "https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg",
    },
    {
      productName: "Product 2",
      productDetail: "High-quality product for daily use.",
      productStock: 43,
      productPrice: 840.5,
      productImage:
        "https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg",
    },
    {
      productName: "Product 3",
      productDetail: "High-quality product for daily use.",
      productStock: 21,
      productPrice: 630.5,
      productImage:
        "https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductStock: (state, action) => {
      const { productName, newStock } = action.payload;
      const product = state.products.find((p) => p.productName === productName);
      if (product) {
        product.productStock = newStock;
      }
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { updateProductStock, addProduct } = productSlice.actions;

export default productSlice.reducer;
