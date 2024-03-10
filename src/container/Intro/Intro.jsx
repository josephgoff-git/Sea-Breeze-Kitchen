// import React from 'react';
// import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

// import { meal } from '../../constants';
// import './Intro.css';

// const Intro = () => {
//   const [playVideo, setPlayVideo] = React.useState(false);
//   const [videoVisible, setVideoVisible] = React.useState("1");
//   const vidRef = React.useRef();

//   return (
//     <div className="app__video">
//       <video
//         ref={vidRef}
//         src={meal}
//         type="video/mp4"
//         loop
//         controls={false}
//         muted
//       />
//       <div style={{opacity: videoVisible}} className="app__video-overlay flex__center"
//       onClick={() => {
//         setPlayVideo(!playVideo);
//         if (playVideo) {
//           vidRef.current.pause();
//           setVideoVisible("1");
//         } else {
//           vidRef.current.play();
//           setVideoVisible("0");
//         }
//       }}>
//         <div
//           className="app__video-overlay_circle flex__center"
          
//         >
//           {playVideo ? (
//             <BsPauseFill color="#fff" fontSize={30} />
//           ) : (
//             <BsFillPlayFill color="#fff" fontSize={30} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;
