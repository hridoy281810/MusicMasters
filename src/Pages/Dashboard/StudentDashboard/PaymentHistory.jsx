import React from 'react';
import useMyEnrolledClasses from '../../../api2/useMyEnrolledClasses';
import SectionTitle from '../../../components/Dashboard/SectionTitle';
import ConditionalMessage from '../../../components/Dashboard/ConditionalMessage';
import useTitle from '../../../api2/useTitile';


const PaymentHistory = () => {
  useTitle("Music Masters | Payment History")
  const [myEnrolledClasses] = useMyEnrolledClasses()
  console.log(myEnrolledClasses)
  return (
    <>
      <SectionTitle heading={"student Payment History"} />
      {myEnrolledClasses && myEnrolledClasses.length > 0 ? <div className="w-full p-10">
        <div className='overflow-x-auto'>
          <table className="table sm:min-w-full sm:table-auto rounded-lg border">
            {/* head */}
            <thead className='bg-cyan-100 border rounded-lg shadow sm:p-0'>
              <tr>
                <th className='py-2'> # </th>
                <th className='py-2' >Email</th>
                <th className='py-2'>Class Title</th>
                <th className='py-2'>Total Amount</th>
                <th className='py-2'>TransactionId</th>
                <th className='py-2'>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {myEnrolledClasses.map((myClass, i) =>
                <tr key={myClass._id}>
                  <th> {i + 1} </th>
                  <td> {myClass.email} </td>
                  <td> {myClass.class_name} </td>
                  <td>$ {myClass.price}</td>
                  <td>{myClass.transactionId}</td>
                  <td>{myClass.date}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> : <ConditionalMessage title={"No Payment History Available"} subtitle={"Please Payment Now"} center={true} text={"Payment Now"} location={'/dashboard/mySelected'} />}
    </>
  );
};

export default PaymentHistory;