import { Link } from 'react-router-dom';
import blogImg from '../../Assets/images/event1.png';
import './Blogs.css'

const Blogs = () => {

  const blogLists =[
    {
      "id": 1,
      "title": "Exploring the Benefits of Erasmus Mundus Program",
      "author": "John Doe",
      "date": "2024-04-20",
      "blog_url": blogImg,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 2,
      "title": "Erasmus Mundus Bangladesh Association's Cultural Exchange Event",
      "author": "Jane Smith",
      "date": "2024-04-15",
      "blog_url": blogImg,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 3,
      "title": "Tips for Applying to Erasmus Mundus Scholarships",
      "author": "Alice Johnson",
      "date": "2024-04-10",
      "blog_url": blogImg,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 4,
      "title": "Erasmus Mundus Bangladesh Association's Annual Conference Highlights",
      "author": "Michael Brown",
      "date": "2024-04-05",
      "blog_url": blogImg,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 5,
      "title": "Erasmus Mundus Bangladesh Association's Annual Conference Highlights",
      "author": "Michael Brown",
      "date": "2024-04-05",
      "blog_url": blogImg,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 6,
      "title": "Erasmus Mundus Bangladesh Association's Annual Conference Highlights",
      "author": "Michael Brown",
      "date": "2024-04-05",
      "blog_url": blogImg,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    }
  ]
   const latest = blogLists[0]; 
    return (
        <div className="blog-section">
          <div className='latest-post'>
            <div className='blog-img'>
              <img src={latest.blog_url}></img>
            </div>
            <div className='blog-desc'>
              <span>Latest Post</span>
              <h1>{latest.title}</h1>
              <span>{latest.author}</span>
              <p>{latest.content.slice(0,100)} ...</p>
              <button className='btn-red'>Read More</button>
              <span>{latest.date}</span>
              <p></p>

            </div>
          </div>
          <div className='blog-search-container d-flex mt-10'>
            <h2>Read More Blogs</h2>
            <div className='search-blogs'>
              <p>Search Blogs</p>
            </div>
          </div>
          <hr className='blog-divider'></hr>
        
          <div className="blogs-wrapper">
            
            {
              blogLists.map(blog => (
                <div className="blog-item" key={blog.id}>
                  <div className='blog-card-img'>
                    <img src={blog.blog_url}></img>
                  </div>
                  <h3>{blog.title}</h3>
                   <span>{blog.author}</span>
                   <p>{blog.content.slice(0,50)} ...</p>
                   <span>{blog.date}</span>
                   
                   <button className='btn-red'><Link to ={`/blogs/${blog.id}`}>Read More</Link></button>
                </div>
              ))
            }
            </div>
          </div>
       
    );
};

export default Blogs;