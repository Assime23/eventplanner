import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
              <div className="event-planner-container">
            <header>
                <h1>Bienvenue dans Event Planner</h1>
            </header>
            <section className="description">
                 <p>
                    Planifiez et organisez vos événements sans effort avec Event Planner. Des anniversaires aux réunions d'entreprise, nous avons tout ce qu'il vous faut.
                 </p>
                 <button className="get-started-button">Commencer</button>
           
            </section>
            <section className="events_categories">

            </section>
            <section className="features">

            </section>
            <section className="testimonials">

            </section>
            <section className="contact">

            </section>
        </div>
        </div>
    );
};

export default EventPlanner;
