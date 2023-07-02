import React, { useState } from 'react';
import EventCard from '../../components/Events/EventCard';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { eventData } from '../../static/data';
// import { useSelector } from "react-redux";
// import EventCard from "../components/Events/EventCard";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  //   const { allPage, isLoading } = useSelector((state) => state.events);
  const [allEvents, setAllEvents] = useState(eventData);

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div>
        <Header activeHeading={4} />
        <EventCard active={true} data={allEvents && allEvents[0]} />
        <EventCard active={true} data={allEvents && allEvents[0]} />

        <Footer />
      </div>
      {/* )} */}
    </>
  );
};

export default EventsPage;
