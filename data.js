// const url = "http://localhost:3000/players";
// async function getPlayers() {
//   const response = await fetch(url);
//   const data = await response.json();
//   const playersUl = document.querySelector(".logo-club");
//   const logoClub = data
//     .filter((player) => player)
//     .map((player) => {
//       // Chèn nội dung HTML vào đối tượng
//       playersUl.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div>
//         <img
//           src="${player.logo_club}"
//           alt="Man UTD"
//           style="width: 50px; height: 50px; margin: 5px"
//         />
//       </div>
//     `
//       );
//       return player;
//     });
// }
// getPlayers();

// const url1 = "http://localhost:3001/players1";
// async function getPlayers1() {
//   const response1 = await fetch(url1);
//   const data1 = await response1.json();
//   const playersUl1 = document.querySelector(".rotating-imag");
//   const players1 = data1
//     // .filter((player1) => player1)
//     .map((player1) => {
//       // Chèn nội dung HTML vào đối tượng
//       playersUl1.insertAdjacentHTML(
//         "beforeend",
//         `
//     <div class="centralDefender-location">
//     <div class="logo-club-central">
//       <div>
//         <img
//           src="${player1.logo_club}"
//           alt="Man UTD"
//           style="width: 50px; height: 50px; margin: 5px"
//         />
//       </div>
//     </div>

//     <div class="players-infor-central">
//       <div class="information">
//         <div class="clothers-number">${player1.shirt_number}</div>
//         <div class="name-player">
//           <div class="full-name">${player1.full_name}</div>
//           <div class="last-name">${player1.last_name}</div>
//         </div>
//       </div>
//       <div>
//         <img
//           src="${player1.logo_nationality}"
//           alt="Turkey"
//           style="
//             width: 50px;
//             height: 40px;
//             margin: 54px 5px 0px 0px;
//           "
//         />
//       </div>
//     </div>
//     <img
//       src="${player1.avatar}"
//       alt="Antay Bayindir"
//       style="width: 250px; height: 300px"
//     />
//   </div>
//     `
//       );
//       return player1;
//     });
// }
// getPlayers1();

// const url2 = "http://localhost:3002/players2";
// async function getPlayers2() {
//   const response2 = await fetch(url2);
//   const data2 = await response2.json();
//   const playersUl2 = document.querySelector(".rotating-animation");
//   const players2 = data2
//     .filter((player) => player)
//     .map((player) => {
//       // Chèn nội dung HTML vào đối tượng
//       playersUl2.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="rotating-image defenders">
//                 <div
//                   class="logo-united-central"
//                   style="
//                     width: 1320px;
//                     height: 60px;
//                     position: absolute;
//                     z-index: 1;
//                     background-color: #f8f8f8;
//                     margin-bottom: 364px;
//                   "
//                 ></div>
//                 <div
//                   class="name-player-central"
//                   style="
//                     width: 1320px;
//                     height: 100px;
//                     background-color: #f8f8f8;
//                     position: absolute;
//                     z-index: 1;
//                     margin-top: 396px;
//                   "
//                 ></div>
//                 <div class="defenders-location">
//                   <div class="logo-club-wingback">
//                     <div>
//                       <img
//                         src="${player.logo_club}"
//                         alt="Man UTD"
//                         style="width: 50px; height: 50px; margin: 5px"
//                       />
//                     </div>
//                   </div>
//                   <div class="players-infor-wingback">
//                     <div class="information">
//                       <div class="clothers-number">${player.shirt_number}</div>
//                       <div class="name-player">
//                         <div class="full-name">${player.full_name}</div>
//                         <div class="last-name">${player.last_name}</div>
//                       </div>
//                     </div>
//                     <div>
//                       <img
//                         src="${player.logo_nationality}"
//                         alt="Netherlands"
//                         style="
//                           width: 50px;
//                           height: 40px;
//                           margin: 54px 5px 0px 0px;
//                         "
//                       />
//                     </div>
//                   </div>
//                   <img
//                     src="${player.avatar}"
//                     alt="Tyrell Malacia"
//                     style="width: 250px; height: 300px"
//                   />
//                 </div>
//               </div>
//     `
//       );
//       return player;
//     });
// }
// getPlayers2();

