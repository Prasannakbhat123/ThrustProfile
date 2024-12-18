import React from 'react';
import Profile from './Profile';

const ProfileList = () => {
    const profiles = [
        {
            name: "Ambarish Ghan",
            role: "Team Leader",
            subsystem: "Structures and Composites",
            instagram: "https://instagram.com/ashwinraj",
            twitter: null,
            facebook: null,
            linkedin: "https://linkedin.com/in/ashwinraj",
            github: "https://github.com/ashwinraj",
            email: null,
            image: "https://ik.imagekit.io/shasta/thrustMIT_website/2020/ambrish2_OZbatrB0I?ik-sdk-version=javascript-1.4.3&updatedAt=1666982400351"
        },
        {
            name: "Vinit Shankar Shettigar",
            role: "Structures head",
            subsystem: "Payload & Research Head",
            instagram: "https://instagram.com/johndoe",
            twitter: null,
            facebook: "https://facebook.com/johndoe",
            linkedin: "https://linkedin.com/in/emadshattari",
            github: null,
            email: "emadshattari@example.com",
            image: "/images/vinit.png"
        },
        {
            name: "Vedant Ladsaria",
            role: "Treasurer",
            subsystem: null,
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "/images/vedant.png"
        },
        {
            name: "Tilak Kumar B R",
            role: "Propulsion Head",
            subsystem: null,
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "/images/tilak.png"
        },
        {
            name: "Shekhar Pathak",
            role: "Avionics Head",
            subsystem: null,
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "https://ik.imagekit.io/shasta/thrustMIT_website/2020/shekhar_pathak_bFe3uOLOta.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666976087795"
        },
        {
            name: "Rishi Chauhan",
            role: "Aerodynamics Head",
            subsystem: null,
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "https://ik.imagekit.io/shasta/thrustMIT_website/2020/Rishi_SytMV9v5-N.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976087267"
        },
        {
            name: "Viswanath RS",
            role: "Propulsion",
            subsystem: null,
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "https://ik.imagekit.io/shasta/thrustMIT_website/2020/Visvanath_FrdBFBMJo.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1666976086952"
        },
        {
            name: "Sameer Agarwal",
            role: "Avionics",
            subsystem: null,
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "/images/sameer.png"
        },
        {
            name: "Sohith Kakumanu",
            role: "Avionics",
            subsystem: null,
            instagram: null,
            twitter: "https://twitter.com/janesmith",
            facebook: null,
            linkedin: "https://linkedin.com/in/utkarshanand",
            github: "https://github.com/utkarshanand",
            email: null,
            image: "https://ik.imagekit.io/dvm2lzx5v/WhatsApp%20Image%202024-09-05%20at%2018.48.14_a37feacb.jpg?updatedAt=1725545152761"
        },
    ];
    
    return (
        <div className="profile-list">
            {profiles.map((profile, index) => (
                <Profile
                    key={index}
                    name={profile.name}
                    role={profile.role}
                    subsystem={profile.subsystem}
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
