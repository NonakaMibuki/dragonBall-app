import { useEffect, useState } from "react";
import "./App.css";
import { getAllDragonBall, getDragonBall } from "./utils/dragonBall";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://dragonball-api.com/api/characters";
  const [loading, setLoading] = useState(true);
  const [dragonBallData, setDragonBallData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    const fetchDragonBallData = async () => {
      //全てのドラゴンボールデータを取得
      let res = await getAllDragonBall(initialURL);

      //各キャラクターの詳細なデータを取得
      loadDragonBall(res.items);
      setNextURL(res.links.next);
      setLoading(false);
    };
    fetchDragonBallData();
  }, []);

  const loadDragonBall = async (data) => {
    let _dragonBallData = await Promise.all(
      data.map((dragonBall) => {
        let dragonBallRecord = getDragonBall(dragonBall.id);
        return dragonBallRecord;
      })
    );
    setDragonBallData(_dragonBallData);
  };

  const handleNextPage = async () => {
    if (!nextURL) return;
    setLoading(true);
    let data = await getAllDragonBall(nextURL);
    await loadDragonBall(data.items);
    console.log(data);

    setNextURL(data.links.next);
    setPrevURL(data.links.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllDragonBall(prevURL);
    await loadDragonBall(data.items);
    setNextURL(data.links.next);
    setPrevURL(data.links.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div className="dragonBall__card--container">
              {dragonBallData.map((dragonBall, i) => {
                return <Card key={i} dragonBall={dragonBall} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
