// app/api/create-contact/route.js

import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, lastName } = await req.json() // Fetching the email from the request body

    // Email validation
    if (!email || !validateEmail(email) || !firstName || !lastName) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400
      })
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_API_URL = 'https://api.brevo.com/v3/contacts'
    const LIST_ID = 2 // change this

    // Making the request to Brevo API
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        'api-key': BREVO_API_KEY!
      },
      body: JSON.stringify({
        email,

        listIds: [LIST_ID], // You can specify which list to add the contact to (replace with your actual list ID)
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName
        }
      })
    })

    if (!response.ok) {
      throw new Error('Failed to create contact')
    }

    const data = await response.json()
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.error('Error creating contact:', error)
    return new Response(JSON.stringify({ error: 'Failed to create contact' }), {
      status: 500
    })
  }
}

// Simple email validation function
function validateEmail(email: string) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return regex.test(email)
}
