import { SectionTitle, PostPropertyForm ,WhatWeDoDashboard } from "../components";

function PostProperty(props) {
    return (
       
        <main className="site-main content-area">

            <div className="container">
                <div className="row gutters-40">
                    <div className="col-lg-4 widget-break-lg sidebar-widget">
                        <WhatWeDoDashboard />
                    </div>
                    <div className="col-lg-8">
                        <div className="team-box1 team-box5">                            
                            <div className="item-content">
                               
                                <PostPropertyForm />
                                
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

        </main>

      




    );
}

export default PostProperty;

