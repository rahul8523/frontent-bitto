import React, { useState } from 'react';
import './MembershipPlans.css';
import emailjs from '@emailjs/browser';

const plans = [
    { name: 'Basic', fee: '₹10,000', features: [true, true, true, false, false, false, false, false, false, false] },
    { name: 'Silver', fee: '₹25,000', features: [true, true, true, false, false, true, false, false, false, false] },
    { name: 'Gold', fee: '₹50,000', features: [true, true, true, true, true, true, true, false, false, false] },
    { name: 'Platinum', fee: '₹1,00,000', features: [true, true, true, true, true, true, true, true, true, true] },
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
                'your_service_id', // Replace with your EmailJS service ID
                'your_template_id', // Replace with your EmailJS template ID
                { ...formData, selectedPlan }, // Pass form data and selected plan
                'your_public_key' // Replace with your EmailJS public key
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
        <div className="membership-container">
      
            <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Membership Plans</h2>
            <p className="membership-subtitle">Explore our various levels of industry engagement and benefit.</p>
            <div className="membership-table">
                <div className="membership-column">
                    <div className="membership-feature">Membership Level</div>
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
                                {isAvailable ? <span className="checkmark">✔</span> : '-'}
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
    );
};

export default MembershipPlans;