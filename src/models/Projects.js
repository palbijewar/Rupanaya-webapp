import mongoose from 'mongoose';

const schema = mongoose.Schema;

const projectSchema = new schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,  
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number, 
      required: true,
    },
    stock_quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      }
    ],
    brand: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: [
      {
        user_id: { type: schema.Types.ObjectId, ref: 'User' },
        review_text: { type: String, maxlength: 300 },
        rating: { type: Number, min: 0, max: 5 },
      },
    ],
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Projects = mongoose.model('Projects', projectSchema);

export default Projects;
