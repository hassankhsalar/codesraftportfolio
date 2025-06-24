import React from "react";

const Gallery = () => {
  return (
    // project gallery section
    <div className="w-11/12 mx-auto pt-32">
      <div className="grid grid-cols-4 gap-2">
        <img
          src="https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className=" row-span-1 col-span-2 w-full h-full object-cover"
        />
        <img
          src="https://img.freepik.com/free-photo/beautiful-view-mesmerizing-nature-traditional-styled-japanese-adelaide-himeji-gardens_181624-46195.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover row-span-2"
        />
        <img
          src="https://img.freepik.com/free-photo/autumn-river-ordesa-national-park-pyrenees-huesca-aragon-spain_1301-6980.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover row-span-2"
        />
        <img
          src="https://img.freepik.com/free-photo/mustard-field-with-beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4824.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover col-span-2 row-span-2"
        />
        <img
          src="https://img.freepik.com/free-photo/fictitious-floating-island_1048-2899.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover col-span-2 row-span-2"
        />
        <img
          src="https://img.freepik.com/free-photo/scenic-view-mountains-lake_53876-138187.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover col-span-2"
        />
        <img
          src="https://img.freepik.com/free-photo/sunset-with-silhoutte-birds-flying_335224-915.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover "
        />

        <img
          src="https://img.freepik.com/free-photo/landscape-rocks-surrounded-by-forests-covered-fog-cloudy-sky_181624-6475.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover col-span-2"
        />
        <img
          src="https://img.freepik.com/free-photo/mist-chinese-water-peak-landscapes_1417-36.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Gallery;
