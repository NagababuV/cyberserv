import React from 'react';

const services = [
  {
    title: "Data Protection",
    description: "Keep your sensitive data safe with industry-leading encryption and backup solutions.",
    imageUrl: "/assets/service1-image.png"
  },
  {
    title: "Threat Intelligence",
    description: "Stay ahead of cyber threats with real-time monitoring and analysis.",
    imageUrl: "/assets/service2-image.png"
  },
  {
    title: "Incident Response",
    description: "Our experts are ready to respond quickly to minimize damage during a breach.",
    imageUrl: "/assets/service3-image.png"
  }
];

const ServiceCard = () => {
  return (
    <section className="services" id="services">
      <h2>Our Cyber Security Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.imageUrl} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
