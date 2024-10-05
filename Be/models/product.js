import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      unique: true, // Đảm bảo tính duy nhất
    },
    slug: {
      // Sử dụng trong URL thân thiện với SEO ví dụ: https://example.com/products/samsung-galaxy-s21
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    // attributes: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Attribute",
    //     required: true,
    //   },
    // ],
    quantity: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
    },
    rating: {
      // Đánh giá sao
      type: Number,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    // },
    tags: [String], // Tag liên quan đến sản phẩm
    sku: {
      // Mã sản phẩm
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
