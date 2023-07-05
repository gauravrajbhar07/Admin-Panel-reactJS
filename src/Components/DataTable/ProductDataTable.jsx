// import React, { useEffect, useState } from "react";
// import "./Datatable.scss";
// import { ProductColumns, userRows } from "../../dataSource";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
// import { db } from "../../firebase";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   onSnapshot,
// } from "firebase/firestore";

// const Datatable = () => {
//   const [data, setData] = useState([]); //empty array in the beginning

//   //fetching Data

//   useEffect(() => {
//     //this fetch Data from FIREBASE FIRESTORE ITS GOOD
//     // BUT IT HAS SOME PROBLEMS
//     // ITS NOT REAL TIME

//     // const fetchData = async () => {
//     //   let list = [];
//     //   try {
//     //     const querySnapshot = await getDocs(collection(db, "users"));

//     //     // console.log(querySnapshot);
//     //     querySnapshot.forEach((doc) => {
//     //       // doc.data() is never undefined for query doc snapshots
//     //       // console.log(doc.id, " => ", doc.data());
//     //       list.push({ id: doc.id, ...doc.data() });
//     //     });
//     //     setData(list);
//     //   } catch (err) {
//     //     console.log(err);
//     //   }
//     // };
//     // fetchData();

//     //LISTING (REALTIME DB)
//     //fetching Data in real time

//     const unsub = onSnapshot(
//       collection(db, "users"),
//       (snapShot) => {
//         let list = [];

//         snapShot.docs.forEach((doc) => {
//           list.push({ id: doc.id, ...doc.data() });
//         });
//         setData(list);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );

//     //cleanUp function
//     //to avoid Memoy Leak
//     return () => {
//       unsub();
//     };
//   }, []);

//   console.log(data);

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(db, "users", id));
//       //fiter is used for some visual representation
//       setData(data.filter((item) => item.id !== id));
//     } catch (error) {
//       console.log(error);
//     }

//     //this line is not actully not deleteing it just filtering it
//     // setData(data.filter((item) => item.id !== id));
//   };
//   const actionColumns = [
//     {
//       feild: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="ViewButton">View</div>
//             </Link>

//             <div
//               className="DeleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="Datatable">
//       <div className="datatableTitle">
//         Add New User
//         <Link
//           to="/users/new"
//           style={{ textDecoration: "none" }}
//           className="Link"
//         >
//           ADD NEW
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={ProductColumns.concat(actionColumns)}
//         pageSize={9}
//         rowsPerPageOption={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Datatable;
