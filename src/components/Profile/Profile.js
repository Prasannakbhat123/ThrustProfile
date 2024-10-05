import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './Profile.css';

const Profile = ({ name, role, instagram, twitter, facebook, linkedin, github, email, image }) => {
    return (
        <div className="card">
            <div className="card-img" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card-info">
                <h2 className="text-title">{name}</h2>
                <p className="text-body">{role}</p>
            </div>
            <div className="social-media">
                {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon className="svg" /></a>}
                {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon className="svg" /></a>}
                {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon className="svg" /></a>}
                {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon className="svg" /></a>}
                {github && <a href={github} target="_blank" rel="noopener noreferrer"><GitHubIcon className="svg" /></a>}
                {email && <a href={`mailto:${email}`}><EmailIcon className="svg" /></a>}
            </div>
        </div>
    );
};

export default Profile;
