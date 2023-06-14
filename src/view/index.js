import axios from 'axios';
const getAllPostUrl = "https://jsonplaceholder.typicode.com/posts";
export default async function getAllPost(){
 const response = await axios.get(getAllPostUrl); 
 console.log(response);
 return response.data;
};