import { NextApiRequest, NextApiResponse } from 'next';

// Mock version for frontend development
// Backend database integration will be added later

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  try {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful response
    // For now, just log the request and return success
    console.log(`Password reset requested for: ${email}`);
    console.log(`Mock reset URL would be: ${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=mock-token-123`);

    res.status(200).json({ 
      message: 'If an account with this email exists, you will receive a password reset link shortly.' 
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
