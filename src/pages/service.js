import { googleIcon, spotifyIcon, behanceIcon, pinterestIcon, youtubeIcon, facebookIcon, instagramIcon, twitterIcon} from "../components/icons"
import NavBar from '../components/navbar.js';
import React, {useState} from 'react';
import './service.css'

export const services = [
    { name:"Google",    icon: googleIcon,       path: "google",         themes: ["News", "Cinema", "Design", "School", "Student", "Bank", "Music", "Art", "Cat", "Dog", "Payment", "Woman", "Men", "Car", "Gym", "Workout", "Covid 19", "Lesson", "Business", "Product", "Ecologie", "Education", "Children", "Intership", "Job", "Market", "Lyon", "Paris", "Humour", "France", "Video Game", "Books", "Software", "Make Up", "Sport", "Rock", "Electro", "Jazz", "3D", "Phone", "Computeur", "Code", "TV", "Streaming", "Brand", "Luxury", "Shopping", "Go out" , "Startup", "Bar", "Clubs", "Night life", "Creation"]},
    { name:"Spotify",   icon: spotifyIcon,      path: "spotify",        themes: ["Classical", "Country", "Electronic dance music", "Hip-hop", "Indie rock", "Jazz", "K-pop", "Metal", "Oldies", "Pop", "Rap", "Rhythm & blues (R&B)", "Rock", "Folk", "Blues", "Gospel", "Industrial", "Swing", "Mexican", "Samba", "Tango", "Bachata", "A capella", "Drum & bass", "Euro-disco", "Flamenco", "Glitch pop", "Opera", "Polka", "Trance", "Calypso", "Dancehall", "Reggae", "Zouk", "Chinese traditional opera", "Hindustani", "J-pop", "Afrobeats"]},
    { name:"Behance",   icon: behanceIcon,      path: "behance",        themes: ["3D", "Photo", "Photoshop", "Motion", "Poster", "After Effect", "Aero", "MAX", "Illustrator", "Branding", "Type", "Typographie", "Logo", "Video", "Blender", "Cinema 4d", "Lightroom", "Illustration", "UI/UX", "InDesign", "Architecture", "Product Design", "Fashion", "Advertising", "Fine Art", "Craft", "Game Design", "Free", "Sound", "Creative Challenge", "Fresco", "Substance", "Capure", "Dimension", "Sketch"]},
    { name:"Pinterest", icon: pinterestIcon,    path: "pinterest",      themes: ["3D", "Photo", "Photoshop", "Motion", "Poster", "After Effect", "Aero", "MAX", "Illustrator", "Branding", "Type", "Typographie", "Logo", "Video", "Blender", "Cinema 4d", "Lightroom", "Illustration", "UI/UX", "InDesign", "Architecture", "Product Design", "Fashion", "Advertising", "Fine Art", "Craft", "Game Design", "Free", "Sound", "Creative Challenge", "Fresco", "Substance", "Capure", "Dimension", "Sketch"]},
    { name:"Youtube",   icon: youtubeIcon,      path: "youtube",        themes: ["News", "Cinema", "Design", "School", "Student", "Bank", "Music", "Art", "Cat", "Dog", "Payment", "Woman", "Men", "Car", "Gym", "Workout", "Covid 19", "Lesson", "Business", "Product", "Ecologie", "Education", "Children", "Intership", "Job", "Market", "Lyon", "Paris", "Humour", "France", "Video Game", "Books", "Software", "Make Up", "Sport", "Rock", "Electro", "Jazz", "3D", "Phone", "Computeur", "Code", "TV", "Streaming", "Brand", "Luxury", "Shopping", "Go out" , "Startup", "Bar", "Clubs", "Night life", "Creation"]},
    { name:"Facebook",  icon: facebookIcon,     path: "facebook",       themes: ["News", "Cinema", "Design", "School", "Student", "Bank", "Music", "Art", "Cat", "Dog", "Payment", "Woman", "Men", "Car", "Gym", "Workout", "Covid 19", "Lesson", "Business", "Product", "Ecologie", "Education", "Children", "Intership", "Job", "Market", "Lyon", "Paris", "Humour", "France", "Video Game", "Books", "Software", "Make Up", "Sport", "Rock", "Electro", "Jazz", "3D", "Phone", "Computeur", "Code", "TV", "Streaming", "Brand", "Luxury", "Shopping", "Go out" , "Startup", "Bar", "Clubs", "Night life", "Creation"]},
    { name:"Instagram", icon: instagramIcon,    path: "instagram",      themes: ["News", "Cinema", "Design", "School", "Student", "Bank", "Music", "Art", "Cat", "Dog", "Payment", "Woman", "Men", "Car", "Gym", "Workout", "Covid 19", "Lesson", "Business", "Product", "Ecologie", "Education", "Children", "Intership", "Job", "Market", "Lyon", "Paris", "Humour", "France", "Video Game", "Books", "Software", "Make Up", "Sport", "Rock", "Electro", "Jazz", "3D", "Phone", "Computeur", "Code", "TV", "Streaming", "Brand", "Luxury", "Shopping", "Go out" , "Startup", "Bar", "Clubs", "Night life", "Creation"]},
    { name:"Twitter",   icon: twitterIcon,      path: "twitter",        themes: ["News", "Cinema", "Design", "School", "Student", "Bank", "Music", "Art", "Cat", "Dog", "Payment", "Woman", "Men", "Car", "Gym", "Workout", "Covid 19", "Lesson", "Business", "Product", "Ecologie", "Education", "Children", "Intership", "Job", "Market", "Lyon", "Paris", "Humour", "France", "Video Game", "Books", "Software", "Make Up", "Sport", "Rock", "Electro", "Jazz", "3D", "Phone", "Computeur", "Code", "TV", "Streaming", "Brand", "Luxury", "Shopping", "Go out" , "Startup", "Bar", "Clubs", "Night life", "Creation"]}
]

