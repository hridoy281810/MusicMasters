import React from 'react';
import SectionTitle from '../../../components/Dashboard/SectionTitle';
import ConditionalMessage from '../../../components/Dashboard/ConditionalMessage';
import useTitle from '../../../api2/useTitile';

const InstructorHome = () => {
    useTitle("Music Masters | Instructor Home")
    return (
        <div>
            <div>
                <SectionTitle heading={"Instructor Home"}></SectionTitle>
                <ConditionalMessage title={"No Information Available"} subtitle={"Please Go To Add a Information First"} center={true} text={"Go Now"} location={'/dashboard/myClasses'} />
            </div>
        </div>
    );
};

export default InstructorHome;