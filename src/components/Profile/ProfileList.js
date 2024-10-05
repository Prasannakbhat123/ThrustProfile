import React from 'react';
import Profile from './Profile';

const ProfileList = () => {
    const profiles = [
        {
            name: "Ashwinraj M. Renuka",
            role: "Team Leader",
            instagram: "https://instagram.com/ashwinraj",
            twitter: null,
            facebook: null,
            linkedin: "https://linkedin.com/in/ashwinraj",
            github: "https://github.com/ashwinraj",
            email: null,
            image: "https://ik.imagekit.io/shasta/thrustMIT_website/2022/ashwin_WkD67L-e6.jpeg"
        },
        {
            name: "Emad Shattari",
            role: "Team Manager",
            instagram: "https://instagram.com/johndoe",
            twitter: null,
            facebook: "https://facebook.com/johndoe",
            linkedin: "https://linkedin.com/in/emadshattari",
            github: null,
            email: "emadshattari@example.com",
            image: "https://ik.imagekit.io/shasta/thrustMIT_website/2022/imad_upFcbHUg_.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667082621474"
        },
        {
            name: "Utkarsh Anand",
            role: "Payload Head",
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "https://ik.imagekit.io/shasta/thrustMIT_website/2022/Pic_5vCVLjttx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667082731206"
        }
    ];
    
    return (
        <div className="profile-list">
         {profiles.map((profile, index) => (
    <Profile
        key={index}
        name={profile.name}
        role={profile.role}
        instagram={profile.instagram}
        twitter={profile.twitter}
        facebook={profile.facebook}
        linkedin={profile.linkedin}
        github={profile.github}
        email={profile.email}
        image={profile.image} 
    />
))}

        </div>
    );
};

export default ProfileList;
