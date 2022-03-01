import React, { useState } from "react";
import { useEffect } from "react";
import RowElem from "../components/rowelem/RowElem";
import { getData, saveData } from "./../service/fakeService";

function Home(props) {
  // init
  const labels = {
    backlock: { labelName: "Backlock", key: "backlock" },
    entwicklung: { labelName: "Entwicklung", key: "entwicklung" },
    testen: { labelName: "Testen", key: "testen" },
    release: { labelName: "Release", key: "release" },
    fertig: { labelName: "Fertig!", key: "fertig" },
  };
  const [data, setData] = useState();
  const [backlock, setBacklock] = useState();
  const [entwicklung, setEntwicklung] = useState();
  const [testen, setTesten] = useState();
  const [release, setRelease] = useState();
  const [fertig, setFertig] = useState();
  const [check, setCheck] = useState(true);

  useEffect(() => {
    if (check) getter();
  });
// update states
  useEffect(() => {
    if (data) {
      saveData(data)
      let list = data;
      changeData(list);
    }
    
  }, [data]);
// HTTP
  const getter = () => {
    const data = getData();
    setData(data);
    changeData(data);
    setCheck(false);
  };
// split data
  const changeData = (list) => {
    const back = list.filter((item) => item.state === "backlock");
    const entw = list.filter((item) => item.state === "entwicklung");
    const test = list.filter((item) => item.state === "testen");
    const rele = list.filter((item) => item.state === "release");
    const fert = list.filter((item) => item.state === "fertig");
    setBacklock(back);
    setEntwicklung(entw);
    setTesten(test);
    setRelease(rele);
    setFertig(fert);
  };


  if (!data) return <div>No Data</div>;
  if (data) return (
    <div className="position-relative">
      <div className="container position-absolute start-50 translate-middle-x scroller">
        <div className="row w-100">
          <RowElem
            label={labels.backlock}
            dataSet={backlock}
            data={data}
            setData={setData}
            
          />
          <div className="vr" />
          <RowElem
            label={labels.entwicklung}
            dataSet={entwicklung}
            data={data}
            setData={setData}
          />
          <div className="vr" />
          <RowElem
            label={labels.testen}
            dataSet={testen}
            data={data}
            setData={setData}
          />
          <div className="vr" />
          <RowElem
            label={labels.release}
            dataSet={release}
            data={data}
            setData={setData}
          />
          <div className="vr" />
          <RowElem
            label={labels.fertig}
            dataSet={fertig}
            data={data}
            setData={setData}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
