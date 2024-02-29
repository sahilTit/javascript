import { CiDeliveryTruck } from "react-icons/ci";
import "./Services.css";
import serviceData from "../assets/data/serviceData";
function Services() {
  // console.log(serviceData)
  return (
    <div className="service">
      {serviceData.map((item, index) => (
        <div
          className="services"
          key={index}
          style={{ background: `${item.bg}` }}
        >
          <div>
            <span className="truck-icon">
              <CiDeliveryTruck />
            </span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
          <div></div>
        </div>
      ))}
      
    </div>
  );
}

export default Services;
