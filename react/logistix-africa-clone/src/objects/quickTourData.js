import administrators from "../imgs/administrators.png";
import tracker from "../imgs/tracker.png";
import dispatchers from "../imgs/dispatchers.png";
import orders from "../imgs/orders.png";
import pricelist from "../imgs/pricelist.png";

export const quicktourList = [{
    header: "Track Parcels",
    para: (<>Your <span className="medium1">Customers can Track Their Parcels</span> from Pickup to
    Destination. They get an estimated delivery time for every parcel they ship using a
    Tracking ID that will be sent to their mail after registering their parcels.</>),
    img: tracker,
    alt: "tracker"
}, {
    header: "Receive & Manage Orders",
    para: (<>We made it possible that You, as well as your Administrators can <span className="medium1">Manage Shipments And Monitor Parcels</span> from Pickup to Destination. You also have the ability to <span class="medium1">Manage your Customers’ information</span> so you can always be in communication with your customers.</>),
    img: orders,
    alt: "orders"
}, {
    header: "Control Your Price List",
    para: (<>We understand different companies have their unique pricing models, so we designed Logistix with this need in mind. And so we have created a unique way to <span class="medium1">Accommodate for any pricing model of choice.</span></>),
    img: pricelist,
    alt: "pricelist"
}, {
    header: "Manage Your Dispatchers",
    para: (<>We also provide a way to <span class="medium1">Manage your Dispatch Riders.</span> By manage, we mean you can <span class="medium1">Create</span> new riders, Assign Parcels to dispatch riders, <span class="medium1">Edit</span> and <span class="medium1">Delete</span> dispatch riders.</>),
    img: dispatchers,
    alt: "dispatchers"
}, {
    header: "Manage Your Administrators",
    para: (<>We designed it with the ability to allow you <span className="medium1">Delegate Administrative Tasks</span> such as the management of shipments and dispatch riders to administrators so you can focus on growing your business.</>),
    img: administrators,
    alt: "administrators"
}]