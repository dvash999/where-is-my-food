import DeliveryRepository from './delivery-repository.js';
import DeliveryRenderer from './delivery-renderer.js';
import EventsHandler from './events-handler-delivery.js';
import GoogleMap from './googleMap.js';

let deliveryRepository = new DeliveryRepository();
let deliveryRenderer = new DeliveryRenderer();
let googleMap = new GoogleMap();
let eventsHandler = new EventsHandler(deliveryRepository, deliveryRenderer, googleMap);

eventsHandler.registerSelectEmployee();
eventsHandler.registerSelectOrder();
eventsHandler.registerUnSelectOrder();
eventsHandler.registerReadyToGo();
eventsHandler.registerChangeEmployee();
eventsHandler.registerSelectDestination();
eventsHandler.registerOrderDeliverd();
eventsHandler.loadPage();
eventsHandler.showOrdersOnMap();

