class StripeCheckoutsController < ApplicationController
  require 'stripe'

  def index
    # This is your test secret API key.
    Stripe.api_key = 'sk_test_51IGRs0ANQh5njDlsyqDfWI2XUfzeZBvSRH1T3MeXsiRQM3jsYJrxfhpXMT2xt7IuqTSFFdZdGsWZtACGpcqIfcf000WNIMugmz'

    domain = 'http://localhost:3000'

    session = Stripe::Checkout::Session.create({
      line_items: [{
        # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: 'price_1LLGIWANQh5njDls6yxGpo7E',
        quantity: 1,
      }],
      mode: 'payment',
      success_url: domain + '?success=true',
      cancel_url: domain + '?canceled=true',
    })

    render json: { session_url: session.url}

    # redirect_to session.url, allow_other_host: true
  end
end
