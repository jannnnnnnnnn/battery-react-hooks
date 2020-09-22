import React, { useState, useEffect } from "react";
import Battery from "../Battery/Battery";
import { register, unregister } from "../../utils/battery";

function BatteryHookContainer() {
  // const arr = useState(0.55);
  // const level = arr[0];
  // //convention to call this "set"Level
  // const setLevel = arr[1];
  // const [level, setLevel] = arr;

  //using destructuring assignment syntax
  // const [level, setLevel] = useState(0.55);
  // return (
  //   <>
  //     <Battery level={level} />
  //     <button onClick={() => setLevel(level + 0.01)}>Update Level</button>
  //   </>
  // );
  const [batteryData, setBatteryData] = useState({
    // level: 0.55,
    // charging: true,
  });

  // function updateBattery(battery) {
  //   setBatteryData({ level: battery.level, charging: battery.charging });
  // }

  //fully replacing the batteryData object
  function updateBattery(battery) {
    setBatteryData(battery);
  }

  useEffect(() => {
    register(updateBattery);
    console.log("useEffect was called");
    return () => {
      unregister(updateBattery);
    };
  }, []);

  return (
    <>
      {/* Update as follows */}
      <Battery level={batteryData.level} charging={batteryData.charging} />
      {/* <button
        onClick={() =>
          setBatteryData({ level: batteryData.level + 0.01, charging: false })
        }
      >
        Update Level
      </button> */}
    </>
  );
}
export default BatteryHookContainer;
