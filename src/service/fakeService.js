let data = [
  {
    _id: 0,
    title: "Repair Dropdown",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 1,
    title: "Add Button",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 2,
    title: "Return Data",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 3,
    title: "Add to NavBar",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 4,
    title: "Login Bug",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },

  {
    _id: 5,
    title: "Add API call",
    content: "something to do",
    date: "28/02/2022",
    state: "entwicklung",
    status: false,
  },
  {
    _id: 6,
    title: "Fix Bug",
    content: "something to do",
    date: "28/02/2022",
    state: "entwicklung",
    status: false,
  },
  {
    _id: 7,
    title: "Add Feature",
    content: "something to do",
    date: "28/02/2022",
    state: "entwicklung",
    status: true,
  },
  {
    _id: 8,
    title: "Delete route",
    content: "something to do",
    date: "28/02/2022",
    state: "testen",
    status: false,
  },
  {
    _id: 9,
    title: "Add Support for x",
    content: "something to do",
    date: "28/02/2022",
    state: "testen",
    status: false,
  },

  {
    _id: 10,
    title: "Fix Bug",
    content: "something to do",
    date: "28/02/2022",
    state: "testen",
    status: true,
  },

  {
    _id: 11,
    title: "Add Email",
    content: "something to do",
    date: "28/02/2022",
    state: "release",
    status: false,
  },
  {
    _id: 12,
    title: "Delete PhoneNr",
    content: "something to do",
    date: "28/02/2022",
    state: "release",
    status: false,
  },
  {
    _id: 13,
    title: "Add img",
    content: "something to do",
    date: "28/02/2022",
    state: "release",
    status: false,
  },

  {
    _id: 14,
    title: "Delete API call",
    content: "something to do",
    date: "28/02/2022",
    state: "fertig",
    status: false,
  },
  {
    _id: 15,
    title: "Add logging",
    content: "something to do",
    date: "28/02/2022",
    state: "fertig",
    status: false,
  },
];

let archive = [
  {
    _id: 16,
    title: "Add Archive",
    content: "something to do",
    date: "28/02/2022",
    state: "fertig",
    status: false,
    completed: true,
  },
  {
    _id: 17,
    title: "Add Feature",
    content: "something to do",
    date: "28/02/2022",
    state: "fertig",
    status: false,
    completed: false,
  },
];
export function getData() {
  return data;
}

export function saveData(input) {
  data = input;
}

export function saveItem(input) {
  let buffer = [...data, input];
  data = buffer;
}

export function getArchive() {
  return archive;
}

export function saveArchive(input){
  archive = input
}


export function retrive(input) {
  let dataBuffer = [...data, input];
  data = dataBuffer;

  let archBuffer = archive.filter((el) => el._id !== input._id);
  archive = archBuffer;
}
export function expell(input) {
  let archBuffer = [...archive, input];
  archive = archBuffer;

  let dataBuffer = data.filter((el) => el._id !== input._id);
  data = dataBuffer;
}
