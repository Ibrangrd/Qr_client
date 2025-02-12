import { useState, useEffect } from "react";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [data, setData] = useState(defaultContactFormData);
  const { user, API } = useAuth();

  useEffect(() => {
    if (user) {
      setData((prevData) => ({
        ...prevData,
        username: user.username || "",
      }));
    }
  }, [user]);

  const handleContactForm = async (e) => {
    e.preventDefault();
    console.log("Form data:", data);
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("API response:", response);
      if (response.ok) {
        setData(defaultContactFormData);
        const responseData = await response.json();
        toast.success("Contact Detail Sent Successfully");
      } else {
        toast.error("Details Not Sent");
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="px-1 pt-4 bg-[#FCF7F8]">
      <div className="text-center bg-[#FCF7F8]">
        <span className="mb-2 block sm:text-5xl text-3xl bg-[#FCF7F8]  font-semibold text-[#C75B7A]">
          Contact Us
        </span>
        <h2 className=" hidden sm:block bg-[#FCF7F8] text-black md:block mb-2 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
          GET IN TOUCH WITH US
        </h2>
      </div>
      <section className="relative z-10 overflow-hidden bg-[#FCF7F8] lg:py-[40px] mx-auto">
        <div className="container ">
          <div className="flex justify-center ">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12  ">
              <div className="relative p-8 bg-white rounded-lg shadow-xl sm:p-12">
                <form onSubmit={handleContactForm}>
                  <div className="mb-6 ">
                    <input
                      type="text"
                      id = "username"
                      name="username"
                      placeholder="Your Name"
                      className="border-stroke bg-[#FCF7F8] text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                      onChange={handleInput}
                      value={data.username}
                      required
                      />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                      className="border-stroke bg-[#FCF7F8]  text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-green outline-none"
                      onChange={handleInput}
                      value={data.phone}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      className="border-stroke bg-[#FCF7F8]  text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                      onChange={handleInput}
                      value={data.message}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full p-3 text-white font-bold transition border rounded border-[#FF4E88] bg-[#FF4E88] hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#FF4E88"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg
                      width="34"
                      height="134"
                      viewBox="0 0 34 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#FF4E88"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around pb-10 pt-10">
    <a href="tel:+919832704206" target="_blank">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg sm:hover:bg-green-700 transition">
            📞 Call Now
        </button>
    </a>
    
    <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg sm:hover:bg-green-700 transition">
            💬 Chat with Us
        </button>
    </a>
</div>
      </section>
    </div>
  );
};

export default Contact;
