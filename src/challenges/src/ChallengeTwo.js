import React from 'react';

const ChallengeTwo = () => {
    return (
        <div className="card">
            <div className="card__image">
                <img src="https://place-hold.it/300x160/02075d/fff?text=Placeholder%20image" alt="Placeholder image"/>
                <div className="card__image__price">£149.00</div>
            </div>
            <div className="card__content">
                <h4 className="card__content__heading">
                    An Introduction to the Biggest Mysteries of the Cosmos
                </h4>
                <div className="card__content__summary">
                    This course introduces what we know about the universe, 
                    before exploring four key mysteries that are the focus 
                    of cutting-edge research in cosmology.
                </div>
            </div>
            <div className="card__footer">
                <div className="card__footer__lessons">
                    <div className="card__footer__lessons-number">52</div>
                    <div className="card__footer__lessons-text">Lessons</div>
                </div>
            </div>
        </div>
    );
};
export default ChallengeTwo;