// const url3 = "http://localhost:3003/players3";
// async function getPlayers1() {
//   const response3 = await fetch(url3);
//   const data3 = await response3.json();
//   const playersUl3 = document.querySelector(".rotating-animation");
//   const players3 = data3
//     .filter((player) => player)
//     .map((player) => {
//       // Chèn nội dung HTML vào đối tượng
//       playersUl3.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="rotating-image midfielders">
//                 <div
//                   class="logo-united-mid"
//                   style="
//                     width: 1320px;
//                     height: 60px;
//                     position: absolute;
//                     z-index: 1;
//                     background-color: #f8f8f8;
//                     margin-bottom: 364px;
//                   "
//                 ></div>
//                 <div
//                   class="name-player-mid"
//                   style="
//                     width: 1320px;
//                     height: 100px;
//                     background-color: #f8f8f8;
//                     position: absolute;
//                     z-index: 1;
//                     margin-top: 396px;
//                   "
//                 ></div>
//                 <div class="midfielders-location">
//                   <div class="logo-club-mid">
//                     <div>
//                       <img
//                         src="${player.logo_club}"
//                         alt="Man UTD"
//                         style="width: 50px; height: 50px; margin: 5px"
//                       />
//                     </div>
//                   </div>
//                   <div class="players-infor-mid">
//                     <div class="information">
//                       <div class="clothers-number">${player.shirt_number}</div>
//                       <div class="name-player">
//                         <div class="full-name">${player.full_name}</div>
//                         <div class="last-name">${player.last_name}</div>
//                       </div>
//                     </div>
//                     <div>
//                       <img
//                         src="${player.logo_nationality}"
//                         alt="Morocco"
//                         style="
//                           width: 50px;
//                           height: 40px;
//                           margin: 54px 5px 0px 0px;
//                         "
//                       />
//                     </div>
//                   </div>
//                   <img
//                     src="${player.avatar}"
//                     alt="Sofyan Amrabat"
//                     style="width: 250px; height: 300px"
//                   />

//                 </div>
//               </div>
//     `
//       );
//       return player;
//     });
// }
// getPlayers3();

// const url4 = "http://localhost:3004/players4";
// async function getPlayers4() {
//   const response4 = await fetch(url4);
//   const data4 = await response4.json();
//   const playersUl4 = document.querySelector(".rotating-animation");
//   const players4 = data4
//     .filter((player) => player)
//     .map((player) => {
//       // Chèn nội dung HTML vào đối tượng
//       playersUl4.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="rotating-image attack">
//                 <div
//                   class="logo-united-attack"
//                   style="
//                     width: 784px;
//                     height: 60px;
//                     position: absolute;
//                     z-index: 1;
//                     background-color: #f8f8f8;
//                     margin-bottom: 364px;
//                   "
//                 ></div>
//                 <div
//                   class="name-player-attack"
//                   style="
//                     width: 784px;
//                     height: 100px;
//                     background-color: #f8f8f8;
//                     position: absolute;
//                     z-index: 1;
//                     margin-top: 396px;
//                   "
//                 ></div>
//                 <div class="attack-middefield-location">
//                   <div class="logo-club-attack">
//                     <div>
//                       <img
//                         src="${player.logo_club}"
//                         alt="Man UTD"
//                         style="width: 50px; height: 50px; margin: 5px"
//                       />
//                     </div>
//                   </div>
//                   <div class="players-infor-attack">
//                     <div class="information">
//                       <div class="clothers-number">${player.shirt_number}</div>
//                       <div class="name-player">
//                         <div class="full-name">${player.full_name}</div>
//                         <div class="last-name">${player.last_name}</div>
//                       </div>
//                     </div>
//                     <div>
//                       <img
//                         src="${player.logo_nationality}"
//                         alt="Portugal"
//                         style="
//                           width: 50px;
//                           height: 40px;
//                           margin: 54px 5px 0px 0px;
//                         "
//                       />
//                     </div>
//                   </div>
//                   <img
//                     src="${player.avatar}"
//                     alt="Bruno Fernandes"
//                     style="width: 250px; height: 300px"
//                   />
//                 </div>
//               </div>
//     `
//       );

