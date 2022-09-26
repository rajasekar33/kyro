
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import ProfilePreview from '../components/ProfilePreview';
import ProfileForm from '../components/ProfileForm';

import { getUserById } from '../services/users'

function Profile() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserById("632d1ca61b483452f7f0a172").then(res => setUser(res))
    }, [ "https://kyro-user-service-mgmqxruica-uc.a.run.app/users"])


    return (
        <div className="profile pageWidth1 ">
            <div className="w20 bgColor1 h100vh pagePadded shaddowSplitter">
                <Header />
                <SideMenu />
            </div>
            <div className="w50 bgColor1">
                <ProfileForm user={user} />
            </div>
            <div className="w30 bgColor1">
                <ProfilePreview user={user} />
            </div>
        </div>
    );
}

export default Profile;
