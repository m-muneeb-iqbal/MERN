import React from "react";

const Section2 = () => {
  return (
    <section className="section-3 container-fluid mb-0">
      <div className="row">
        <div className="col-2"></div>

        <div className="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-md-0 mt-sm-0 mt-5">
          <div className="col-1 position-fixed button-container">
            <button
              onclick="scrollToSection(0)"
              className="border-0 bg-white image-button"
              data-index="0"
              data-image-default="../Images/icons/Post icon.png"
              data-image-selected="../Images/icons/Selected Post.png"
            >
              <img
                src="../Images/icons/Post icon.png"
                alt="Post button"
                className="img-fluid"
              />
            </button>

            <button
              onclick="scrollToSection(1)"
              className="border-0 bg-white image-button"
              data-index="0"
              data-image-default="../Images/icons/Chat.png"
              data-image-selected="../Images/icons/Selected Chat.png"
            >
              <img
                src="../Images/icons/Chat.png"
                alt="Chat button"
                className="img-fluid"
              />
            </button>

            <button
              onclick="scrollToSection(2)"
              className="border-0 bg-white image-button"
              data-index="0"
              data-image-default="../Images/icons/Events.png"
              data-image-selected="../Images/icons/Selected Events.png"
            >
              <img
                src="../Images/icons/Events.png"
                alt="Events Button"
                className="img-fluid"
              />
            </button>

            <button
              onclick="scrollToSection(3)"
              className="border-0 bg-white image-button"
              data-index="0"
              data-image-default="../Images/icons/Community.png"
              data-image-selected="../Images/icons/Selected Community.png"
            >
              <img
                src="../Images/icons/Community.png"
                alt="Community button"
                className="img-fluid"
              />
            </button>

            <button
              onclick="scrollToSection(4)"
              className="border-0 bg-white image-button"
              data-index="0"
              data-image-default="../Images/icons/Story icon.png"
              data-image-selected="../Images/icons/Selected Story.png"
            >
              <img
                src="../Images/icons/Story icon.png"
                alt="Story button"
                className="img-fluid"
              />
            </button>
          </div>

          <p className="h1 text-success">Post</p>
          <p>100% USER CONTROL</p>
          <p>U Post to who you want.</p>
          <p>U decide how long your content lives</p>
          <p>Self-Destruct times illustration</p>

          <img
            src="../Images/notIcons/Post.png"
            alt=""
            className="img-fluid image"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
          <p className="h1 text-success">Chat</p>
          <p>Encrypted for your security.</p>
          <p>Message 1 person, create a group and message more!</p>

          <img
            src="../Images/notIcons/Chat Images.png"
            alt=""
            className="img-fluid image"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
          <p className="h1 text-success">U Events w/RSVP feature</p>
          <p>
            Scheduling events, meetings, lunches and dinners have never been
            easier.
          </p>
          <p>
            Set the event, select the guest and send the event, we handle the
            rest.
          </p>
          <p>Automatically enters in your event calendar.</p>

          <img
            src="../Images/notIcons/Birthday.png"
            alt=""
            className="img-fluid image"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center section mt-5">
          <p className="h1 text-success">U Communities</p>
          <p>
            U can set up any type of group, whether it is with two people or
            establish a new community for the everyone, it's up to U.
          </p>
          <p>
            U have public and private groups for you to decide to create or
            join.
          </p>

          <img
            src="../Images/notIcons/Cafe.png"
            alt=""
            className="img-fluid image"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-md-4 col-sm-4 col-8 d-flex flex-column justify-content-center mt-5 section">
          <p className="h1 text-success">Stories</p>
          <p>
            U can stay connected with your college friends and easily share your
            college memories and experiences all at once!
          </p>

          <img
            src="../Images/notIcons/Story.png"
            alt=""
            className="img-fluid story"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
