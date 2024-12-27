
import { useEffect, useState, useRef, memo } from 'react'

import { useLoaderData, useNavigate, useSearchParams, useParams } from "react-router-dom";

import fetchBlogPosts from '../common/Blogs/getBlogPosts';

import { useSelector } from 'react-redux'
import { SectionTitle, BlogElement, PropertyHighlights } from "../components";

import InfinitScroll from 'react-infinite-scroll-component';


const Blog = function () {
    console.log("Blog component render")    
    const [listings, setListings] = useState([]);
    const dataFetchedRef = useRef(false);
    const [BlogPosts, setBlogPosts] = useState({});
    const [uniqueTags, setUniqueTags] = useState([]);

    const [categoryCounts, setCategoryCounts] = useState({});
    const [loading, setLoading] = useState(false);
    const [filterState, setFilterState] = useState({});
    const [pagination, setPagination] = useState({
        CurrentPage: 1,
        pageSize: 4,
        TotalItemCount: 0,
        TotalPageCount: 0,
    });
    const length = 20;
    const { category } = useParams();
    const fetchBlogPostBySize = async (page, isResetFilter = false) => {
        try {
            setLoading(true);
            console.log(filterState);
            console.log(isResetFilter);

            let _url = "http://justpayowners.runasp.net/api/BlogPost/GetBlogPostByCategory";

            
            console.log("Category from URL:", category);

            if (category && category.length > 0) {
                _url += `?Category=${category}` + `&pageNumber=${pagination.CurrentPage}&pageSize=${pagination.pageSize}`;
            } else {
                _url += `?pageNumber=${pagination.CurrentPage}&pageSize=${pagination.pageSize}`;
            }        
           

            const response = await fetch(_url);

            const responseHeader = JSON.parse(response.headers.get('X-Pagination'));
            setPagination(prev => ({ ...prev, CurrentPage: responseHeader.CurrentPage + 1, TotalItemCount: responseHeader.TotalItemCount, TotalPageCount: responseHeader.TotalPageCount }));
            const data = await response.json();
            data.map((item) => {
                        item.SampleimageURL = 'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg';
                        return item;
            });
            console.log(data);
            if (data.data) {
                setListings([...listings, ...data.data]);
            } else {
                setListings([...listings, ...data]);
            }
            console.log(data);
            setListings([...listings, ...data]);
            setLoading(false);
            //setPageNumber(prev => prev + 1);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        fetchBlogPostBySize(0);  

        fetchBlogPosts().then((resp) => {
                console.log("blogdata - ", resp)
                //add new imageurL to the response
                //resp.data.map((item) => {                   
                //    return item;
                //});

            const counts = {};
            const tagSet = new Set();
            resp.data.forEach((item) => {
                const category = item.category || "Uncategorized";
                counts[category] = (counts[category] || 0) + 1;

                if (item.tags) {
                    const tags = item.tags.split(",").map((tag) => tag.trim());
                    tags.forEach((tag) => tagSet.add(tag));
                }
            });
            setUniqueTags(Array.from(tagSet));
            setCategoryCounts(counts);


             // setBlogPosts(resp.data);
            }).catch(error => {
           console.error('Error fetching blog posts:', error);
         });
    }, [category]);

    //useEffect(() => {
    //    fetchBlogPosts().then((resp) => {
    //        console.log("blogdata - ", resp)
    //        //add new imageurL to the response
    //        resp.data.map((item) => {
    //            item.SampleimageURL = 'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg';
    //            return item;
    //        });
    //        setBlogPosts(resp.data);
    //    }).catch(error => {
    //        console.error('Error fetching blog posts:', error);
    //    });
    //}, []);

    return (<>
        <section className="grid-wrap3">
            <div className="container">
                <div className="row gutters-40">

                    <div className="col-lg-4 widget-break-lg sidebar-widget">
                        <div className="widget widget-categoery-box">
                            <h3 className="widget-subtitle">Categories</h3>
                            <ul className="categoery-list">

                                {Object.entries(categoryCounts).map(([category, count]) => (
                                    <li key={category}>
                                        <a href={category}>{category}<span className="categoery-count">{count}</span></a>                                        
                                    </li>
                                ))}
                                {/*<li><a href="#">Apartments<span className="categoery-count">03</span></a></li>*/}
                                {/*<li><a href="#">Corporate Building<span className="categoery-count">05</span></a></li>*/}
                                {/*<li><a href="#">Home Land<span className="categoery-count">01</span></a></li>*/}
                                {/*<li><a href="#">Family House<span className="categoery-count">05</span></a></li>*/}
                                {/*<li><a href="#">Real Homes<span className="categoery-count">08</span></a></li>*/}
                                {/*<li><a href="#">Realty Space<span className="categoery-count">09</span></a></li>*/}
                            </ul>
                        </div>
                        <div className="widget widget-taglist">
                            <h3 className="widget-subtitle">Popular Tags</h3>
                            <ul className="tag-list">

                                {uniqueTags.map((tag ,index) => (
                                    
                                      <li key={index}><a href={"../../blog/" +tag}>{tag}</a></li>
                                ))}

                            </ul>
                        </div>
                        <div className="widget widget-listing-box1">
                            <h3 className="widget-subtitle">Latest Listing</h3>
                            <PropertyHighlights pickedData={[]} headline={'Latest Our Residential Rental Post'} url="residential_rentals" template="Blog" />
                        </div>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="row">
                            {listings.length === 0 && <h5 className="text-accent-content text-center text-4xl my-10">No blog data found </h5>}                            
                             <InfinitScroll
                                dataLength={listings.length}
                                next={fetchBlogPostBySize}
                                hasMore={listings.length < pagination.TotalItemCount}
                                loader={<h4>Loading ... </h4>}
                            // scrollableTarget="scrollableID"
                            >
                                <div class="row">
                                    {
                                        loading
                                            ?
                                            <div className="loading_container mt-40 flex items-center justify-center flex-col">
                                                <p className='font-heading text-lg text-center text-brand-blue '>Searching...</p>
                                            </div>
                                            :
                                            <>
                                                {
                                                    listings.length !== 0 ?
                                                        <>
                                                            {
                                                                listings && listings.map((listing, index) => <BlogElement data={listing} key={index} id={"article" + index} />)
                                                                   
                                                            }
                                                        </>
                                                        :
                                                        <div className=" mt-40 flex items-center justify-center flex-col">
                                                            <p className='font-heading text-lg text-center text-brand-blue '>Sorry, Blog not found</p>
                                                        </div>
                                                }
                                            </>
                                    }
                                </div>
                            </InfinitScroll>


                        </div>
                    </div>
                    
                </div>
            </div>
        </section>




    </>
    );
};



export default memo(Blog);
