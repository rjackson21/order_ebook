class StripeCheckoutsController < ApplicationController
  require 'stripe'

  def index
    # This is your test secret API key.
    Stripe.api_key = 'sk_test_51IGRs0ANQh5njDlsyqDfWI2XUfzeZBvSRH1T3MeXsiRQM3jsYJrxfhpXMT2xt7IuqTSFFdZdGsWZtACGpcqIfcf000WNIMugmz'


    session = Stripe::Checkout::Session.create({
      line_items: [{
        # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: 'price_1LLGIWANQh5njDls6yxGpo7E',
        quantity: 1,
      }],
      mode: 'payment',
      success_url: ENV["EBOOK_ROOT_URL"] + '?success=true',
      cancel_url: ENV["EBOOK_ROOT_URL"] + '?canceled=true',
    })

    render json: { session_url: session.url}
  end
end
