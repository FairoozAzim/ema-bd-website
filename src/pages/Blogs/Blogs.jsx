import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {

  const blogLists =[
    {
      "id": 1,
      "title": "Exploring the Benefits of Erasmus Mundus Program",
      "author": "John Doe",
      "date": "2024-04-20",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 2,
      "title": "Erasmus Mundus Bangladesh Association's Cultural Exchange Event",
      "author": "Jane Smith",
      "date": "2024-04-15",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 3,
      "title": "Tips for Applying to Erasmus Mundus Scholarships",
      "author": "Alice Johnson",
      "date": "2024-04-10",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    },
    {
      "id": 4,
      "title": "Erasmus Mundus Bangladesh Association's Annual Conference Highlights",
      "author": "Michael Brown",
      "date": "2024-04-05",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae elit eget neque tincidunt eleifend. Vivamus id arcu sem. Cras vel nisi vitae ligula volutpat gravida. Donec efficitur massa eu nisi lacinia placerat. Fusce suscipit quam quis diam faucibus, ac feugiat dui tempor. Ut et ex eget odio vulputate commodo vel sit amet nunc. Integer laoreet posuere mi id vestibulum. Donec fringilla leo sed nunc maximus, eu bibendum sapien dapibus."
    }
  ]
  
    return (
        <div className="mt">
          <h1 className="section-header">Recent Blogs</h1>  
          <div className="blogs-wrapper">
            {
              blogLists.map(blog => (
                <div className="blog-item" key={blog.id}>
                  <h3>{blog.title}</h3>
                   <span>{blog.author}</span>
                   <span>{blog.date}</span>
                   <p>{blog.content}</p>
                   <Link to ={`/blogs/${blog.id}`}>View Details</Link>
                </div>
              ))
            }
            </div>
          </div>
       
    );
};

export default Blogs;