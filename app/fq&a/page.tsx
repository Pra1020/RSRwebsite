"use client"
import React, { useState } from "react";

const FAQPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null); // To track active section
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null); // To track active FAQ in a section

  const sections = [
    {
      title: "GENERAL",
      faqs: [
        {
            question: "1. If I need to ask you a question, how do I contact you?",
            answer:
              "Ans: It depends on what the question is. If it’s a question whose answer might pertain to the entire class, then you should either ask in the online session, so that everyone gets the benefit of the answer. If it’s a question that is personal in nature, then you should email the facilitators.",
          },
          {
            question: "2. How do I receive my training certificate?",
            answer: "Ans: You will get course completion certificate to your email.",
          },
          {
            question: "3. What is included with my course registration?",
            answer:
              "Ans: You will get access to online live interactive sessions and access to recordings of completed sessions.",
          },
          {
            question: "4. Do I need to create a profile to access online training?",
            answer:
              "Ans: No, Once payment is done we will send a link to your email. You can access online training through that link.",
          },
          {
            question: "5. How long do I have to complete my course?",
            answer:
              "Ans: Usually course duration is 30 to 40 hrs. You should spend 6 to 8 hrs. per week.",
          },
          {
            question: "6. Can I retake my course?",
            answer:
              "Ans: Yes, you can retake your course but conditions apply. First, you should tell the specific reason why you are retaking the course, because to maintain quality we allow limited participants for each online training.",
          },
          {
            question: "7. Can I change my course if I don’t like the present course?",
            answer:
              "Ans: Yes, you can change your course if you don’t like the trainer or course content. But, you should intimate us within 2 days of the course started.",
          },
          {
            question: "8. The link to My Training isn’t working – what do I do?",
            answer:
              "Ans: Please feel free to contact USA: +1 734 418 2465 | India: +91 40 4018 1306 | +91 7799713623 | info@learntek.org",
          },
          {
            question: "9. Can you resend the meeting invitation?",
            answer:
              "Ans: Yes, in case of missing invitation we will resend meeting invitation by sending a link to your email.",
          },
          {
            question: "10. Will the online training session occur in my time zone?",
            answer:
              "Ans: Yes, Online training session occurs according to participants' time zones. Please check www.learntek.org to check the availability of trainings in your time zones or contact USA: +1 734 418 2465 | India: +91 40 4018 1306 | +91 7799713623 | info@learntek.org",
          },
      ],
    },
    {
      title: "TRAINING",
      faqs: [
        {
          question:
            "1. I would like my team to take a course jointly. How do I go about this?",
          answer:
            "If you are interested in team training, send an email to info@learntek.org to request a custom quote.",
        },
        {
          question: "2. Do you offer a discount on fees?",
          answer:
            "Yes, we offer group discounts for multiple enrollments and discounts if you enroll in more than one course.",
        },
      ],
    },
    {
      title: "ONLINE TRAINING",
      faqs: [
        {
          question: "1. Will the online session occur in my time zone?",
          answer:
            "Yes, sessions are conducted according to participants' time zones. Contact us for availability.",
        },
      ],
    },
    {
        title: "SUPPORT",
        faqs: [
          {
            question: "1. How can I reach the Customer Service Team for my issues?",
            answer: "Our Team can be reached 24/7 via email or phone.",
          },
          {
            question: "2. How soon should I expect a response?",
            answer:
              "All tickets raised by customers are addressed within 48 business hours. For real-time responses, contact us via phone.",
          },
        ],
      },
      {
        title: "REFER AND EARN",
        faqs: [
          {
            question: "1. Do I need to be a Learntek customer to refer my friends?",
            answer:
              "No, everyone is eligible to be part of Learntek Refer and Earn program.",
          },
          {
            question: "2. How can I refer my friends/Connections?",
            answer:
              "Sign up for the Learntek Refer and Earn program at https://www.learntek.com/refer-and-earn/. Share your referral links via social media or contact us for help.",
          },
          {
            question: "3. What should I do if I am not able to complete the course due to technical issues?",
            answer:
              "Please raise a ticket by sending an email to our support desk. Our team will contact you within 24 hours.",
          },
        ],
      },
      {
        title: "BECOME A TRAINER",
        faqs: [
          {
            question: "1. How do I become a trainer at Learntek?",
            answer:
              "Go through https://www.learntek.org/become-an-instructor/ and submit your details or send your resume to info@learntek.org. Our team will contact you within 24 hours.",
          },
        ],
      },
      {
        title: "PAYMENT",
        faqs: [
          {
            question: "1. How can I obtain an invoice for my payment?",
            answer:
              "You will get the invoice for the payment made to Learntek to your email.",
          },
          {
            question: "2. I have made the payment but my course access has not been activated yet.",
            answer:
              "Once the payment is done, you will get a link to your email. If you didn’t receive an email, please contact info@learntek.org.",
          },
          {
            question: "3. I need some corrections made to my invoice/Certificate?",
            answer:
              "You can request corrections by contacting info@learntek.org. Our team will address the corrections within 48 business hours.",
          },
          {
            question: "4. Are there any offers for the person enrolling in multiple courses?",
            answer:
              "Yes, discounts are available for those taking multiple courses. Please visit https://www.learntek.org/offer/ or contact us for details.",
          },
          {
            question: "5. What are the different modes of payment for enrollment?",
            answer:
              "You can pay through PayPal or by using net banking. Learntek will provide bank details if needed.",
          },
          {
            question: "6. After payment, when will I get access to my subscription?",
            answer:
              "Once payment is done, you will get access to online training within a few days of training start.",
          },
          {
            question: "7. How do I check the upcoming Online batches?",
            answer:
              "You can check the schedule of upcoming workshops from our website https://www.learntek.org.",
          },
        ],
      },
      {
        title: "CERTIFICATION",
        faqs: [
          {
            question: "1. Do I get a certificate at the end of my course?",
            answer:
              "Yes, you will get a course completion certificate sent to your email after the course ends.",
          },
          {
            question: "2. By when will I get a certificate after the completion of my course?",
            answer:
              "You will get a certificate within one or two days by raising your request through email with your details.",
          },
        ],
      },
    ];
  

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index); // Toggle section
    setActiveFAQ(null); // Reset FAQ when toggling a section
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index); // Toggle FAQ
  };

  return (
    <div className="faq-page">
      <style jsx>{`
        .faq-page {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 2rem;
          font-weight: bold;
        }

        .section {
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-bottom: 10px;
          background-color: #f9f9f9;
        }

        .section-header {
          padding: 10px 15px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #e8e8e8;
        }

        .section-header:hover {
          background-color: #ddd;
        }

        .section-content {
          padding: 10px 15px;
        }

        .faq {
          margin-bottom: 10px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
        }

        .faq-header {
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-header:hover {
          color: #007acc;
        }

        .faq-answer {
          margin-top: 10px;
          color: #555;
        }

        .icon {
          font-size: 1.3rem;
          transition: transform 0.3s ease;
        }

        .icon.expanded {
          transform: rotate(180deg);
        }

        .icon.collapsed {
          transform: rotate(0);
        }
      `}</style>

      <h1>FAQ Page</h1>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section">
          {/* Section Header */}
          <div
            className="section-header"
            onClick={() => toggleSection(sectionIndex)}
          >
            <span>{section.title}</span>
            <span
              className={`icon ${
                activeSection === sectionIndex ? "expanded" : "collapsed"
              }`}
            >
              {activeSection === sectionIndex ? "▲" : "▼"}
            </span>
          </div>

          {/* Section Content */}
          {activeSection === sectionIndex && (
            <div className="section-content">
              {section.faqs.map((faq, faqIndex) => (
                <div key={faqIndex} className="faq">
                  {/* FAQ Header */}
                  <div
                    className="faq-header"
                    onClick={() => toggleFAQ(faqIndex)}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`icon ${
                        activeFAQ === faqIndex ? "expanded" : "collapsed"
                      }`}
                    >
                      {activeFAQ === faqIndex ? "▲" : "▼"}
                    </span>
                  </div>

                  {/* FAQ Answer */}
                  {activeFAQ === faqIndex && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
