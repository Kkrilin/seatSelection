import { useState } from "react";
import "./App.css";

const seatJ = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "D",
};

function App() {
  const [selectedSeat, setSelectedSeats] = useState([]);
  const [limit, setLimit] = useState(4);
  const [showSelectedSeat, setShowSelectedSeat] = useState(false);
  const handleClick = (e) => {
    const seat = e.target.dataset.seat;
    console.log(seat);
    if (!selectedSeat.includes(seat) && selectedSeat.length === limit) {
      return;
    }
    setSelectedSeats((prve) => {
      if (selectedSeat.includes(seat)) {
        return prve.filter((s) => s !== seat);
      } else {
        return [...prve, seat];
      }
    });
  };
  return (
    <>
      {!showSelectedSeat && (
        <div className="flex justify-center">
          <div className="flex items-end">
            <div>
              <div className=" flex justify-center">
                No of Seats{" "}
                <select
                  value={limit}
                  onChange={(e) => setLimit(+e.target.value)}
                  name=""
                  id=""
                  className=" border w-10 h-6"
                >
                  {Array.from({ length: 14 * 6 }, (_, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "100px",
                  width: "550px",
                }}
              >
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
                <div>F</div>
                <div>G</div>
              </div>
              {Array.from({ length: 14 }, (_, i) => (
                <div className="flex gap-10 m-5">
                  <span
                    style={{
                      marginRight: "10px",
                      textAlign: "right",
                      display: "block",
                      width: "16px",
                    }}
                  >
                    {i + 1}
                  </span>
                  {/* <div>{seatJ[i]}</div> */}
                  {Array.from({ length: 6 }, (_, j) => (
                    <div
                      onClick={(e) => handleClick(e)}
                      data-seat={`${i + 1}${seatJ[j]}`}
                      className=" border w-16 h-10 rounded-md"
                      style={{
                        backgroundColor: selectedSeat.includes(
                          `${i + 1}${seatJ[j]}`
                        )
                          ? "yellow"
                          : "grey",
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <button
                onClick={() => setShowSelectedSeat((prve) => !prve)}
                className="px-10 py-5 bg-blue-600 rounded-2xl"
                disabled={selectedSeat.length === 0}
              >
                next
              </button>
            </div>
          </div>
        </div>
      )}
      {showSelectedSeat && (
        <div className="flex justify-center">
          <div>
            <div>
              <h1>final Selection</h1>
              <div>
                No of Seats: <span>{selectedSeat.length}</span>
              </div>
              <div>
                Seats:{" "}
                <span>
                  {selectedSeat &&
                    selectedSeat.length > 0 &&
                    selectedSeat?.join(" ")}
                </span>
              </div>
              <div className="flex gap-5">
                <button
                  className="px-10 py-5 bg-blue-600 rounded-2xl"
                  onClick={() => setShowSelectedSeat((prv) => !prv)}
                >
                  {" "}
                  {"<Modify selection"}{" "}
                </button>
                <button className="px-10 py-5 bg-blue-600 rounded-2xl">
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
