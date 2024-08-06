<template>
    <div class="blog-details-area tb-30">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <!-- <NuxtLink to="/blog-grid" class="tag">{{ details[0].attributes.tag }}</NuxtLink> -->
                            <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                        </div>
                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><i class="ri-file-user-line"></i>{{
                                        details[0].attributes.blog_author.data.attributes.blog_author }}</li>
                                    <li><i class="ri-calendar-2-line"></i>{{ details[0].attributes.date }}</li>
                                    <!-- <li><i class="ri-message-2-line"></i><NuxtLink to="/blog-grid">(4)
                                            Comments</NuxtLink></li> -->
                                </ul>
                            </div>
                            <h4>{{ details[0].attributes.title }}</h4>
                            <span v-html="details[0].attributes.longDesc"></span>
                        </div>

                        <!-- <div class="article-footer">
                            <div class="post-author-meta">
                                <div class="d-flex align-items-center">
                                    <img src="../../assets/images/user/user6.jpg" alt="user">
                                    <div class="title">
                                        <span class="name">By <NuxtLink to="/blog-grid">Deal Dox</NuxtLink></span>
                                        <span class="date">March 17, 2021</span>
                                    </div>
                                </div>
                            </div>
                            <div class="article-share">
                                <ul class="social">
                                    <li><span>Share:</span></li>
                                    <li><a href="#" class="facebook" target="_blank"><i class="ri-facebook-fill"></i></a>
                                    </li>
                                    <li><a href="#" class="twitter" target="_blank"><i class="ri-linkedin-fill"></i></a>
                                    </li>
                                    <li><a href="#" class="linkedin" target="_blank"><i class="ri-twitter-fill"></i></a>
                                    </li>
                                    <li><a href="#" class="instagram" target="_blank"><i class="ri-instagram-line"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div> -->

                        <!-- <div class="related-post">
                            <h3 class="title">Related Post</h3>
                            <div class="row justify-content-center">
                                <div class="col-lg-6 col-md-6">
                                    <div class="single-blog-post">
                                        <div class="image">
                                            <NuxtLink to="/blog-details" class="d-block">
                                                <img src="../../assets/images/blog/blog2.jpg" alt="blog">
                                            </NuxtLink>
                                            <NuxtLink to="/blog-grid" class="tag">Branding</NuxtLink>
                                        </div>
                                        <div class="content">
                                            <ul class="meta">
                                                <li><i class="ri-time-line"></i> April 14, 2021</li>
                                                <li><i class="ri-message-2-line"></i> <NuxtLink to="/blog-details">(0)
                                                        Comment</NuxtLink></li>
                                            </ul>
                                            <h3><NuxtLink to="/blog-details">Branding involves developing strategy to
                                                    create a point of differentiation</NuxtLink></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single-blog-post">
                                        <div class="image">
                                            <NuxtLink to="/blog-details" class="d-block">
                                                <img src="../../assets/images/blog/blog3.jpg" alt="blog">
                                            </NuxtLink>
                                            <NuxtLink to="/blog-grid" class="tag">Agency</NuxtLink>
                                        </div>
                                        <div class="content">
                                            <ul class="meta">
                                                <li><i class="ri-time-line"></i> April 13, 2021</li>
                                                <li><i class="ri-message-2-line"></i> <NuxtLink to="/blog-details">(4)
                                                        Comment</NuxtLink></li>
                                            </ul>
                                            <h3><NuxtLink to="/blog-details">Design is a plan or specification for the
                                                    construction of an object</NuxtLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="comments-area">
                            <!-- <h3 class="comments-title">2 Comments:</h3>
                            <ol class="comment-list">
                                <li class="comment">
                                    <div class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="../../assets/images/user/user1.jpg" class="avatar" alt="user">
                                                <b class="fn">John Jones</b>
                                            </div>
                                            <div class="comment-metadata">
                                                <span>January 01, 2021 at 10:59 am</span>
                                            </div>
                                        </footer>
                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen.</p>
                                        </div>
                                        <div class="reply">
                                            <NuxtLink to="/blog-details" class="comment-reply-link">Reply</NuxtLink>
                                        </div>
                                    </div>
                                    <ol class="children">
                                        <li class="comment">
                                            <div class="comment-body">
                                                <footer class="comment-meta">
                                                    <div class="comment-author vcard">
                                                        <img src="../../assets/images/user/user2.jpg" class="avatar"
                                                            alt="user">
                                                        <b class="fn">Steven Smith</b>
                                                    </div>
                                                    <div class="comment-metadata">
                                                        <span>January 02, 2021 at 21:59 am</span>
                                                    </div>
                                                </footer>
                                                <div class="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since
                                                        the 1500s, when an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen.</p>
                                                </div>
                                                <div class="reply">
                                                    <a href="#" class="comment-reply-link">
                                                        Reply
                                                    </a>
                                                </div>
                                            </div>
                                            <ol class="children">
                                                <li class="comment">
                                                    <div class="comment-body">
                                                        <footer class="comment-meta">
                                                            <div class="comment-author vcard">
                                                                <img src="../../assets/images/user/user3.jpg" class="avatar"
                                                                    alt="user">
                                                                <b class="fn">Sarah Taylor</b>
                                                            </div>
                                                            <div class="comment-metadata">
                                                                <span>January 03, 2021 at 05:59 am</span>
                                                            </div>
                                                        </footer>
                                                        <div class="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever
                                                                since the 1500s, when an unknown printer took a galley of
                                                                type and scrambled it to make a type specimen.</p>
                                                        </div>
                                                        <div class="reply">
                                                            <a href="#" class="comment-reply-link">Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li class="comment">
                                    <div class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="../../assets/images/user/user4.jpg" class="avatar" alt="user">
                                                <b class="fn">John Doe</b>
                                            </div>
                                            <div class="comment-metadata">
                                                <span>January 04, 2021 at 05:59 am</span>
                                            </div>
                                        </footer>
                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a
                                                type specimen.</p>
                                        </div>
                                        <div class="reply">
                                            <a href="#" class="comment-reply-link">Reply</a>
                                        </div>
                                    </div>
                                    <ol class="children">
                                        <li class="comment">
                                            <div class="comment-body">
                                                <footer class="comment-meta">
                                                    <div class="comment-author vcard">
                                                        <img src="../../assets/images/user/user1.jpg" class="avatar"
                                                            alt="user">
                                                        <b class="fn">James Anderson</b>
                                                    </div>
                                                    <div class="comment-metadata">
                                                        <span>January 05, 2021 at 04:59 am</span>
                                                    </div>
                                                </footer>
                                                <div class="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since
                                                        the 1500s, when an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen.</p>
                                                </div>
                                                <div class="reply">
                                                    <a href="#" class="comment-reply-link">Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </li>
                            </ol> -->
                            <!-- <div class="comment-respond">

                                <h3 class="comment-reply-title">Leave A Reply</h3>
                                <form class="comment-form">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                        Required fields are marked <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-author">
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" placeholder="Your Name*" name="author"
                                            required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" placeholder="Your Email*" name="email"
                                            required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label>Website</label>
                                        <input type="url" id="url" placeholder="Website" name="url">
                                    </p>
                                    <p class="comment-form-comment">
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..."
                                            rows="5" maxlength="65525" required="required"></textarea>
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent"
                                            id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this
                                            browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit"
                                            value="Post A Comment">
                                    </p>
                                </form>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <aside class="widget-area">
                        <!-- <div class="widget widget_search">
                            <form class="search-form">
                                <label><input type="search" class="search-field" placeholder="Search..."></label>
                                <button type="submit"><i class="ri-search-2-line"></i></button>
                            </form>
                        </div> -->

                        <div class="widget widget_jexa_posts_thumb">
                            <h3 class="widget-title">Popular Posts</h3>
                            <article class="item" v-for="blog in blogs" :key="blog.id">
                                <NuxtLink :to="'/blog/' + blog.attributes.slug" class="thumb">
                                    <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                                </NuxtLink>
                                <div class="info">
                                    <h4 class="title usmall">
                                        <NuxtLink :to="'/blog/' + blog.attributes.slug">
                                            {{ blog.attributes.title }}
                                        </NuxtLink>
                                    </h4>
                                    <span class="date"><i class="ri-calendar-2-fill"></i> {{ blog.attributes.date
                                        }}</span>
                                </div>
                            </article>
                        </div>

                        <div class="widget widget_categories">
                            <h3 class="widget-title">Categories</h3>
                            <ul>
                                <li v-for="category in categories" :key="category.id">
                                    <NuxtLink :to="`/category-details/${category.attributes.slug}`">{{
                                        category.attributes.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>

                        <!-- <div class="widget widget_archive">
                            <h3 class="widget-title">Archives</h3>
                            <ul>
                                <li><NuxtLink to="/blog-right-sidebar">May 2020 (1)</NuxtLink></li>
                                <li><NuxtLink to="/blog-right-sidebar">April 2020 (2)</NuxtLink></li>
                                <li><NuxtLink to="/blog-right-sidebar">June 2020 (3)</NuxtLink></li>
                            </ul>
                        </div> -->

                        <!-- <div class="widget widget_tag_cloud">
                            <h3 class="widget-title">Tags</h3>
                            <div class="tagcloud">
                                <NuxtLink to="/blog-right-sidebar">Advertisment</NuxtLink>
                                <NuxtLink to="/blog-right-sidebar">Business</NuxtLink>
                                <NuxtLink to="/blog-right-sidebar">Life</NuxtLink>
                                <NuxtLink to="/blog-right-sidebar">Lifestyle</NuxtLink>
                                <NuxtLink to="/blog-right-sidebar">Fashion</NuxtLink>
                                <NuxtLink to="/blog-right-sidebar">Ads</NuxtLink>
                                <NuxtLink to="/blog-right-sidebar">Inspiration</NuxtLink>
                                <NuxtLink to="/blog-right-sidebar">Blog</NuxtLink>
                            </div>
                        </div> -->

                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'BlogDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            categories: [],
            blogs: [],
        }
    },
    created: async function () {
        axios.get('https://cms.dealdox.io/api/blog-categories')
            .then(response => {
                this.categories = response.data.data;
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://cms.dealdox.io/api/blogs?populate=*')
        this.blogs = response.data.data;
    },
}
</script>