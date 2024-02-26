import React, { useEffect, useState } from 'react';

import html2canvas from 'html2canvas';

import maleimg from "./DPMale.jpg"

import femaleimg from "./DPFemale.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSun } from '@fortawesome/free-regular-svg-icons';

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { faCloudSun, faRetweet } from '@fortawesome/free-solid-svg-icons';

import { faMessage } from '@fortawesome/free-regular-svg-icons';

import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-regular-svg-icons';

import maleimage from "./BlankProfileMale.png";

function ContentComponent() {

    const [theme, setTheme] = useState(faSun);

    const [counter, setCounter] = useState(2);

    const [comment, setComment] = useState(0);

    const [like, setLike] = useState(0);

    const [retweet, setRetweet] = useState(0);

    const [name, setName] = useState("Name");

    const [username, setUsername] = useState("@username");

    const [tweet, setTweet] = useState("Tweet");

    const [gender, setGender] = useState("male");

    const [fullTime, setFullTime] = useState();

    const dark = {
        background: "rgb(17, 17, 17)",
        name_line: "white",
        user_time_report: "gray",
    }

    const light = {
        background: "rgb(195, 198, 180)",
        name_line: "rgb(31, 31, 46)",
        user_time_report: "black",
    }

    const dim = {
        background: "rgb(31, 31, 46)",
        name_line: "white",
        user_time_report: "gray",
    }

    const [mode, setMode] = useState(dark);

    function incr() {
        let x = counter;
        if (counter < 3) {
            x++;
        } else {
            x = 1;
        }
        setCounter(x);
    }

    function Username(x) {
        if (x.target.value[0] === "@") {
            setUsername(x.target.value);
        }
        else {
            x.target.value = "@" + x.target.value
            setUsername(x.target.value);
        }
    }

    const data = new Date();

    var hour = data.getHours();

    var minute = data.getMinutes();

    var month = data.getMonth();

    const date = data.getDate();

    const year = data.getFullYear();

    var fullTimeSet = "";

    switch (month) {
        case 0: month = "Jan";
            break;

        case 1: month = "Feb";
            break;

        case 2: month = "Mar";
            break;

        case 3: month = "Apr";
            break;

        case 4: month = "May";
            break;

        case 5: month = "Jun";
            break;

        case 6: month = "Jul";
            break;

        case 7: month = "Aug";
            break;

        case 8: month = "Sep";
            break;

        case 9: month = "Oct";
            break;

        case 10: month = "Nov";
            break;

        case 11: month = "Dec";
            break;

        default:
            break;
    }

    if (hour >= 12) {
        hour -= 12;
        if (hour < 10) {
            hour = hour.toString();
            hour = "0" + hour;
            if (minute < 10) {
                minute = minute.toString();
                minute = "0" + minute;
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year;
            } else {
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year;
            }
        } else {
            hour = hour.toString();
            if (minute < 10) {
                minute = minute.toString();
                minute = "0" + minute;
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year;
            } else {
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year;
            }
        }
    }
    else if (hour === 0) {
        hour = 12;
        hour = hour.toString();
        if (minute < 10) {
            minute = minute.toString();
            minute = "0" + minute;
            fullTimeSet = hour + ":" + minute + "AM . " + month + " " + date + ", " + year
        } else {
            fullTimeSet = hour + ":" + minute + "AM . " + month + " " + date + ", " + year
        }
    }
    else {
        if (hour >= 10) {
            hour = hour.toString();
            if (minute < 10) {
                minute = minute.toString();
                minute = "0" + minute;
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year
            } else {
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year
            }
        }
        else {
            hour = hour.toString();
            hour = "0" + hour;
            if (minute < 10) {
                minute = minute.toString();
                minute = "0" + minute;
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year
            } else {
                fullTimeSet = hour + ":" + minute + "PM . " + month + " " + date + ", " + year
            }
        }
    }

    const [dp, setDP] = useState(maleimg);

    useEffect(() => {
        setFullTime(fullTimeSet);
    }, [fullTimeSet]);

    useEffect(() => {
        if (gender === "male") {
            setDP(maleimg);
        }
        else {
            setDP(femaleimg);
        }
    }, [maleimg, femaleimg, gender]);

    useEffect(() => {
        if (counter === 1) {
            setMode(dark);
        }
        else if (counter === 2) {
            setMode(light);
        }
        else {
            setMode(dim)
        }
    }, [counter, dark, light, dim]);

    const handleImageDownload = async() => {
        const element = document.getElementById('hide'),
            canvas = await html2canvas(element),
            data = canvas.toDataURL('image/jpg'),
            link = document.createElement('a');

        link.href = data;
        link.download = 'downloaded-image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>
                Welcome to the Fake Tweet Generator!
            </h3>
            <p style={{ textAlign: "center" }}>
                Fill the required details and generate your Fake Tweet!
            </p>
            <div id='flex-content'>
                <div id='content'>
                    <div className='top-div'>
                        <span style={{ fontWeight: "bold" }}>Gender: </span>
                        <input type="radio" name="gender" value="male" id='male' onClick={() => { setGender("male"); }} />
                        <label onClick={() => { setGender("male"); }} for="male">Male</label>
                        <input type="radio" name="gender" value="female" id='female' onClick={() => { setGender("female"); }} />
                        <label onClick={() => { setGender("female"); }} for="female">Female</label>
                    </div>
                    <div className='top-div'>
                        <button onClick={() => { if (counter % 3 === 0) { setTheme(faMoon); } else if (counter % 2 === 0) { setTheme(faCloudSun) } else { setTheme(faSun) } incr(); }}>
                            <FontAwesomeIcon icon={theme} />
                        </button>
                    </div>
                    <div className='display' style={{ backgroundColor: mode.background, border: `2px solid ${mode.name_line}` }}>
                        <p style={{ color: mode.name_line }}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </p>
                        <div className='img-div'>
                            <div className='img'>
                                <img src={dp} alt='Display Pic' />
                            </div>
                            <div>
                                <p className='name-input'>
                                    <input style={{ color: mode.name_line }} type='text' placeholder='Name' id='name' required onChange={(e) => { setName(e.target.value); }} />
                                </p>
                                <p className='user-input'>
                                    <input style={{ color: mode.user_time_report }} type='text' placeholder='@username' required onBlur={(x) => { Username(x) }} />
                                </p>
                            </div>
                        </div>
                        <textarea style={{ color: mode.name_line }} placeholder='Your tweet here!' onChange={(e) => { setTweet(e.target.value); }} />
                        <div className='time'>
                            <p style={{ color: mode.user_time_report }}>
                                {fullTime}
                            </p>
                        </div>
                        <div className='tweet-details' style={{ borderBottom: `2px solid ${mode.name_line}` }}>
                            <div style={{ color: mode.name_line }}>
                                <input value={comment} type='text' style={{ color: mode.user_time_report }} onChange={(e) => { setComment(e.target.value) }} />Comments
                            </div>
                            <div style={{ color: mode.name_line }}>
                                <input value={retweet} type='text' style={{ color: mode.user_time_report }} onChange={(e) => { setRetweet(e.target.value) }} />Retweet
                            </div>
                            <div style={{ color: mode.name_line }}>
                                <input value={like} type='text' style={{ color: mode.user_time_report }} onChange={(e) => { setLike(e.target.value) }} />Likes
                            </div>
                        </div>
                        <div className='report-bar'>
                            <p style={{ color: mode.user_time_report }}>
                                <span style={{ fontSize: "20px" }}>{comment}</span> <FontAwesomeIcon icon={faMessage} />
                            </p>
                            <p style={{ color: mode.user_time_report }}>
                                <span style={{ fontSize: "20px" }}>{retweet}</span> <FontAwesomeIcon icon={faRetweet} />
                            </p>
                            <p style={{ color: mode.user_time_report }}>
                                <span style={{ fontSize: "20px" }}>{like}</span> <FontAwesomeIcon icon={faHeart} />
                            </p>
                            <p style={{ color: mode.user_time_report }}>
                                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                            </p>
                        </div>
                    </div>
                    <div id='download'>
                        <button onClick={()=>{handleImageDownload();}}>
                            Generate <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                    </div>
                </div>
            </div>
            <div id='hidden'>
                <div id='hide' style={{ backgroundColor: mode.background, border: `2px solid ${mode.name_line}` }}>
                    <p style={{ color: mode.name_line }}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </p>
                    <div className='img-div'>
                        <div className='img'>
                            <img src={dp} alt='Display Pic' />
                        </div>
                        <div>
                            <p className='name-input' style={{ color: mode.name_line }}>
                                {name}
                            </p>
                            <p className='user-input' style={{ color: mode.user_time_report }}>
                                {username}
                            </p>
                        </div>
                    </div>
                    <p style={{ textAlign: "left", paddingLeft: "0px", color: mode.name }}>
                        {tweet}
                    </p>
                    <div className='time' id='hidden-time' style={{ borderBottom: `2px solid ${mode.name_line}` }}>
                        <p style={{ color: mode.user_time_report }}>
                            {fullTime}
                        </p>
                    </div>
                    <div className='report-bar'>
                        <p style={{ color: mode.user_time_report }}>
                            <span style={{ fontSize: "20px" }}>{comment}</span> <FontAwesomeIcon icon={faMessage} />
                        </p>
                        <p style={{ color: mode.user_time_report }}>
                            <span style={{ fontSize: "20px" }}>{retweet}</span> <FontAwesomeIcon icon={faRetweet} />
                        </p>
                        <p style={{ color: mode.user_time_report }}>
                            <span style={{ fontSize: "20px" }}>{like}</span> <FontAwesomeIcon icon={faHeart} />
                        </p>
                        <p style={{ color: mode.user_time_report }}>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentComponent;