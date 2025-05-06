import { Link, useLoaderData } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
  const blogs=  useLoaderData()
  console.log("fetched blogs", blogs)
  
   const latest = blogs[0]; 
    return (
        <div className="blog-section">
          <div className='latest-post'>
            <div className='blog-img'>
              <img src={latest.blogImage}></img>
            </div>
            <div className='blog-desc'>
              <span>Latest Post</span>
              <h1>{latest.title}</h1>
              <span>{latest.author}</span>
              <p>{latest.text.slice(0,100)} ...</p>
              <button className='btn-red'>Read More</button>
              <span>{latest.date}</span>
              <p></p>
            </div>
          </div>
          <div className='blog-search-container d-flex'>
            <h2>Read More Blogs</h2>
            <div className='search-blogs'>
              <p>Search Blogs</p>
            </div>
          </div>
          <hr className='blog-divider'></hr>
        
          <div className="blogs-wrapper">
            
            {
              blogs.map(blog => (
                <div className="blog-item" key={blog.id}>
                  <div className='blog-card-img'>
                    <img src={blog.blogImage}></img>
                  </div>
                  <h3>{blog.title}</h3>
                   <span>{blog.author}</span>
                   <p>{blog.text.slice(0,50)} ...</p>
                   <span>{blog.date}</span>
                   
                   <button className='btn-red'><Link to ={`/blogs/${blog._id}`}>Read More</Link></button>
                </div>
              ))
            }
            </div>
          </div>
       
    );
};

export default Blogs;