const colorArray = ["#f19066", "#f5cd79", "#546de5", "#e15f41", "#c44569", "#574b90", "#f78fb3", "#3dc1d3", "#e66767", "#303952"]

function findService(route)
{
    let path = route.substring(route.indexOf(":") + 1);
    for (let [index, element] of Object.entries(services) )
    {
        if (path === element.path)
        {
            return index
        }
    }
    return -1
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

class Service extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            logged: false,
            ended: false
        };

        this.actual = services[findService(window.location.pathname)]
        if (this.actual === -1)
        {
            window.location.href = "404";
        }

        this.themeList = []
        shuffleArray(this.actual.themes).forEach(element => {
            this.themeList.push({name: element, color: colorArray[Math.floor(Math.random() * colorArray.length)]})
        });

        this.addToList = this.addToList.bind(this);
        this.end = this.end.bind(this);
        this.startTime = new Date().getTime();
    }

    addToList(string)
    {
        const {list} = this.state;
        const index = list.indexOf(string);
        if (index > -1) {
            list.splice(index, 1);
        }
        else {
            list.push(string)
        }
        this.setState({list: list});
    }

    end()
    {
        var endTime = new Date().getTime();
        window.location.href = "/end:" + this.actual.path + "-" + this.state.list.length + "-" + (endTime - this.startTime)
    }

    render() {
        return (
        <div>
            <NavBar/>
            <div className="service-page__container">
                <div className="service-page--theme-list__container center-horizontal">
                    <div className="font-main service-page--theme-list__text">
                        Your future recommendations for <span className="color-main">{this.actual.name}</span> will talk about :
                    </div>
                    <div className="service-page--theme-list">
                        {this.themeList.map((item) =>
                            <Theme name={item.name} callback={() => {this.addToList(item.name)}} selected={this.state.list.includes(item.name)} hoverStyle={{backgroundColor: item.color, color: "#ffffff"}} key={item.name}/>
                        )}
                    </div>
                </div>
                <div className="service-page--selection__container center-horizontal">
                    <div className="service-page--selection__icon">
                        {this.actual.icon}
                    </div>
                    <div className="service-page--selection__list">
                        {this.state.list.map((item) =>
                            <Theme name={item} callback={() => {this.addToList(item)}} hoverStyle={{backgroundColor: "#eb2f06", color: "#ffffff", textDecorationLine: "line-through"}} key={item}/>
                        )}
                    </div>
                    <ValidationButton name="Change my mind" available={this.state.list.length > 0} callback={this.end}/>
                </div>
            </div>
            {!this.state.logged ?
            <div className="connection__container center-horizontal">
                <ValidationButton name="Back" available={true} callback={() => {window.location.href = "/home"}}/>
                <ValidationButton name="Connect" available={true} callback={() => {this.setState({logged: true})}}/>
            </div>
            : null}
        </div>
    )}
}

function Theme(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        setHover(true)
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    return(
        <button className={"theme-button" + (props.selected ? "--selected" : (hover ? "--hover " : "")) + (hover ? " theme-button--up" : "") + " font-main"}
                style={hover || props.selected  ? props.hoverStyle : undefined}
                onFocus={toggleHoverEnter}
                onBlur={toggleHoverLeave}
                onMouseEnter={toggleHoverEnter}
                onMouseLeave={toggleHoverLeave}
                onClick={props.callback}>
            {props.name}
        </button>
    )
}

function ValidationButton(props)
{
    const [hover, setHover] = useState(false);

    const toggleHoverEnter = () => {
        if (props.available)
        {
            setHover(true)
        }
    }

    const toggleHoverLeave = () => {
        setHover(false)
    }

    return(
        <button className={"validation-button" + (props.available ? "--available" : "") + " font-main" + (hover ? " validation-button--hover" : "")}
                onFocus={toggleHoverEnter}
                onBlur={toggleHoverLeave}
                onMouseEnter={toggleHoverEnter}
                onMouseLeave={toggleHoverLeave}
                onClick={()=> { if (props.available) {props.callback()}}}>
            {props.name}
        </button>
    )
}

export default Service;
