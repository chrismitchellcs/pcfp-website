import React from "react";
import Image from "mui-image";

const TitleImage = () => {
  return (
    <div>
      <Image
        src={"titleimageedit copy.jpg"}
        duration={1500}
        width={"100%"}
        style={{ filter: "brightness(90%)" }}
      ></Image>
    </div>
  );
};

export default TitleImage;
