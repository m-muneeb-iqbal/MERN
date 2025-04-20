import React from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../../node_modules/bootstrap/dist/js/bootstrap.js'
import './../styles/style.css'
import { scrollToSectionCover } from '../scripts/script.js';
import { scrollToSection } from '../scripts/script.js';

const Main = () => {
    return (
        <main>

            <section className="container-fluid mt-0 section-1">

                <div className="row">

                    <div className="col-lg-7 col-12 d-flex flex-column align-items-center text-center mt-3 pt-3">

                        <p className="text-white fw-bold private-social-text mt-5 pt-5">

                            The private social app made for&nbsp;
                            <span className="college-life-text d-inline-block">college life</span>

                        </p>

                        <img src="./Images/notIcons/line_home.png" alt="main heading underline" className="img-fluid line"/>
                        
                        <div className="mt-5 pt-5 pb-1 mt-md-3 pt-md-3 pb-md-0 ">

                            <p type="button" className="btn btn-success fw-bold join-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

                                Sign up Now

                                <img src="./Images/icons/Arrow-Icon.png" alt="" className="img-fluid"/>

                            </p>

                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                                    <div className="modal-content">

                                        <svg type="button" className="mx-5 mt-3" data-bs-dismiss="modal" aria-label="Close" viewBox="0 0 16 16" width="2em" height="2em" focusable="false" role="img" aria-label="arrow left circle" 
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-arrow-left-circle b-icon bi">
                                            <g>
                                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z">
                                                </path>
                                            </g>
                                        </svg>

                                        <div className="modal-body p-5">

                                            <p className="modal-title fw-bolder text-start waiting-list" id="staticBackdropLabel">Join the Waiting List and Secure Your Spot!</p>

                                            <p className="text-start">Exciting things are coming, and you don't want to miss out!</p>
                                            <form action="" className="needs-validation" novalidate>

                                            <input type="email" placeholder="Enter your email" className="form-control col-md-12 mb-3" required/>
                                                <input type="text" placeholder="Enter your username" className="form-control col-md-12 mb-3" required/>
                                                <input type="password" placeholder="Enter your password" className="form-control col-md-12 mb-3" required/>
                                                <input type="password" placeholder="Enter your password again" className="form-control col-md-12 mb-3" required/>

                                                <button className="btn btn-success col-md-12 w-100 main-submit" type="submit">

                                                    Join

                                                </button>

                                            </form>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <img src="./Images/icons/Mouse.png" alt="scroll mouse" className="img-fluid mouse-icon"onClick={scrollToSectionCover} />

                    </div>

                    <div className="col-lg-5 flex-column d-flex align-items-center justify-content-center">

                        <div className="d-lg-block d-none px-5">

                            <div className="d-flex justify-content-center align-items-center rounded-circle outer-1">

                                <div className="main-image position-absolute">

                                    <img src="./Images/notIcons/Mobile-logo-Style.png" alt="edyou logo" className="img-fluid"/>
                                        
                                </div>

                                <div className="image-1 position-absolute">

                                    <img src="./Images/notIcons/image-22.png" alt="icon 1" className="img-fluid"/>

                                </div>    

                                <div className="check-image-1 position-absolute">

                                    <img src="./Images/notIcons/check-image-1.png" alt="check icon 1" className="img-fluid"/>

                                </div>

                                <div className="image-2 position-absolute">

                                    <img src="./Images/notIcons/Group-494.png" alt="icon 2" className="img-fluid"/>

                                </div>

                                <div className="image-3 position-absolute">

                                    <img src="./Images/notIcons/image-23.png" alt="icon 3" className="img-fluid"/>

                                </div>

                                <div className="check-image-3 position-absolute">

                                    <img src="./Images/notIcons/check-image-3.png" alt="check icon 3" className="img-fluid"/>

                                </div>

                                <div className="image-4 position-absolute">

                                    <img src="./Images/notIcons/Rectangle-163.png" alt="icon 4" className="img-fluid"/>

                                </div>

                                <div className="check-image-4 position-absolute">

                                    <img src="./Images/notIcons/check-image-4.png" alt="check icon 4" className="img-fluid"/>

                                </div>

                                <div className="image-5 position-absolute">

                                    <img src="./Images/notIcons/Group-497.png" alt="icon 5" className="img-fluid"/>

                                </div>

                                <div className="image-6 position-absolute">

                                    <img src="./Images/notIcons/Rectangle-168.png" alt="icon 6" className="img-fluid"/>

                                </div>

                                <div className="check-image-6 position-absolute">

                                    <img src="./Images/notIcons/check-image-6.png" alt="check icon 6" className="img-fluid"/>

                                </div>

                                <div className="image-7 position-absolute">

                                    <img src="./Images/notIcons/image-21.png" alt="icon 7" className="img-fluid"/>

                                </div>

                                <div className="check-image-7 position-absolute">

                                    <img src="./Images/notIcons/check-image-7.png" alt="check icon 7" className="img-fluid"/>

                                </div>

                                <div className="image-8 position-absolute">

                                    <img src="./Images/notIcons/Group-493.png" alt="icon 8" className="img-fluid"/>

                                </div>

                                <div className="image-9 position-absolute">

                                    <img src="./Images/notIcons/Avatar-16-1.png" alt="icon 9" className="img-fluid"/>

                                </div>

                                <div className="check-image-9 position-absolute">

                                    <img src="./Images/notIcons/check-image-9.png" alt="check icon 9" className="img-fluid"/>

                                </div>

                                <div className="image-10 position-absolute">

                                    <img src="./Images/notIcons/Rectangle-169.png" alt="icon 10" className="img-fluid"/>

                                </div>

                                <div className="check-image-10 position-absolute">

                                    <img src="./Images/notIcons/check-image-10.png" alt="check icon 10" className="img-fluid"/>

                                </div>

                                <div className="image-11 position-absolute">

                                    <img src="./Images/notIcons/Group-495.png" alt="icon 11" className="img-fluid"/>

                                </div>

                                <div className="image-12 position-absolute">

                                    <img src="./Images/notIcons/Rectangle-167.png" alt="icon 12" className="img-fluid"/>

                                </div>

                                <div className="check-image-12 position-absolute">

                                    <img src="./Images/notIcons/check-image-12.png" alt="check icon 12" className="img-fluid"/>

                                </div>

                                <div className="image-13 position-absolute">

                                    <img src="./Images/notIcons/Rectangle-165.png" alt="icon 13" className="img-fluid"/>

                                </div>

                                <div className="check-image-13 position-absolute">

                                    <img src="./Images/notIcons/check-image-13.png" alt="check icon 13" className="img-fluid"/>

                                </div>

                                <div className="line-1 position-absolute"></div>
                                <div className="line-2 position-absolute"></div>
                                <div className="line-3 position-absolute"></div>
                                <div className="line-4 position-absolute"></div>
                                <div className="line-5 position-absolute"></div>
                                <div className="line-6 position-absolute"></div>
                                <div className="line-7 position-absolute"></div>
                                <div className="line-8 position-absolute"></div>
                                <div className="line-9 position-absolute"></div>
                                <div className="line-10 position-absolute"></div>
                                <div className="line-11 position-absolute"></div>
                                <div className="line-12 position-absolute"></div>
                                <div className="line-13 position-absolute"></div>
                
                                <div className="d-flex justify-content-center align-items-center rounded-circle outer-2">
                              
                                    <div className="d-flex justify-content-center align-items-center rounded-circle outer-3">
                
                                        <div className="d-flex justify-content-center align-items-center rounded-circle outer-4"></div>
                
                                    </div>
                
                                </div>    
                    
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section  class="container-fluid section-2 pt-5">

                <div class="row">

                    <div class="col-12 d-flex justify-content-center cover-section">

                        <img src="./Images/notIcons/Group-357.png" alt="cover brand" class="img-fluid pt-5"/>

                    </div>

                </div>

            </section>

            <section class="section-3 container-fluid mb-0">

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-md-0 mt-sm-0 mt-5">
    
                        <div class="col-1 position-fixed button-container">
    
                            <button onclick={scrollToSection(0)} class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Post-icon.png" data-image-selected="./Images/icons/Selected-Post.png">
    
                                <img src="./Images/icons/Post-icon.png" alt="Post button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick={scrollToSection(1)} class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Chat.png" data-image-selected="./Images/icons/Selected Chat.png">
    
                                <img src="./Images/icons/Chat.png" alt="Chat button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick={scrollToSection(2)} class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Events.png" data-image-selected="./Images/icons/Selected Events.png">
    
                                <img src="./Images/icons/Events.png" alt="Events Button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick={scrollToSection(3)} class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Community.png" data-image-selected="./Images/icons/Selected Community.png">
    
                                <img src="./Images/icons/Community.png" alt="Community button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick={scrollToSection(4)} class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Story icon.png" data-image-selected="./Images/icons/Selected Story.png">
    
                                <img src="./Images/icons/Story icon.png" alt="Story button" class="img-fluid"/>
                            
                            </button>
                            
                        </div>
    
                        <p class="h1 text-success">Post</p>
                        <p>100% USER CONTROL</p>
                        <p>U Post to who you want.</p>
                        <p>U decide how long your content lives</p>
                        <p>Self-Destruct times illustration</p>
    
                        <img src="./Images/notIcons/Post.png" alt="" class="img-fluid image"/>
    
                    </div>
    
                </div>

                <div class="row">

                    <div class="col-2"></div>
        
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
        
                        <p class="h1 text-success">Chat</p>
                        <p>Encrypted for your security.</p>
                        <p>Message 1 person, create a group and message more!</p>
        
                        <img src="./Images/notIcons/Chat Images.png" alt="" class="img-fluid image"/>
    
                    </div>
    
                </div>

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
    
                        <p class="h1 text-success">U Events w/RSVP feature</p>
                        <p>Scheduling events, meetings, lunches and dinners have never been easier.</p>
                        <p>Set the event, select the guest and send the event, we handle the rest.</p>
                        <p>Automatically enters in your event calendar.</p>
        
                        <img src="./Images/notIcons/Birthday.png" alt="" class="img-fluid image"/>
    
                    </div>
    
                </div>

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
        
                        <p class="h1 text-success">U Communities</p>
                        <p>U can set up any type of group, whether it is with two people or establish a new community for the everyone, it's up to U.</p>
                        <p>U have public and private groups for you to decide to create or join.</p>
                        
                        <img src="./Images/notIcons/Cafe.png" alt="" class="img-fluid image"/>
    
                    </div>
                
                </div>

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center mt-5 section">
    
                        <p class="h1 text-success">Stories</p>
                        <p>U can stay connected with your college friends and easily share your college memories and experiences all at once!</p>
        
                        <img src="./Images/notIcons/Story.png" alt="" class="img-fluid story"/>
        
                    </div>
    
                </div>

            </section>

            <section class="section-3 container-fluid mb-0">

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-md-0 mt-sm-0 mt-5">
    
                        <div class="col-1 position-fixed button-container">
    
                            <button onclick="scrollToSection(0)" class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Post icon.png" data-image-selected="./Images/icons/Selected Post.png">
    
                                <img src="./Images/icons/Post icon.png" alt="Post button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick="scrollToSection(1)" class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Chat.png" data-image-selected="./Images/icons/Selected Chat.png">
    
                                <img src="./Images/icons/Chat.png" alt="Chat button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick="scrollToSection(2)" class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Events.png" data-image-selected="./Images/icons/Selected Events.png">
    
                                <img src="./Images/icons/Events.png" alt="Events Button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick="scrollToSection(3)" class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Community.png" data-image-selected="./Images/icons/Selected Community.png">
    
                                <img src="./Images/icons/Community.png" alt="Community button" class="img-fluid"/>
                            
                            </button>
    
                            <button onclick="scrollToSection(4)" class="border-0 bg-white image-button" data-index="0" data-image-default="./Images/icons/Story icon.png" data-image-selected="./Images/icons/Selected Story.png">
    
                                <img src="./Images/icons/Story icon.png" alt="Story button" class="img-fluid"/>
                            
                            </button>
                            
                        </div>
    
                        <p class="h1 text-success">Post</p>
                        <p>100% USER CONTROL</p>
                        <p>U Post to who you want.</p>
                        <p>U decide how long your content lives</p>
                        <p>Self-Destruct times illustration</p>
    
                        <img src="./Images/notIcons/Post.png" alt="" class="img-fluid image"/>
    
                    </div>
    
                </div>

                <div class="row">

                    <div class="col-2"></div>
        
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
        
                        <p class="h1 text-success">Chat</p>
                        <p>Encrypted for your security.</p>
                        <p>Message 1 person, create a group and message more!</p>
        
                        <img src="./Images/notIcons/Chat Images.png" alt="" class="img-fluid image"/>
    
                    </div>
    
                </div>

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
    
                        <p class="h1 text-success">U Events w/RSVP feature</p>
                        <p>Scheduling events, meetings, lunches and dinners have never been easier.</p>
                        <p>Set the event, select the guest and send the event, we handle the rest.</p>
                        <p>Automatically enters in your event calendar.</p>
        
                        <img src="./Images/notIcons/Birthday.png" alt="" class="img-fluid image"/>
    
                    </div>
    
                </div>

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
        
                        <p class="h1 text-success">U Communities</p>
                        <p>U can set up any type of group, whether it is with two people or establish a new community for the everyone, it's up to U.</p>
                        <p>U have public and private groups for you to decide to create or join.</p>
                        
                        <img src="./Images/notIcons/Cafe.png" alt="" class="img-fluid image"/>
    
                    </div>
                
                </div>

                <div class="row">

                    <div class="col-2"></div>
    
                    <div class="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center mt-5 section">
    
                        <p class="h1 text-success">Stories</p>
                        <p>U can stay connected with your college friends and easily share your college memories and experiences all at once!</p>
        
                        <img src="./Images/notIcons/Story.png" alt="" class="img-fluid story"/>
        
                    </div>
    
                </div>

            </section>

        </main>
    );
};

export default Main;