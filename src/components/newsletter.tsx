'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Turnstile } from '@marsidev/react-turnstile'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'

export const SUCCESS_STATE = 'success'
export const LOADING_STATE = 'loading'
export const ERROR_STATE = 'error'

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string(),
  lastName: z.string(),
  token: z.string()
})

export default function Newsletter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      token: '',
      firstName: '',
      lastName: ''
    }
  })

  const [formSuccess, setFormSuccess] = useState(false)

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { email, token, firstName, lastName } = data

    const res = await fetch('/api/verify', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'content-type': 'application/json'
      }
    })

    const responseData = await res.json()

    if (responseData.success) {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email, firstName, lastName }),
        headers: {
          'content-type': 'application/json'
        }
      })

      if (res.ok) {
        form.reset()
        setFormSuccess(true)
      }

      form.setError('root', {
        type: 'manual',
        message: 'Failed to sign up, please try again later'
      })
    }
  }

  if (formSuccess) {
  }

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
        <div className="mx-auto mt-8 w-full sm:flex-col sm:justify-center lg:mt-8">
          <Form {...form}>
            <form
              className="mx-auto flex w-full max-w-[400px] flex-col justify-center"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="mb-2 flex gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          id="first-name"
                          type="text"
                          autoComplete="given-name"
                          required
                          placeholder="heavy"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          id="last-name"
                          type="text"
                          autoComplete="family-name"
                          required
                          placeholder="riffs"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email-address"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="heavy@riffs.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="token"
                render={({ field }) => (
                  <FormItem className="mx-auto mt-3">
                    <FormControl>
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
                        onSuccess={(token) => field.onChange(token)}
                        options={{
                          theme: 'dark',
                          size: 'flexible'
                        }}
                        id="token"
                        style={{ width: '100%' }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="mt-2 w-full"
                disabled={form.formState.isSubmitting || formSuccess}
              >
                Notify me
              </Button>

              {!form?.formState?.errors?.root && (
                <FormMessage className="mt-2 text-center text-red-400">
                  {form?.formState?.errors?.root?.message}
                </FormMessage>
              )}

              {form.formState.isSubmitting && (
                <FormMessage className="mt-2 text-center text-white">
                  Signing up...
                </FormMessage>
              )}

              {formSuccess && (
                <FormMessage className="mt-2 text-center text-white">
                  Thanks for signing up!
                </FormMessage>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
