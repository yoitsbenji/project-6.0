import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Comida } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PaymentPayload = {
  payment: {
    card: {
      name: string
      number: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type DeliverPayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipcode: string
      number: number
      complement: string
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomeRestaurants: builder.query<Comida[], void>({
      query: () => 'restaurantes'
    }),
    getCategories: builder.query<Comida, string>({
      query: (id) => `restaurantes/${id}`
    }),
    // https://fake-api-tau.vercel.app/api/efood/checkout
    deliver: builder.mutation<any, DeliverPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    }),
    payment: builder.mutation<any, PaymentPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetHomeRestaurantsQuery,
  useGetCategoriesQuery,
  usePaymentMutation,
  useDeliverMutation
} = api

export default api
