import axios from "axios";
import toast from "react-hot-toast";
import { create} from "zustand";

export const useContentStore = create((set) => ({
  contentType:"movie",
  setContentType: (type) => set({contentType: type}),
  
}));