//       return player;
//     });
// }
// getPlayers4();

// const url5 = "http://localhost:3005/players5";
// async function getPlayers5() {
//   const response5 = await fetch(url5);
//   const data5 = await response5.json();
//   const playersUl5 = document.querySelector(".rotating-animation");
//   const players5 = data5
//     .filter((player) => player)
//     .map((player) => {
//       // Chèn nội dung HTML vào đối tượng
//       playersUl5.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="rotating-image wing">
//                 <div
//                   class="logo-united-wingstriker"
//                   style="
//                     width: 1320px;
//                     height: 60px;
//                     position: absolute;
//                     z-index: 1;
//                     background-color: #f8f8f8;
//                     margin-bottom: 364px;
//                   "
//                 ></div>
//                 <div
//                   class="name-player-wingstriker"
//                   style="
//                     width: 1320px;
//                     height: 100px;
//                     background-color: #f8f8f8;
//                     position: absolute;
//                     z-index: 1;
//                     margin-top: 396px;
//                   "
//                 ></div>
//                 <div class="wing-striker">
//                   <div class="logo-club-wingstriker">
//                     <div>
//                       <img
//                         src="${player.logo_club}"
//                         alt="Man UTD"
//                         style="width: 50px; height: 50px; margin: 5px"
//                       />
//                     </div>
//                   </div>
//                   <div class="players-infor-wingstriker">
//                     <div class="information">
//                       <div class="clothers-number">${player.shirt_number}</div>
//                       <div class="name-player">
//                         <div class="full-name">${player.full_name}</div>
//                         <div class="last-name">${player.last_name}</div>
//                       </div>
//                     </div>
//                     <div>
//                       <img
//                         src="${player.logo_nationality}"
//                         alt="Uruguay"
//                         style="
//                           width: 50px;
//                           height: 40px;
//                           margin: 54px 5px 0px 0px;
//                         "
//                       />
//                     </div>
//                   </div>
//                   <img
//                     src="${player.avatar}"
//                     alt="Facundo Pellistri"
//                     style="width: 250px; height: 300px"
//                   />
//                 </div>
//               </div>
//     `
//       );

//       return player;
//     });
// }
// getPlayers5();

// const url6 = "http://localhost:3006/players6";
// async function getPlayers6() {
//   const response6 = await fetch(url6);
//   const data6 = await response6.json();
//   const playersUl6 = document.querySelector(".rotating-animation");
//   const players6 = data6
//     .filter((player) => player)
//     .map((player) => {
//       // Chèn nội dung HTML vào đối tượng
//       playersUl6.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="rotating-image forward">
//         <div
//           class="logo-united-forward"
//           style="
//             width: 784px;
//             height: 60px;
//             position: absolute;
//             z-index: 1;
//             background-color: #f8f8f8;
//             margin-bottom: 364px;
//           "
//         ></div>
//         <div
//           class="name-player-forward"
//           style="
//             width: 784px;
//             height: 100px;
//             background-color: #f8f8f8;
//             position: absolute;
//             z-index: 1;
//             margin-top: 396px;
//           "
//         ></div>
//         <div class="striker">
//           <div class="logo-club-striker">
//             <div>
//               <img
//                 src="${player.logo_club}"
//                 alt="Man UTD"
//                 style="width: 50px; height: 50px; margin: 5px"
//               />
//             </div>
//           </div>
//           <div class="players-infor-striker">
//             <div class="information">
//               <div class="clothers-number">${player.shirt_number}</div>
//               <div class="name-player">
//                 <div class="full-name">${player.full_name}</div>
//                 <div class="last-name">${player.last_name}</div>
//               </div>
//             </div>
//             <div>
//               <img
//                 src="${player.logo_nationality}"
//                 alt="Denmark"
//                 style="
//                   width: 50px;
//                   height: 40px;
//                   margin: 54px 5px 0px 0px;
//                 "
//               />
//             </div>
//           </div>
//           <img
//             src="${player.avatar}"
//             alt="Rasmus Hojlund"
//             style="width: 250px; height: 300px"
//           />

//         </div>
//       </div>
//     `
//       );

//       return player;
//     });
// }
// getPlayers6();
