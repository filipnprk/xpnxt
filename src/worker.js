import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";

console.log("this is good happenings there");

precacheAndRoute(self.__WB_MANIFEST);
