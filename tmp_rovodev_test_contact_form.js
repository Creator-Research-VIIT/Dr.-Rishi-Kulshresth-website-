/**
 * Test script for Contact Form API
 * Run this with: node tmp_rovodev_test_contact_form.js
 */

const testContactForm = async () => {
  const baseUrl = 'http://localhost:3000'; // Change port if needed
  
  console.log('🧪 Testing Contact Form API...\n');
  
  // Test 1: Valid submission
  console.log('Test 1: Valid form submission');
  console.log('================================');
  
  const validData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    subject: 'Test Inquiry',
    message: 'This is a test message to verify the contact form is working correctly.'
  };
  
  try {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validData),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ SUCCESS:', data.message);
      console.log('Status:', response.status);
    } else {
      console.log('❌ FAILED:', data.error);
      console.log('Status:', response.status);
    }
  } catch (error) {
    console.log('❌ ERROR:', error.message);
    console.log('Make sure the dev server is running on', baseUrl);
  }
  
  console.log('\n');
  
  // Test 2: Missing required fields
  console.log('Test 2: Missing required fields');
  console.log('================================');
  
  const invalidData = {
    name: 'Jane Doe',
    // missing email, subject, and message
  };
  
  try {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidData),
    });
    
    const data = await response.json();
    
    if (!response.ok && data.error) {
      console.log('✅ EXPECTED ERROR:', data.error);
      console.log('Status:', response.status);
    } else {
      console.log('❌ UNEXPECTED: Should have failed with missing fields');
    }
  } catch (error) {
    console.log('❌ ERROR:', error.message);
  }
  
  console.log('\n');
  
  // Test 3: Invalid email format
  console.log('Test 3: Invalid email format');
  console.log('================================');
  
  const invalidEmail = {
    name: 'Bob Smith',
    email: 'not-a-valid-email',
    subject: 'Test',
    message: 'Test message'
  };
  
  try {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidEmail),
    });
    
    const data = await response.json();
    
    if (!response.ok && data.error) {
      console.log('✅ EXPECTED ERROR:', data.error);
      console.log('Status:', response.status);
    } else {
      console.log('❌ UNEXPECTED: Should have failed with invalid email');
    }
  } catch (error) {
    console.log('❌ ERROR:', error.message);
  }
  
  console.log('\n');
  console.log('🏁 Testing Complete!');
  console.log('\nNext Steps:');
  console.log('1. Go to http://localhost:3000/contact');
  console.log('2. Fill out the form manually');
  console.log('3. Watch for the success toast notification');
  console.log('4. Check browser console (F12) for logged data');
};

testContactForm();
