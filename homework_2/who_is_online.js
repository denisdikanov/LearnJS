const whosOnline = (friends) => {
  let entries = Object.entries(friends);
  const result = {};
  const online_list = [];
  const offline_list = [];
  const away_list = [];
  entries.forEach(function (element) {
    let value = element[1];
    if (value["status"] == "offline") {
      offline_list.push(value["username"]);
    } else if (value["status"] == "online" && value["lastActivity"] <= 10) {
      online_list.push(value["username"]);
    } else {
      away_list.push(value["username"]);
    }
  });
  if (online_list != "") {
    result["online"] = online_list;
  }
  if (offline_list != "") {
    result["offline"] = offline_list;
  }
  if (away_list != "") {
    result["away"] = away_list;
  }
  return result;
};
