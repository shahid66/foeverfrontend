import { apiSlice } from "./../api/apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productRegister: builder.mutation({
      query: (data) => ({
        url: "/api/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: "Product",
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/api/products",
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/api/products/${id}`,
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useProductRegisterMutation,
  useGetProductsQuery,
  useGetProductQuery,
} = productSlice;
