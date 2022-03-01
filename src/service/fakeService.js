let data = [
  {
    _id: 0,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 1,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 2,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 3,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },
  {
    _id: 4,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "backlock",
    status: false,
  },

  {
    _id: 6,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "entwicklung",
    status: false,
  },
  {
    _id: 7,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "entwicklung",
    status: false,
  },

  {
    _id: 5,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "entwicklung",
    status: true,
  },

  {
    _id: 8,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "testen",
    status: false,
  },
  {
    _id: 9,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "testen",
    status: false,
  },

  {
    _id: 10,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "testen",
    status: true,
  },

  {
    _id: 11,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "release",
    status: false,
  },
  {
    _id: 12,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "release",
    status: false,
  },
  {
    _id: 13,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "release",
    status: false,
  },

  {
    _id: 14,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "fertig",
    status: false,
  },
  {
    _id: 15,
    title: "Some Title",
    content: "something to do",
    date: "28/02/2022",
    state: "fertig",
    status: false,
  },
];

let archive = [
  {
    _id: 16,
    title: "Some Title1",
    content: "something to do",
    date: "28/02/2022",
    state: "fertig",
    status: false,
    completed: true,
  },
  {
    _id: 17,
    title: "Some Title2",
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
