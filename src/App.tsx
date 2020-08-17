import * as React from "react";
import useLazyImage from "./hooks/useLazyImage";
import "./styles.css";

const slides = [
  "https://loremflickr.com/cache/resized/65535_49259941592_72f50a6fbe_320_240_nofilter.jpg",
  "https://loremflickr.com/cache/resized/65535_50091645241_868c66249a_320_240_g.jpg",
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  "https://i.picsum.photos/id/428/200/300.jpg?hmac=yZnpqAvuXjLW6NjhE0OFa2GwK6XcNLPBIrI3yr4yFsk",
  "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  "https://loremflickr.com/cache/resized/65535_49845303721_80df43c416_320_240_nofilter.jpg",
  "https://i.picsum.photos/id/381/200/300.jpg?grayscale&hmac=sJoiP6DW3W3FGTOhstxwknsZN1SZRUTaIYQHaUHJk9M",
  "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
];

const LazyImage: React.FC<{ src: string }> = ({ src }) => {
  const { elementRef, imageSrc } = useLazyImage<HTMLImageElement>({
    src
  });

  return (
    <img className="image" ref={elementRef} src={imageSrc} alt="lazy loaded" />
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Load lazy images with IntersectionObserver</h1>
      <div className="container-auto-fit">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="item">
            <LazyImage src={slides[i % slides.length]} />
          </div>
        ))}
      </div>
    </div>
  );
}
