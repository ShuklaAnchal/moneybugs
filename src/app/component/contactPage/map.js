const MapSection = () => {
  return (
    <div className="w-[90%] h-[400px] mt-10 rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://maps.google.com/maps?q=ll%2C%20office%204th%20floor%2C%20119%20%2836-A%2C%20Narmadapuram%20Rd%2C%20behind%20Royal%20Enfield%20Showroom%2C%20Vidya%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462026&t=m&z=15&output=embed&iwloc=near" // <-- replace with your embed link
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;