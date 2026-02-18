import { useEffect, useState } from "react";
import LocationsDetails from "./LocationsDetails";
import axios from "axios";
import { use } from "react";

const ShowingDetails = (a) => {
  const [locationName, setlocationName] = useState("");
  const [tempreatureInC, settempreatureInC] = useState("");
  const [tempreatureInF, settempreatureInF] = useState("");
  const [windSpeed, setwindSpeed] = useState("");
  const [presure, setpresure] = useState("");
  const [humidity, sethumidity] = useState("");
  const [cloud, setcloud] = useState("");
  const [heatIndex, setheatIndex] = useState("");
  const [uvRays, setuvRays] = useState("");
  const [dew, setdew] = useState("");
  const [condition, setcondition] = useState("");
  const [feelsC, setfeelsC] = useState("");
  const [feelsF, setfeelsF] = useState("");
  const [windChillInC, setwindChillInC] = useState("");
  const [windDirection, setwindDirection] = useState("");

  //! For Loading
  const [isLoading, setisLoading] = useState(false);

  function inputValueCheck(placeName) {
    placeName = placeName.trim();
    if (placeName !== "") {
      gettingData(placeName);
    }
  }
  useEffect(() => {
    inputValueCheck(a.data);
  }, [a]);

  async function gettingData(p) {
    try {
      setisLoading(true);
      let response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=cd631d19ad2642beb93155744262201&q=${p}`,
      );
      // setTimeout(() => {
      //   setisLoading(false);
      // }, 500);

      console.log(response);
      dataLoading(response);
    } catch (error) {
      alert("We Got An Error Please Try Again");
    }
  }

  function dataLoading(response) {
    setlocationName(response.data.location.name.toUpperCase());
    settempreatureInC(Math.floor(response.data.current.temp_c) + "°C");
    settempreatureInF(Math.floor(response.data.current.temp_f) + "°F");
    setwindSpeed(response.data.current.wind_kph + " kph");
    setpresure(response.data.current.presure);
    setcloud(response.data.current.cloud);
    setheatIndex(response.data.current.heatindex_c);
    setuvRays(response.data.current.uv);
    setdew(response.data.current.dewpoint_c);
    setcondition(response.data.current.condition.text);
    setfeelsC(response.data.current.feelslike_c);
    setfeelsF(response.data.current.feelslike_f);
    setwindChillInC(response.data.current.windchill_c);
    setwindDirection(response.data.current.wind_degree);
  }

  return (
    <>
      <div className="min-h-75 w-[90%] bg-[#adadad6e] rounded-2xl ">
        <div className="flex flex-wrap justify-between h-full min-w-full p-3">
          <div className="mt-5 h-full w-[30%] min-w-[35%] leading-loose">
            <div>
              <ul className="text-[15px]">
                <li>
                  <span>Wind Speed: </span>
                  <span>{windSpeed}</span>
                </li>
                <li>
                  <span>Pressure: </span>
                  <span>{presure}</span>
                </li>
                <li>
                  <span>Humidity: </span>
                  <span>{humidity}</span>
                </li>
                <li>
                  <span>Cloud</span>
                  <span>{cloud}</span>
                </li>

                <li>
                  <span>Heat Index: </span>
                  <span>{heatIndex}</span>
                </li>
                <li>
                  <span>UV Rays: </span>
                  <span>{uvRays}</span>
                </li>
                <li>
                  <span>Dew:</span>
                  <span>{dew}</span>
                </li>
                <li>
                  <span>Condition: </span>
                  <span>{condition}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full min-w-[60%] ">
            <div className="h-[65%] min-w-full ">
              {tempreatureInC !== "" && (
                <LocationsDetails
                  tempC={tempreatureInC}
                  tempF={tempreatureInF}
                  location={locationName}
                />
              )}
              
            </div>
            <div>
              <ul className="leading-loose">
                <li>
                  <span>Feels Like in Celcius: </span>
                  <span>{feelsC}</span>
                </li>
                <li>
                  <span>Feels Like in Farhenheit: </span>
                  <span>{feelsF}</span>
                </li>
                <li>
                  <span>Wind Chill in Celcius: </span>
                  <span>{windChillInC}</span>
                </li>
                <li>
                  <span>Wind Direction: </span>
                  <span>{windDirection}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowingDetails;
