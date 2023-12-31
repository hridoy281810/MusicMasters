import React from 'react';
import SectionTitle from '../../../components/Dashboard/SectionTitle';
import ConditionalMessage from '../../../components/Dashboard/ConditionalMessage';
import useTitle from '../../../api2/useTitile';

const AdminHome = () => {
    useTitle("Music Masters | Admin Home")
    return (
        <div>
            <SectionTitle heading={"Admin home"}></SectionTitle>
            <ConditionalMessage title={"No Information Available"} subtitle={"Please Go To Add a Information First"} center={true} text={"Go Now"} location={'/dashboard/manageClasses'} />
        </div>
    );
};

export default AdminHome;