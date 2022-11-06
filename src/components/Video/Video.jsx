import React, { useState } from 'react';
import TvIcon from '@mui/icons-material/Tv';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TheatersIcon from '@mui/icons-material/Theaters';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import "./Video.css";
import ReactPlayer from 'react-player';


const Video = () => {
    const [dropdown, setDropdown] = useState(false);
    const data = [
        { name: "React Tutorial 1", id: '1', url: 'vid1.mp4' },
        { name: "React Tutorial 2", id: '2', url: 'vid2.mp4' },
        { name: "React Tutorial 3", id: '3', url: 'vid3.mp4' },
        { name: "React Tutorial 4", id: '4', url: 'vid4.mp4' }
    ]
    const [url , setUrl] = useState('vid1.mp4');
    const handleVideo = (id) => {
        const video = data.filter(d => d.id === id)
        setUrl(video[0].url)
        console.log(video[0])


    }

    const handleClick = () => {
        setDropdown(!dropdown)


    };

    return (
        <div className="video_wrapper">
            <div className="video_left">
                <div className="video_logo">
                    <TvIcon style={{ color: "white" }} />
                    <span>Video Player</span>
                </div>
                <div className="video_details">
                    <span>Discovery</span>
                    <div className="video-search">
                        <SearchOutlinedIcon />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="video-rec">
                        <div className="recent">
                            <AccessTimeIcon />
                            <span>Recent</span>
                        </div>
                        <div className="recent">
                            <FavoriteIcon style={{ color: "red" }} />
                            <span>Favorites</span>
                        </div>
                    </div>
                </div>
                <div className="video_details1">
                    <div className="video-name">
                        <span>YOUR FOLDER</span>
                        <div className="video-fol">
                            <NoteAddIcon />
                            <span>Add Folder</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Adobe Premiere Pro</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Belajar C++</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Belajar HTML</span>
                        </div>
                        <div className="video-fold">
                            <div className="video-fol">
                                <FolderIcon />
                                <span>Belajar Python</span>
                                <ArrowDropDownIcon onClick={handleClick} />
                            </div>
                            {dropdown &&
                                <div className="fav-fol">
                                    <div className="fav-file">
                                        <TheatersIcon />
                                        <span>Tipe Data</span>
                                    </div>
                                    <div className="fav-file">
                                        <TheatersIcon />
                                        <span>Percabangan</span>
                                    </div>
                                    <div className="fav-file">
                                        <TheatersIcon />
                                        <span>Perulangan</span>
                                    </div>
                                    <div className="fav-file">
                                        <TheatersIcon />
                                        <span>Machine Learning</span>
                                    </div>

                                </div>
                            }
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Belajar Ruby</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Belajar Java</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Materi IMK</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Materi Jarigan</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Materi System Basis</span>
                        </div>
                        <div className="video-fol">
                            <FolderOpenIcon />
                            <span>Tugas Membuat video</span>
                        </div>
                    </div>
                    <div className="video-foot">
                        <SettingsIcon />
                        <span>Settings</span>
                    </div>


                </div>

            </div>
            <div className="video_right">
                <div className="video-player">
                    <ReactPlayer
                        url={url}
                        controls
                        width='100%'
                        height='540px'
                    />
                </div>
                <div className="playlist">
                    <div className="video-name">
                        <span>Recently played</span>
                        {
                            data.map((value, i) => (
                                <div className="right_video-det"  key={value.id}>
                                    <div className='right_video-name'>
                                        <span>{value.id}</span>
                                        <span>{value.name}</span>
                                    </div>
                                    <PlayCircleIcon style={{cursor:"pointer"}}onClick={() => handleVideo(value.id)} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Video;