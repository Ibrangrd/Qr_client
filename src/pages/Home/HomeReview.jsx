import React from 'react';

const HomeReview = () => {
  const sliderData = [
    { 
      id:"1",
      image: 'https://images.bhaskarassets.com/web2images/521/2023/06/08/orig_26-1_1686179647.jpg',
      title: 'DK Singh',
      description: '(Vice Chancellor of JUT)',
      review: "Absolutely loved the photography and card services! The team was professional, creative, and delivered beyond expectations. Highly recommend!",
    },
    {
      id:"2",
      image: 'https://jutranchi.ac.in/wp-content/uploads/2023/12/1580987092274.jpg',
      title: 'Sneh Kumar',
      description: '(Director of JUT)',
      review: "Amazing experience! The photography was stunning, and the card designs were perfect. Truly impressed with the quality and attention to detail.",
    },
    {
      id:"3",
      image: "https://i.ibb.co/55Q2qh5/Whats-App-Image-2025-01-21-at-19-05-13-b735addb.jpg",
      title: "Md. Shahid Raza",
      description: "(Tata Steel)",
      review: "Great experience with the card service! The delivery was on time, and the quality of the cards exceeded my expectations. Highly recommended.",
    },
    {
      id:"4",
      image: "https://uwisa.weebly.com/uploads/2/7/6/9/27698983/688443.jpg?192",
      title: "Sneha Kumari",
      description: "(Bank Manager)",
      review: "Loved the elegant card designs! The team understood our vision and created something truly unique. Would highly recommend their services!",
    },
    {
      id:"5",
      image: "https://img.freepik.com/free-photo/indian-man-student-shirt-posed-outdoor_627829-2276.jpg",
      title: "Rahul Singh",
      description: "(Work At JSW)",
      review: "The invitation cards were top-notch and also other Services. The attention to detail and premium quality made them stand out. Thank you for the excellent service.",
    },
    {
      id:"6",
      image: "https://img.freepik.com/premium-photo/indian-woman-portrait-temple_53876-71699.jpg",
      title: "Priyanka Jaswal",
      description: "(Work At TCS)",
      review: "The card quality was excellent, and the photography service was outstanding. The team was professional and captured every special moment beautifully",
    },
    
  ];

  return (
    <div className="mb-8">
      <div className="text-center">
        <p className="my-6 text-3xl md:text-5xl font-bold text-[#457b9d]">
          Testimonials
        </p>
      </div>

      <div className="relative w-10/12 mx-auto overflow-x-auto scrollbar-none">
        <div className="shadow-inner rounded-lg w-auto h-auto flex space-x-4 scrollbar-none">
            {sliderData.map((ser, index) => (
              <div key={index} className="flex-none w-[18rem] snap-start">
                <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
                  
                  {/* Image & Text */}
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-24 h-24 object-cover shadow-lg rounded-full"
                      src={ser.image}
                      alt={ser.title}
                    />
                    <div>
                      <p className="text-black font-bold">{ser.title}</p>
                      <p className="text-black">{ser.description}</p>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-left text-lg font-semibold text-gray-700 mt-4">
                    {ser.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default HomeReview;
