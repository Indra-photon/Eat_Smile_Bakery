import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OnlineCakeOrder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    cakeSize: '',
    cakeFlavor: '',
    filling: '',
    decorations: '',
    frosting: '',
    decorationColor: '',
    message: '',
    specialInstructions: '',
    specialImage: null
  });

  const [errors, setErrors] = useState({});

  // Form options
  const cakeSizes = [
    'Select value',
    '6" Round (Serves 8-10)',
    '8" Round (Serves 12-15)',
    '10" Round (Serves 20-25)',
    '1/4 Sheet (Serves 20-25)',
    '1/2 Sheet (Serves 35-40)',
    'Full Sheet (Serves 70-80)'
  ];

  const cakeFlavors = [
    'Select value',
    'Chocolate',
    'White',
    'Marble',
    'Danish Torte'
  ];

  const fillings = [
    'Select value',
    'Bavarian Cream',
    'Chocolate Bavarian',
    'Raspberry',
    'Strawberry',
    'Apple',
    'None'
  ];

  const frostingOptions = [
    'Select value',
    'Buttercream',
    'Whipped Cream',
    'Chocolate',
    'Custom'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        specialImage: e.target.files[0]
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!formData.pickupTime || formData.pickupTime === 'Select value') {
      newErrors.pickupTime = 'Pickup time is required';
    }
    if (!formData.cakeSize || formData.cakeSize === 'Select value') {
      newErrors.cakeSize = 'Cake size is required';
    }
    if (!formData.cakeFlavor || formData.cakeFlavor === 'Select value') {
      newErrors.cakeFlavor = 'Cake flavor is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        alert('Order submitted successfully! We will call you within 24 hours to confirm your order.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          pickupDate: '',
          pickupTime: '',
          cakeSize: '',
          cakeFlavor: '',
          filling: '',
          decorations: '',
          frosting: '',
          decorationColor: '',
          message: '',
          specialInstructions: '',
          specialImage: null
        });
      } catch (error) {
        alert('Failed to submit order. Please try again.');
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div 
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-center font-serif mb-8">Online Cake Order Form</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.lastName ? 'border-red-500' : ''
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Pickup Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pickup Date *</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.pickupDate ? 'border-red-500' : ''
                }`}
              />
              {errors.pickupDate && (
                <p className="mt-1 text-sm text-red-500">{errors.pickupDate}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pickup Time *</label>
              <select
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.pickupTime ? 'border-red-500' : ''
                }`}
              >
                <option value="Select value">Select value</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
              </select>
              {errors.pickupTime && (
                <p className="mt-1 text-sm text-red-500">{errors.pickupTime}</p>
              )}
            </div>
          </div>

          <p className="text-sm text-blue-600 italic">
            Please remember we close at 2:00 PM Monday & Tuesday, 3:00 PM Wednesday & Thursday, 5:00 PM on Friday and 3:00 PM on Saturday. Please plan your pickup time accordingly.
          </p>

          {/* Cake Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Cake Size *</label>
              <select
                name="cakeSize"
                value={formData.cakeSize}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.cakeSize ? 'border-red-500' : ''
                }`}
              >
                {cakeSizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              {errors.cakeSize && (
                <p className="mt-1 text-sm text-red-500">{errors.cakeSize}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cake Flavor *</label>
              <select
                name="cakeFlavor"
                value={formData.cakeFlavor}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                  errors.cakeFlavor ? 'border-red-500' : ''
                }`}
              >
                {cakeFlavors.map((flavor) => (
                  <option key={flavor} value={flavor}>{flavor}</option>
                ))}
              </select>
              {errors.cakeFlavor && (
                <p className="mt-1 text-sm text-red-500">{errors.cakeFlavor}</p>
              )}
            </div>
          </div>

          <p className="text-sm text-red-600 font-medium">
            Chocolate, White & Marble Cakes are NOT FILLED
          </p>
          <p className="text-sm text-blue-600 font-medium">
            Filling is available on Danish Tortes ONLY
          </p>

          {/* Filling and Frosting */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Filling</label>
              <select
                name="filling"
                value={formData.filling}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                {fillings.map((filling) => (
                  <option key={filling} value={filling}>{filling}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Frosting</label>
              <select
                name="frosting"
                value={formData.frosting}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                {frostingOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Decoration Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Color of Decorations</label>
            <input
              type="text"
              name="decorationColor"
              value={formData.decorationColor}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Writing or Message on cake</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          {/* Special Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Special Image</label>
            <input
              type="file"
              name="specialImage"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-red-50 file:text-red-700
                hover:file:bg-red-100"
            />
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Please include any Special Instruction in the Box Below
            </label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              placeholder="Add any special instructions here..."
            />
          </div>

          {/* Order Processing Notice */}
          <div className="space-y-4">
            <p className="text-sm text-blue-600">
              Please Allow 24 - 48 hours processing for all online orders! If you have not received a phone call within 24 hours of placing your order please call us to confirm your order.
            </p>
            
            <p className="text-center font-medium text-lg text-red-800">
              PLEASE CALL 262-652-3984 FOR CONFIRMATION!
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <motion.button
              type="submit"
              className="bg-red-800 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors disabled:bg-red-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Order
            </motion.button>
          </div>
        </form>

        {/* reCAPTCHA */}
        <div className="mt-8 flex justify-end">
          <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 Oliver's Bakery Kenosha Wisconsin, 53142
        </div>
      </motion.div>
    </div>
  );
};

export default OnlineCakeOrder;