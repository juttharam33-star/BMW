import mongoose from 'mongoose';

const configurationSchema = new mongoose.Schema(
  {
    modelName: { type: String, required: true },
    tuningStage: { type: String, required: true },
    carbonPack: { type: String, required: true },
    finish: { type: String, default: 'Frozen Deep Grey' },
    totalHp: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Configuration', configurationSchema);