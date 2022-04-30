import { IFavsList, IFavItem } from '../types/Favs';
import { Schema } from 'mongoose';

export const FavSchema = new Schema<IFavItem>({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "title is required"],
  },
  link: {
    type: String,
    required: [true, "title is required"],
  }
})

export const FavsSchema = new Schema<IFavsList>({
  name: {
    type: String,
    required: [true, "name is needed"],
  },
  favs: {
    type: [FavSchema],
    required: [true, "need a list of favs"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user id is needed"],
  },
});
