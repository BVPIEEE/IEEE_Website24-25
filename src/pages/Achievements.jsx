import React from "react";
import AwardCard from "../components/AwardCard";
import Heading from "../components/Heading";
import Anushka from "../assets/Achievements/1.png";
import Tanusri from "../assets/Achievements/2.png";
import Rishit from "../assets/Achievements/3.png";
import Harshit from "../assets/Achievements/4.png";
import Shreya from "../assets/Achievements/5.png";
import Shivam from "../assets/Achievements/6.png";
import Eva from "../assets/Achievements/7.png";
import Nikita from "../assets/Achievements/8.png";
import Amol from "../assets/Achievements/9.png";

const awardData = [
  {
    recipientImage: Anushka,
    recipientName: "Anushka Mishra",
    awardName: "Dr. JK Pal Memorial Award for the Best IEEE Student Volunteer",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2024",
  },
  {
    recipientImage: Tanusri,
    recipientName: "Tanusri Gururaj",
    awardName: "Outstanding WIE Student Volunteer Award",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2024",
  },
  {
    recipientImage: Rishit,
    recipientName: "Rishit Singh",
    awardName: "Outstanding Student Volunteer Award",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2024",
  },
  {
    recipientImage: Harshit,
    recipientName: "Harshit Mathur",
    awardName: "Dr. JK Pal Memorial Award for the Best IEEE Student Volunteer",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2023",
  },
  {
    recipientImage: Shreya,
    recipientName: "Shreya Murarka",
    awardName: "Outstanding WIE Student Volunteer Award",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2023",
  },
  {
    recipientImage: Shivam,
    recipientName: "Shivam Jain",
    awardName: "Outstanding Student Volunteer Award",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2023",
  },
  {
    recipientImage: Eva,
    recipientName: "Eva Sarin",
    awardName: "Dr. JK Pal Memorial Award",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2022",
  },
  {
    recipientImage: Nikita,
    recipientName: "Nikita Tewary",
    awardName: "Outstanding WIE Student Volunteer Award",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2022",
  },
  {
    recipientImage: Amol,
    recipientName: "Amol Puri",
    awardName: "Outstanding Student Volunteer Award",
    eventName: "IEEE Delhi Section",
    eventYear: "Student Awards Ceremony 2022",
  },
];

const Achievements = () => {
  return (
    <>
      <div className="pt-16"></div>
      <Heading
        heading="Achievements"
        quote="Success is not just about what you accomplish in life; it's about what you inspire others to do"
      />
      <div className="min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardData.map((award, index) => (
            <AwardCard
              key={index}
              recipientImage={award.recipientImage}
              recipientName={award.recipientName}
              awardName={award.awardName}
              eventName={award.eventName}
              eventYear={award.eventYear}
            />
          ))}
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center rounded-lg p-8 mt-4"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          Other Achievers
        </h2>
        <ul className="list-disc md:mx-14 list-inside font-semibold text-darkblue space-y-2">
          <li>
            Bharti Vidyapeeth’s Student Branch was appreciated for being an
            outstanding student branch under the IEEE Delhi Section while
            upholding their membership count from 31st December 2021 to 10th
            September 2022 on the occasion of 5th Anniversary of the IEEE Life
            Members Affinity Group (LMAG) organised on 14th September 2022.
          </li>
          <li>
            BVP IEEE was awarded by IEEE Region 10 SYWL Congress 2020
            Organising Committee for being the WINNER of the Student Activities
            and the WIE Coordination Contest.
          </li>
          <li>
            Pooja Gujtral won the IEEE Delhi Section Student Network Award and
            Outstanding WIE Student Volunteer Award in 2019 - 2020.
          </li>
          <li>
            Technical workshopsAbhinav Sobti won the IEEE Delhi Section J K Pal
            Memorial Award in 2019 - 2020.
          </li>
          <li>
            Kshitij Sidana won the IEEE Delhi Section Outstanding Student
            Volunteer Award in 2019 - 2020.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Achievements;
