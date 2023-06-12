import React from 'react';
import SectionTitle from '../../../components/Dashboard/SectionTitle';
import ConditionalMessage from '../../../components/Dashboard/ConditionalMessage';
import useTitle from '../../../api2/useTitile';

const StudentHome = () => {
    useTitle("Music Masters | Student Home")
    return (
        <div>
             <div>
            <SectionTitle heading={"Student Home"}></SectionTitle>
            <ConditionalMessage title={"No Information Available"} subtitle={"Please Go To Add a Information First"} center={true} text={"Go Now"} location={'/dashboard/mySelected'} />
        </div>
        </div>
    );
};

export default StudentHome;