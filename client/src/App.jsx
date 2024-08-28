import "./index.css";
import { useState } from "react";
import HeaderPage from "./components/layouts/header";
import SliderPage from "./components/layouts/slider";
import ContentPage from "./components/layouts/content";
function App() {
  const [result, setResult] = useState([])
  return (
    <div >
      <HeaderPage />
      <div className="fixed flex flex-row bg-white h-screen w-full">
        <SliderPage  result={result} setResult={setResult}/>
        <ContentPage result={result}/>
      </div>
    </div>
  );
}

export default App;

// const [showImage, setShowImage] = useState(false);
//   const handleClick = () => {
//     setShowImage(true);
//   };
//   const url_images1 = Array.from({ length: 200 }, (_, i) => 'https://storage.cloud.google.com/nidim/keyframe/L01/L01_V001/'+(i + 1).toString().padStart(3, '0')+ ".jpg");
//   const url_images2 = Array.from({ length: 200 }, (_, i) => 'https://storage.cloud.google.com/nidim/keyframe/L01/L01_V001/'+(i + 1).toString().padStart(3, '0')+ ".jpg");
//   const url_images3 = Array.from({ length: 200 }, (_, i) => 'https://storage.cloud.google.com/nidim/keyframe/L01/L01_V001/'+(i + 1).toString().padStart(3, '0')+ ".jpg");
//   const url_images4 = Array.from({ length: 200 }, (_, i) => 'https://storage.cloud.google.com/nidim/keyframe/L01/L01_V001/'+(i + 1).toString().padStart(3, '0')+ ".jpg");
//   const url_images5 = Array.from({ length: 200 }, (_, i) => 'https://storage.cloud.google.com/nidim/keyframe/L01/L01_V001/'+(i + 1).toString().padStart(3, '0')+ ".jpg");
//   const headerStyle = {
//     textAlign: 'center',
//     color: '#fff',
//     height: 64,
//     paddingInline: 48,
//     lineHeight: '64px',
//     backgroundColor: '#4096ff',
//   };
//   const contentStyle = {
//     textAlign: 'center',
//     minHeight: 120,
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#0958d9',
//   };
//   const siderStyle = {
//     textAlign: 'center',
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#1677ff',
//   };
//   const footerStyle = {
//     textAlign: 'center',
//     color: '#fff',
//     backgroundColor: '#4096ff',
//   };
//   const layoutStyle = {
//     borderRadius: 8,
//     overflow: 'hidden',
//     width: 'calc(50% - 8px)',
//     maxWidth: 'calc(50% - 8px)',
//   };
//   return (
//     <div>
//        <div>
//          {showImage === false?
//        (<button onClick={handleClick}>Show Image</button>)
//        :
//          (<div>
//            {url_images1.map((url) => (
//            <Image
//            width={200}
//            src= {url}
//          />))}
//        {url_images2.map((url) => (
//          <Image
//          width={200}
//          src= {url}
//        />))}
//        {url_images3.map((url) => (
//          <Image
//          width={200}
//          src= {url}
//        />))}
//        {url_images4.map((url) => (
//          <Image
//          width={200}
//          src= {url}
//        />))}
//        {url_images5.map((url) => (
//          <Image
//          width={200}
//          src= {url}
//        />))}
//          </div>)
//        }
//        </div>
//       </div>
//   );
