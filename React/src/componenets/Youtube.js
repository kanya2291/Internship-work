import React, { useState } from 'react'
import './youstyles.css'
import 'primeicons/primeicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from 'react-bootstrap';
import VideoButton from './VideoButton';
import im from "./youtube.svg"
import { faGear, faFlag, faCircleQuestion, faMessage, faLightbulb, faClapperboard, faMusic, faRecordVinyl, faFire, faBagShopping, faGamepad, faMicrophone, faEllipsisVertical, faMagnifyingGlass, faFileVideo } from '@fortawesome/free-solid-svg-icons'
const Youtube = () => {
    const [sidebar_content, setNavCollapse] = useState(true)
    const [maindivv, setContentCollapsed] = useState(false);
    const [collapseDiv,setCollapseDiv]=useState(false)
    const showSideBar = () => {
        setNavCollapse(!sidebar_content)
        setContentCollapsed(!maindivv)
        setCollapseDiv(!collapseDiv)
    }
    return (
        <div className='containerr'>
            <div className='nav-div'>
                <nav className='nav'>
                    <div className='yimage'>
                        <i id='bars' className='pi pi-bars' style={{ marginTop: "20px", paddingRight: "20px", marginLeft: "30px", cursor: "pointer" }} onClick={showSideBar} />
                        <a href='#'><img src={im} className='you-image'></img></a></div>
                    <div className='search'>
                        <input type="search" placeholder='search' className='inputt' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchButton' style={{ cursor: "pointer" }} />
                    </div>

                    <button class="rounded-circle"><FontAwesomeIcon icon={faMicrophone} style={{ marginTop: "8px" }} /></button>
                    <ul>
                        <li><i className='pi pi-video ' style={{ scale: "1.3" }} /></li>
                        <li><i className='pi pi-bell' style={{ fontSize: "1.4rem" }} /></li>
                        <li><img src='https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1600' style={{ width: "30px", height: "30px", marginTop: "1px", borderRadius: "50px", gap: "10px" }} /></li>
                    </ul>
                </nav>
            </div>
            <div className="youtube">
                <div className={sidebar_content ? "nav-menu active" : "nav-menu"}>
                    <div className='sidebar_container'>
                        <button class="btn btn-light"><i className='pi pi-home ' style={{ float: "left", marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Home</button>
                        <button class="btn "><i className='pi pi-history ' style={{ float: "left", marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Shorts</button>
                        <button class="btn "><img src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png' style={{ width: "20px", marginRight: "19px" }} />Subscription</button>
                        <hr className='horizontal' />
                        <button class="btn"><img src='https://static.vecteezy.com/system/resources/previews/011/994/022/original/simple-video-library-icon-sign-design-free-png.png' style={{ width: "20px" ,marginRight:"19px" }} />Library</button>
                        <button class="btn"><i className='pi pi-history ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />History</button>
                        <button class="btn"><i className='pi pi-video ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Your Videos</button>
                        <button class="btn"><i className='pi pi-clock ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Watch Later</button>
                        <button class="btn"><i className='pi pi-arrow-down ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Downloads</button>
                        <button class="btn"><i className='pi pi-thumbs-up-fill ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Liked Videos</button>
                        <hr className='horizontal' />
                        <h6 style={{ marginLeft: "20px" }}>Explore</h6>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faFire} style={{ scale: "1.5", marginRight: "25px" }} />Trending</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faBagShopping} style={{ scale: "1.5", marginRight: "25px" }} />Shopping</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faMusic} style={{ scale: "1.5", marginRight: "25px" }} />Music</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faClapperboard} style={{ scale: "1.5", marginRight: "25px" }} />Movies</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faRecordVinyl} style={{ scale: "1.5", marginRight: "25px" }} />Live</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faGamepad} style={{ scale: "1.5", marginRight: "25px" }} />Gaming</button>
                        <button type="button" class="btn"><i className='pi pi-thumbs-up-fill ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />News</button>
                        <button type="button" class="btn"><i className='pi pi-thumbs-up-fill ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Sports</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faLightbulb} style={{ scale: "1.5", marginRight: "25px" }} />Learning</button>
                        <button type="button" class="btn"><i className='pi pi-thumbs-up-fill ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Fashion & Beauty</button>
                        <hr className='horizontal' />
                        <h6 style={{ marginLeft: "20px" }}>More from YouTube</h6>
                        <button type="button" class="btn"><i className='pi pi-history ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />YouTube Premium</button>
                        <button type="button" class="btn"><i className='pi pi-history ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />YouTube Studio</button>
                        <button type="button" class="btn"><i className='pi pi-video ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Youtube Music</button>
                        <button type="button" class="btn"><i className='pi pi-clock ' style={{ marginTop: "4px", scale: "1.3", marginRight: "25px" }} />Youtube Kids</button>
                        <hr className='horizontal' />
                        <button type="button" class="btn"><FontAwesomeIcon icon={faGear} style={{ scale: "1.5", marginRight: "25px" }} />Settings</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faFlag} style={{ scale: "1.5", marginRight: "25px" }} />Report History</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faCircleQuestion} style={{ scale: "1.5", marginRight: "25px" }} />Help</button>
                        <button type="button" class="btn"><FontAwesomeIcon icon={faMessage} style={{ scale: "1.5", marginRight: "25px" }} />Send Feedback</button>
                        <hr className='horizontal'/>    
                        <button className='btn text-muted'><p>About press copyright contact Us creators Advertise Developers</p></button>
                        <button className='btn text-muted'><p>Terms Privacy Policy&safety How Youtube works Test new Features</p></button>
                        <small className='text-muted'style={{paddingLeft:"20px"}}>2023 Google LLC</small>
                    </div>

                </div>


                <div className={maindivv ? " content collapsed" : " content"} >
                    <div className='buttons' >
                        <button class='btn'>All</button>
                        <button class="btn" >Mixes</button>
                        <button class="btn ">Music</button>
                        <button class="btn ">Filmi</button>
                        <button class="btn "  >Tamil Cinema</button>
                        <button class="btn " >React Routers</button>
                        <button class="btn" >Computer Programming</button>
                        <button class="btn ">Live</button>
                        <button class="btn " >Gaming</button>
                        <button class="btn " >Game Shows</button>
                        <button class="btn " >Trailer</button>
                        <button class="btn " >Cricket</button>
                        <button class="btn " >Gadgets</button>
                        <button class="btn " >Recently Uploaded</button>
                        <button class="btn">New to you</button>
                        <button class="btn">Watched</button>
                        <button className='btn'>Hii</button>
                        <button className='btn'>Hii</button>
                        {/* <button className='btn'>Hii</button> */}
                    </div>
                    <div className='images'>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://www.thetelugufilmnagar.com/wp-content/uploads/2022/12/first-single-out-now.webp" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/6/63/Gemini_TV_Logo.png' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>Baby movie teaser now in theaters</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQH82D1DBTHRZuDrpt4wNaMYkGxunGyLHThg&usqp=CAU" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/cwRc-xkFPDD20DEVVPD7WXcxhCdSXJbBljFep64Co-1ex4ufc4LCAfhrDBOtDdq-HfZT1lHG9S0=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>Talvar movie release</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://i.ytimg.com/vi/Qw1c6hM2mz0/sddefault.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/6/63/Gemini_TV_Logo.png' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>Student Episode 1|| Shunmukh Jeswant</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>

                        <div className="cardd" >
                            <img className="cardd-image" src="https://www.pragimtech.com/wp-content/uploads/2020/04/react-js-tutorial-for-beginners.png" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/VbGkSvLpAmSOVxSQ-42YlR4uQjaRbADrBZ0Jbm8rpeI7RiFSEp2_8DJqzgqH4dWViwYOQy2QJnQ=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>react JS Live coding Interview 2023</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>

                        <div className="cardd" >
                            <img className="cardd-image" src="https://i.pinimg.com/1200x/bf/1a/85/bf1a85bd33428dcbe95486578be37e5b.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/1D5I_4CS3XlJIG0F7jl0cs1IF0nj6gUZq6wrBuGsCO50q4f8ctojQcO5iL9jCKshyXCeLgBgeA=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>How to MAke GLITTER textures From Scratch</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://i.ytimg.com/vi/PGlJFy7oinw/maxresdefault.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/7ojfXxplBRRJ-ZASwYnV2lNC8PZNLyA1cVBOrInnVgefvVzTGSEp84mersDerXvo5OmL7mZKVio=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>How to maek a website with Login and Register</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://i.ytimg.com/vi/pkdqoxL58FE/maxresdefault.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/6/63/Gemini_TV_Logo.png' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>Dear Kavya | season 1|Telugu Full movie</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://gumlet.assettype.com/newslaundry%2F2023-03%2F0829c7a1-00ef-48ba-9af2-57914e1ae70e%2F18.png?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/5wC_T4kKWBqq25l7m0YYVg5HFaUDnH8_rhGC5zSBfZC62NfSsr1NyCmJZty3_1LoMUrbKeoayA=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>The Hindu september 2023 Newspaper client</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://cdn.newsnationtv.com/resize/460_-/images/2023/09/05/bharat-india-54.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/1D5I_4CS3XlJIG0F7jl0cs1IF0nj6gUZq6wrBuGsCO50q4f8ctojQcO5iL9jCKshyXCeLgBgeA=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>India vs Bharat row gets bigger:BJP keeps doing this to wipe open</span>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://i.ytimg.com/vi/Wfx_3T2dbvY/maxresdefault.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/0xhJ9nRJdGznb8DkM07iLDHe7kHLT_Aeerm7h3o_EaSdNEyCbo7bOvM05KzG6DJj5D-nU7YGnA=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>Salaaar teaser review:Prabhas' film|| Salaaar movie teaser</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://i.ytimg.com/vi/0JSNDj8Zabc/maxresdefault.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/ytc/AOPolaQqNvslPpkOOREUNBZeZn9LJNY1TL1hxnFH9GphVw=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>Darling Movie|| Prabhas || Kajal Agarwal</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                        <div className="cardd" >
                            <img className="cardd-image" src="https://i.ytimg.com/vi/qgSpqOHP3H8/maxresdefault.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/5vXiRMqdsu4qiZ7qFjuSLV-BVRxP5TkXrJa-7MeOsVYZtdA6dB43Hf0WNp0iq4o-a4N1Bih3Pg=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>RAJA RANI (Original Background Score) -Jukebox</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>

                        <div className="cardd" >
                            <img className="cardd-image" src="https://assets-in.bmscdn.com/discovery-catalog/events/et00002203-vyccpnwnyv-landscape.jpg" alt="Card image cap" />
                            <div className="card-body" style={{ display: "flex" }} >
                                <div>
                                    <img src='https://yt3.googleusercontent.com/UuVHbLdc7fJBqQOolkfMFVx6Pj3nhXWWzGHwPFKz_2u65i-ihDpc9DarM1dq5kDTPYiWgeLW2A=s176-c-k-c0x00ffffff-no-rj' style={{ width: "40px", height: "40px", borderRadius: "50%", marginTop: "6px" }} />

                                </div>
                                <div style={{ width: "300px", fontWeight: "bolder" }}>
                                    <span>Surya Son of Krishnan Movie | Nalone Pongenu NArmada</span><br></br>
                                    <span className='text-muted'>Shanmukh Jeswant</span><br></br>
                                    <span className='text-muted'>1.8M views.18 hours ago</span>
                                </div>
                                <div style={{ marginRight: "-46px", marginTop: "2px" }}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  id="msidebar"className={collapseDiv ? "newContent active" :"newContent"}>
                <div className='collapse-divCon'>
                    <button>
                    <i className='pi pi-home ' />
                    <h6>Home</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <i className='pi pi-video ' />
                    <h6>shorts</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <FontAwesomeIcon icon={faFileVideo} />
                    <h6>Subscription</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <img src='https://static.vecteezy.com/system/resources/previews/011/994/022/original/simple-video-library-icon-sign-design-free-png.png' style={{ width: "25px" }} />
                    <h6>library</h6></button>
                </div>
                <div className='collapse-divCon'>
                    <button>
                    <i className='pi pi-arrow-down ' />
                    <h6>Downloads</h6></button>
                </div>
            </div>
        </div>

    )
}

export default Youtube