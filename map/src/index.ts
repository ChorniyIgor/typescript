import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const mapContainer = document.getElementById("map") as HTMLElement;
const map = new CustomMap(mapContainer);

const user = new User();
map.addMarker(user);

const company = new Company();
map.addMarker(company);
