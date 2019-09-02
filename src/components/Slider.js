import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import '../slider-animations.css';
import "../styles.css";

const content = [
	{
		title: 'GLAS Animation Festival 2020',
		description:
		'GLAS Animation Festival showcases a wide array of exciting animation from all over the world. Help us make our 5th edition take off!.',
		button: 'Read More',
		image: '/img/img1.jpg',
		user: 'GLAS Animation',
		userProfile: '/img/prof1.jpeg'
	},
	{
		title: 'FableWood Returns - The 5 New Magnetic Wooden Animals!',
		description:
		'The new magnetic line up from FableWood. Mix, Match, Combine and Create your own curious creatures. Endless possibilities for all ages.',
		button: 'Discover',
		image: '/img/img2.jpg',
		user: 'FableWood',
		userProfile: '/img/prof2.png'
	},
	{
		title: 'The Wind and Wilting Blossom',
		description:
		'Battle yokai and navigate the war-torn lands of a randomly generated Heian period Japan in this FTL-style roguelike.',
		button: 'Buy now',
		image: '/img/img3.png',
		user: 'Picklefeet Games',
		userProfile: '/img/prof3.png'
	}
];

export default class SliderObj extends React.Component {

    render() {
        return (
            <div>
                <Slider className="slider-wrapper" autoplay={3000}>
                    {content.map((item, index) => (
                        <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>{item.button}</button>
                            </div>
                            <section>
                                <img src={item.userProfile} alt={item.user} />
                                <span>
                                Posted by <strong>{item.user}</strong>
                                </span>
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}