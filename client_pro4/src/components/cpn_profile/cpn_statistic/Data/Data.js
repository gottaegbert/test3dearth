import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  import img1 from "../../../../public/img/imgprofile/customer1.png";
  import img2 from "../../../../public/img/imgprofile/customer2.png";
  import img3 from "../../../../public/img/imgprofile/customer3.png";
  import img4 from "../../../../public/img/imgprofile/customer4.png";
  
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Orders",
    },
    {
      icon: UilUsersAlt,
      heading: "Customers",
    },
    {
      icon: UilPackage,
      heading: 'Products'
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Money received",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 63,
      value: "24,990",
      png:UilUsdSquare,
      series: [
        {
          name: "Successful",
          data: [0,0,0,0,0,0,0, 20, 30, 34, 36, 30, 28, 26, 24, 20, 22, 24, 26 , 28, 36, 38, 45, 50, 20],
        },
      ],
    },
    {
      title: "In progress",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
        
      },
      barValue: 90,
      value: "15,390",
      png:  UilClipboardAlt,
      series: [
        {
          name: "Order",
          data: [0,0,0,0,0,0,0,20, 50, 54, 56, 48, 40, 32, 30, 26, 22,20,62,64,76,88,85,75,40],
        },
      ],
    },
    {
      title: "Money recovery",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 33,
      value: "5,400",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Cancel",
          data: [0,0,0,0,0,0,0,20, 30, 34, 36, 28, 20, 32, 20, 26, 22,20,62,64, 40, 38, 35, 32, 20],
        },
      ],
    },
    
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Thanh Tuyet",
      noti: "has ordered Roasted Chicken and Mixed ice cream.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "Nhat Quynh",
      noti: "commented on a page post",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Nhu Loan",
      noti: "has ordered a compo Chicken and compo fruit.",
      time: "2 hours ago",
    },
    {
      img: img4,
      name: "Black Vâu",
      noti: "book table A1 at 1pm.",
      time: "2 days ago",
    },
  ];
  