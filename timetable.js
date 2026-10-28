// GitHubリポジトリに配置するダイヤ定義ファイル (timetable.js)

// 下りダイヤ (1番線・2番線)
const kudariTimetable = [
      { isStandby: false, arrTime: "", depTime: "13:04", trainType: "空港急行", trackNum: "2", destination: "関西空港", cars: "8" },
      { isStandby: false, arrTime: "", depTime: "13:12", trainType: "サザン", trackNum: "2", destination: "和歌山市", cars: "8" },
      { isStandby: true,  arrTime: "13:07", depTime: "13:13", trainType: "普通", trackNum: "1", destination: "和歌山市", cars: "4" },
      { isStandby: false, arrTime: "", depTime: "13:20", trainType: "空港急行", trackNum: "2", destination: "関西空港", cars: "8" },
      { isPass: true, depTime: "13:26", trackNum: "2" },
      { isStandby: true,  arrTime: "13:22", depTime: "13:27", trainType: "普通", trackNum: "1", destination: "和歌山市", cars: "6" },
      { isStandby: false, arrTime: "", depTime: "13:34", trainType: "空港急行", trackNum: "2", destination: "関西空港", cars: "8" },
      { isStandby: false, arrTime: "", depTime: "13:42", trainType: "サザン", trackNum: "2", destination: "和歌山市", cars: "8" },
      { isStandby: true,  arrTime: "13:37", depTime: "13:43", trainType: "普通", trackNum: "1", destination: "和歌山市", cars: "4" },
      { isStandby: false, arrTime: "", depTime: "13:50", trainType: "空港急行", trackNum: "2", destination: "関西空港", cars: "8" },
      { isStandby: true,  arrTime: "", depTime: "13:56", trainType: "ラピートβ", trackNum: "2", destination: "関西空港", cars: "6" },
      { isStandby: true,  arrTime: "13:52", depTime: "13:57", trainType: "普通", trackNum: "1", destination: "和歌山市", cars: "6" },
];

// 上りダイヤ (3番線・4番線)
const noboriTimetable = [
      { isStandby: false, arrTime: "", depTime: "13:06", trainType: "サザン", trackNum: "3", destination: "なんば", cars: "8" },
      { isStandby: false, arrTime: "13:01", depTime: "13:07", trainType: "普通", trackNum: "4", destination: "なんば", cars: "4" },
      { isStandby: false, arrTime: "", depTime: "13:15", trainType: "空港急行", trackNum: "3", destination: "なんば", cars: "8" },
      { isStandby: false, arrTime: "13:19", depTime: "13:22", trainType: "普通", trackNum: "4", destination: "なんば", cars: "6" }
];
