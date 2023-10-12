import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="omdena__blog section__padding" id="blog">
    <div className="omdena__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="omdena__blog-container">
      <div className="omdena__blog-container_groupA">
        <Article imgUrl={blog01} date="Oct 10, 2022" text="Omdena and  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="omdena__blog-container_groupB">
        <Article imgUrl={blog02} date="Oct 10, 2022" text="Omdena and  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Oct 10, 2022" text="Omdena and  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Oct 10, 2022" text="Omdena and  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Oct 10, 2022" text="Omdena and  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;