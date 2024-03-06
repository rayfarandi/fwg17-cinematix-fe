// import React from "react";
import getImageUrl from "../utils/imageGet";

function Footer() {
  return (
    <footer className="w-full flex flex-col gap-y-10 lg:flex-row lg:justify-between py-4 px-5 md:p-11 xl:px-[130px] xl:pt-[95px] xl:pb-[50px] bg-light font-mulish">
      <div className="lg:w-1/4 flex flex-col gap-y-4">
        <img
          src={getImageUrl("Cinematix", "svg")}
          alt="logo"
          className="w-20 h-10 md:w-28 md:h-14 lg:w-[130px] lg:h-[51px]"
        />
        <p className="text-[#6E7191] leading-8 tracking-wider">
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </p>
      </div>
      <div className="lg:w-1/4 flex flex-col lg:items-center">
        <div className="flex flex-col gap-y-4 text-sm text-secondary">
          <p className="text-[#000] font-bold mb-2 lg:mb-4 text-base">
            Explore
          </p>
          <p>Cinemas</p>
          <p>Movies List</p>
          <p>My Ticket</p>
          <p>Notification</p>
        </div>
      </div>
      <div className="lg:w-1/4 flex flex-col lg:items-center">
        <div className="flex flex-col gap-y-6 text-sm text-secondary">
          <p className="text-[#000] font-bold mb-2 lg:mb-4 text-base">
            Our Sponsor
          </p>
          <p>
            <img src={getImageUrl("ebvid", "svg")} alt="sponsor" />
          </p>
          <p>
            <img src={getImageUrl("CineOne", "svg")} alt="sponsor" />
          </p>
          <p>
            <img src={getImageUrl("hiflix2", "svg")} alt="sponsor" />
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 flex flex-col lg:items-center">
        <div className="flex flex-col gap-y-7 text-sm text-secondary">
          <p className="text-[#000] font-bold mb-2 lg:mb-4 text-base">
            Follow Us
          </p>
          <div className="flex gap-x-4 items-center text-sm text-[#6E7191] font-semibold">
            <img
              src={getImageUrl("facebook", "svg")}
              alt="social-media"
              className="w-6 h-6"
            />
            <p>Cinematix Cinema id</p>
          </div>
          <div className="flex gap-x-4 items-center text-sm text-[#6E7191] font-semibold">
            <img
              src={getImageUrl("instagram", "svg")}
              alt="social-media"
              className="w-6 h-6"
            />
            <p>Cinematix.id</p>
          </div>
          <div className="flex gap-x-4 items-center text-sm text-[#6E7191] font-semibold">
            <img
              src={getImageUrl("twitter", "svg")}
              alt="social-media"
              className="w-6 h-6"
            />
            <p>Cinematix.id</p>
          </div>
          <div className="flex gap-x-4 items-center text-sm text-[#6E7191] font-semibold">
            <img
              src={getImageUrl("youtube", "svg")}
              alt="social-media"
              className="w-6 h-6"
            />
            <p>Cinematix Cinema id</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
