import { useState } from 'react';
import './BlogManagement.css'
import Modal from '../../Modal/Modal';

const BlogManagement = () => {

const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <div>
            <h2 className="text-center">Manage Blogs</h2>
            <div>
                <div className="blog-header d-flex">
                <h2>Recent Blogs</h2>
                <button className='create-btn btn-red' onClick={openModal}>
                    Create a new blog</button>
                </div>
                <Modal isOpen={isOpen} onClose={closeModal}>
                   <h3 className='text-center'>Create a Blog</h3>
                   <form className='create-form'>
                     <div className='form-content'>
                      <input type='text' placeholder='Blog Title'></input>
                      <input type='text' placeholder='Author Name'></input>
                      <textarea type='text' placeholder='Write your thoughts' rows={20}></textarea>
                      <button className='submit btn-submit' type='submit'>Submit</button>
                     </div>
                     
                   </form>
                 </Modal>
                <div className="blogs-wrapper">
            {
              blogLists.map(blog => (
                <div className="blog-item" key={blog.id}>
                  <h3>{blog.title}</h3>
                   <span>{blog.author}</span>
                   <span>{blog.date}</span>
                   <p>{blog.content}</p>
                  
                </div>
              ))
            }
            </div>
            </div>
        </div>
    );
};

export default BlogManagement;