import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyC3uLm4oZa0OZsZvCi4KJ1sbpAMVpx3M5I",
  authDomain: "nextjsblog-9e49c.firebaseapp.com",
  projectId: "nextjsblog-9e49c",
  storageBucket: "nextjsblog-9e49c.appspot.com",
  messagingSenderId: "991390982620",
  appId: "1:991390982620:web:4c945bfcbc9d4c353caf19",
  measurementId: "G-ZMK145JY61"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}
