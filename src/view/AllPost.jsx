import React from "react";
 import { useQuery } from "react-query";
import getAllPost from ".";
const AllPost = () => {
const { 
 isLoading,  
 isError, 
 data, 
 error 
} = useQuery('allPost', getAllPost);
if(isLoading){
 return <p>Loading....</p>
}
if(isError){
 return <p>{error.message}</p>
}
return (
 <div className="h-screen">
  <p>Post</p>
 <div>
 {data.map(item => {
  return (
   <div>
    <p>Title:{" "}<span>{item.title}</span></p>
    </div>
  );
 })}
</div>
</div>
)};
export default AllPost;