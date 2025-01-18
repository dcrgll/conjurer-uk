'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export const SUCCESS_STATE = 'success'
export const LOADING_STATE = 'loading'
export const ERROR_STATE = 'error'

export default function Newsletter() {
  return (
    <section className="mx-auto w-full pb-8">
      <div className="mx-auto max-w-6xl flex-col items-center justify-center px-8 py-12 sm:px-6 lg:flex lg:px-8 lg:py-16">
        <div className="w-full lg:max-w-md lg:flex-1">
          <h2
            className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for our newsletter
          </h2>
        </div>
        <div className="mt-8 w-full max-w-md sm:flex-col sm:justify-center lg:ml-8 lg:mt-8">
          <form
            className="flex w-full flex-col justify-center"
            onSubmit={() => {}}
          >
            <Label htmlFor="email-address" className="sr-only">
              Email address
            </Label>
            <Input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              onChange={() => {}}
            />
            <Button type="submit" className="mt-2 w-full">
              Notify me
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
