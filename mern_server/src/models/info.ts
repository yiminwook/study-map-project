import mongoose from 'mongoose';
import { Info } from '../types/info';

const InfoSchema = new mongoose.Schema<Info>({
  id: { type: Number, required: true },
  placeName: { type: String, required: true },
  addressName: { type: String, required: true },
  position: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});

const InfoModel = mongoose.model('Info', InfoSchema);

export default InfoModel;
