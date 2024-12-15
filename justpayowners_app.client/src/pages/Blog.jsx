
import { useEffect, useState } from 'react'
import { SectionTitle, BlogElement } from "../components";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";

import fetchBlogPosts from '../common/Blogs/getBlogPosts';
import { useSelector } from 'react-redux'
// export const blogLoader = async () => {
//     const response = await axios(
//         `https://localhost:5173/`
//     );
//     const data = response.data;
//     return { blogCollection: blogData };
// };


export const blogLoader = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    // /posts?title=json-server&author=typicode
    // GET /posts?_sort=views&_order=asc
    // GET /posts/1/comments?_sort=votes&_order=asc

    const filterObj = {
        search: params.search ?? "",
        category: params.category ?? "all",
        current_page: Number(params.page) || 1,
        order: params.order ?? "",
    };

    // set params in get apis
    let parameter = (`?_start=${(filterObj.current_page - 1) * 10}&_limit=10`) + // pre defined that limit of response is 10 & page number count 1
        ((filterObj.search != '') ? `&q=${encodeURIComponent(filterObj.search)}` : ``) +
        (filterObj.category !== 'all' ? `&category=${filterObj.category}` : "") +
        (filterObj.order ? `&_sort=price.current.value` : "")  // Check if the order exists, then sort it in ascending order. After that, the API response will be modified if descending order or any other filter is selected.



    try {

        //const response = await axios(
        // `http://localhost:5175/products${parameter}`
        // );



        // let data = blogData1[0].posts;
        // console.log("-----------------------------")
        // console.log(data)

        let data = [];

        return { blogData: data, blogLength: data.length, page: filterObj.current_page };

        // sorting in descending order
        if (filterObj.order && !(filterObj.order === "asc")) data.sort((a, b) => b.price.current.value - a.price.current.value)
        return { blogData: data, blogLength: data.length, page: filterObj.current_page };


    } catch (error) {
        console.log(error.response);
    }
    // /posts?views_gte=10

    return null;
};




const Blog = function () {
    console.log("Blog")
    const { currentUser } = useSelector(state => state.user);
    const { userId } = useSelector(state => state.auth);
    // const blogCollection = useLoaderData();
    // console.log("blog-data:------" + blogCollection.blogData.length)
    const [BlogPosts, setBlogPosts] = useState({});

    useEffect(() => {
        fetchBlogPosts(userId).then((resp) => {
            console.log("blogdata - ", resp)
            //add new imageurL to the response
            resp.data.map((item) => {
                item.SampleimageURL = 'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg';
                return item;
            });
            setBlogPosts(resp.data);
        }).catch(error => {
            console.error('Error fetching blog posts:', error);
        });
    }, [userId]);


    return (<>


        <section className="grid-wrap3">
            <div className="container">
                <div className="row gutters-40">
                    <div className="col-lg-8">
                        <div className="row">

                            {BlogPosts.length === 0 && <h2 className="text-accent-content text-center text-4xl my-10">No blog data found for this filter</h2>}

                            <BlogElement data={BlogPosts} />

                            
                        </div>
                        
                    </div>
                    <div className="col-lg-4 widget-break-lg sidebar-widget">                        
                        <div className="widget widget-categoery-box">
                            <h3 className="widget-subtitle">Categories</h3>
                            <ul className="categoery-list">
                                <li><a href="#">Apartments<span className="categoery-count">03</span></a></li>
                                <li><a href="#">Corporate Building<span className="categoery-count">05</span></a></li>
                                <li><a href="#">Home Land<span className="categoery-count">01</span></a></li>
                                <li><a href="#">Family House<span className="categoery-count">05</span></a></li>
                                <li><a href="#">Real Homes<span className="categoery-count">08</span></a></li>
                                <li><a href="#">Realty Space<span className="categoery-count">09</span></a></li>
                            </ul>
                        </div>
                        <div className="widget widget-taglist">
                            <h3 className="widget-subtitle">Popular Tags</h3>
                            <ul className="tag-list">
                                <li><a href="#">apartment</a></li>
                                <li><a href="#">building</a></li>
                                <li><a href="#">modern</a></li>
                                <li><a href="#">luxarious</a></li>
                                <li><a href="#">real estate</a></li>
                                <li><a href="#">Villa</a></li>
                                <li><a href="#">apartment</a></li>
                                <li><a href="#">building</a></li>
                                <li><a href="#">modern</a></li>
                            </ul>
                        </div>
                        <div className="widget widget-listing-box1">
                            <h3 className="widget-subtitle">Latest Listing</h3>                          
                           
                            <div className="widget-listing no-brd">
                                <div className="item-img">
                                    <a href="single-agent1.html"><img src="/src/assets/img/blog/widget4.jpg" alt="widget" width="120" height="102"/></a>
                                </div>
                                <div className="item-content">
                                    <h5 className="item-title"><a href="#">House Highland Ave  Los Angeles</a></h5>
                                    <div className="location-area"><i className="flaticon-maps-and-flags"></i>California</div>
                                    <div className="item-price">$1,900<span>/mo</span></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>



        
    </>
    );
};



export default Blog;
