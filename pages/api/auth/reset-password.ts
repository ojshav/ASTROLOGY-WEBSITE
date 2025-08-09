import type { NextApiRequest, NextApiResponse } from 'next';

// Mock version for frontend development
// Backend database integration will be added later

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token, newPassword } = req.body;
  if (!token || !newPassword) {
    return res.status(400).json({ message: 'Token and new password are required.' });
  }

  // Password validation
  if (newPassword.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  try {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock token validation
    // In a real app, this would check the database for a valid, non-expired token
    if (token === 'mock-token-123' || token.startsWith('mock-')) {
      console.log(`Password reset successful for token: ${token}`);
      console.log(`New password length: ${newPassword.length} characters`);
      
      return res.status(200).json({ message: 'Password has been reset successfully.' });
    } else {
      return res.status(400).json({ message: 'Invalid or expired token.' });
    }
  } catch (error: unknown) {
    console.error('Reset password error:', error);
    return res.status(500).json({ message: 'Failed to reset password.' });
  }
}
