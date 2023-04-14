import axios from "axios";
import { urls } from "../constants/apiUrl";

export const postThingName = async (thingName) => {
  try {
    await axios.post(urls.THINGNAME_API, { thingName }).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};
