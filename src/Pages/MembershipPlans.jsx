import React, { useState } from 'react';
import './MembershipPlans.css';
import emailjs from '@emailjs/browser';

// Membership plans and features
const plans = [
    { name: 'Basic', fee: '₹10,000', features: [true, true, true, false, false, false, false, false, false, false] },
    { name: 'Silver', fee: '₹25,000', features: [true, true, true, false, false, false, false, false, false, false] },
    { name: 'Gold', fee: '₹50,000', features: [true, true, true, false, true, true, true, true, true, false] },
    { name: 'Platinum', fee: '₹1,00,000', features: [true, true, true, true, true, true, "Priority", "Personalized", true, true] } // Custom text in place of true
];

const featuresList = [
    'Business Meets',
    'Seminars & Workshops',
    'Industry Voice',
    'Exclusive Dinner with Higherups',
    'VIP Event Invitations',
    'Business Consultations',
    'Policy Advocacy Support',
    'Featured Industry Profile',
    'Leadership Opportunities',
];

const MembershipPlans = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [formData, setFormData] = useState({ name: '', phone: '', occupation: '', email: '' });

    const openModal = (planName) => {
        setSelectedPlan(planName);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', phone: '', occupation: '', email: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_wrk5j76', //your_service_id
                'template_ajfrv6q',  //your_template_id
                { ...formData, selectedPlan }, 
                '3CoQnyOSI3gq1XqZ6' //your_public_key
            )
            .then(
                () => {
                    alert('Subscription email sent successfully!');
                    closeModal();
                },
                (error) => {
                    alert('Failed to send subscription email. Please try again.');
                    console.error(error);
                }
            );
    };

    return (
        <>
            <div style={{ background:"#b27f4a", height:"160px", marginTop:"-161px" }}></div>
            <div className="membership-container py-5">
                <h2 style={{ color: '#b27f4a' }} className="text-center membership-heading">llMembership Plans</h2>
                <p className="membership-subtitle">Explore our various levels of industry engagement and benefit.</p>
                <div className="membership-table">
                    <div className="membership-column">
                        <div className="membership-feature fw-bold pt-sm-3">Membership Level</div>
                        <div className="membership-feature">Annual Fee (INR)</div>
                        {featuresList.map((feature, index) => (
                            <div key={index} className="membership-feature">{feature}</div>
                        ))}
                    </div>
                    {plans.map((plan, index) => (
                        <div key={index} className="membership-column">
                            <div className="membership-plan-name">{plan.name}</div>
                            <div className="membership-fee">{plan.fee}</div>
                            {plan.features.map((isAvailable, featureIndex) => (
                                <div key={featureIndex} className="membership-feature">
                                    {typeof isAvailable === 'string' ? (
                                        <span className="custom-feature-text">{isAvailable}</span> // Display custom text
                                    ) : isAvailable ? (
                                        <span className="checkmark">✔</span> // Display checkmark for true
                                    ) : (
                                        <span className="checkmarks">-</span> // Display dash for false
                                    )}
                                </div>
                            ))}
                            <button onClick={() => openModal(plan.name)} className="subscribe-button">
                                Subscribe
                            </button>
                        </div>
                    ))}
                </div>


                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>Subscribe to {selectedPlan} Plan</h3>
                            <form onSubmit={handleSubmit} className="subscription-form">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="occupation"
                                    placeholder="Occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                            <button onClick={closeModal} className="close-button">x</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MembershipPlans;
