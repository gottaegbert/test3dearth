export const dataChart = {
  dataInteractive: {
    labels: [
      "17/06",
      "18/06 ",
      "19/06",
      "20/06",
      "21/06",
      "22/06",
      "23/06",
      "24/06",
      "25/06",
    ],
    datasets: [
      {
        label: "Interaction of the day",
        data: [2, 4, 5, 8, 10, 6, 10, 12, 27],
        backgroundColor: ["#4746E0"],
        borderWidth: 5,
        borderColor: ["rgba(71,70,224,0.3)"],
      },
    ],
  },
  dataCash: {
    labels: [
      "17/06",
      "18/06 ",
      "19/06",
      "20/06",
      "21/06",
      "22/06",
      "23/06",
      "24/06",
      "25/06",
    ],
    datasets: [
      {
        label: "Cash flow of the day",
        data: [3, 8, 5, 3, 16, 24, 20, 25, 27],
        backgroundColor: ["#FF6384"],
        borderWidth: 5,
        borderColor: ["rgba(255,0,0,0.3)"],
      },
    ],
  },
  dataProject: {
    labels: ["GAME", "ART", "SOCIETY", "MUSIC", "SPORT", "OTHER"],
    datasets: [
      {
        label: "# of Votes",
        data: [14.28, 28.57, 14.28, 14.28, 28.57, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
};
