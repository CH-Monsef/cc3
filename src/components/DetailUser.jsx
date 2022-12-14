import React from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
const baseURL = "https://dummyjson.com/users";

const DetailUser = () => {
  const params = useParams();

  console.log(params);
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/${params}`).then((response) => {
      setPost(response.data);
    });
  }, []);



  return <div>  
    <div>DetailUser</div>
    <p>{post.firstName}</p>
    <p>{post.lastName}</p>
    <p>{post.age}</p>
    <p>{post.gender}</p>
    <p>{post.email}</p>
    <p>{post.phone}</p>
    <p>{post.weight}</p>
    <p>{post.height}</p>
    <p>{post.birthDate}</p>
    <p>{post.bloodGroup}</p>
    <p>{post.eyeColor}</p>

      </div>

}

export default DetailUser